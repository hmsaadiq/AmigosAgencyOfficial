// Backend API handles email sending

export async function sendContactNotification(formData: {
  name: string;
  email: string;
  phone: string;
  country: string;
  package: string;
  message: string;
}) {
  try {
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    console.log('Server response:', result);
    
    if (!result.success) {
      console.error('Server error details:', result.error);
      throw new Error(JSON.stringify(result.error));
    }
    
    console.log('Email sent successfully:', result);
    return result;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}