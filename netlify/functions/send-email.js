const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { name, email, phone, country, package, message } = JSON.parse(event.body);
    
    // Map package values to display names
    const packageNames = {
      'basic': 'Basic Admission',
      'standard': 'Standard Package', 
      'full': 'Full Support'
    };
    
    const packageDisplay = packageNames[package] || package;
    
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
    
    if (result.error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: result.error })
      };
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};