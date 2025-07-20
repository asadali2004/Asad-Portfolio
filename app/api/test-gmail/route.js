// Test Gmail authentication
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

export async function GET() {
  try {
    // Verify connection
    await transporter.verify();
    
    return Response.json({
      success: true,
      message: 'Gmail connection successful!',
      config: {
        user: process.env.EMAIL_ADDRESS,
        passwordSet: !!process.env.GMAIL_PASSKEY,
        passwordLength: process.env.GMAIL_PASSKEY?.length || 0
      }
    });
  } catch (error) {
    console.error('Gmail test failed:', error);
    
    return Response.json({
      success: false,
      message: 'Gmail connection failed',
      error: error.message,
      code: error.code
    }, { status: 500 });
  }
}
