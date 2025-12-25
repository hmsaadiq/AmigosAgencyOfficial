const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    console.log('Function called with:', event.body);
    
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not found');
    }

    const { name, email, phone, country, package, message } = JSON.parse(event.body);
    
    // Map package values to display names
    const packageNames = {
      'basic': 'Basic Admission',
      'standard': 'Standard Package', 
      'full': 'Full Support'
    };
    
    const packageDisplay = packageNames[package] || package;
    
    console.log('Sending email with data:', { name, email, packageDisplay });
    
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'amigosaandgeneralservice@gmail.com',
      subject: `New Contact Form Submission - ${packageDisplay}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Package:</strong> ${packageDisplay}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });
    
    console.log('Resend result:', result);
    
    if (result.error) {
      console.error('Resend error:', result.error);
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: result.error })
      };
    }
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, result })
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};