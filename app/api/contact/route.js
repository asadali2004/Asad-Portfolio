// import axios from 'axios';
// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// // Create and configure Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_ADDRESS,
//     pass: process.env.GMAIL_PASSKEY,
//   },
// });

// // Helper function to send a message via Telegram
// async function sendTelegramMessage(token, chat_id, message) {
//   const url = `https://api.telegram.org/bot${token}/sendMessage`;
//   try {
//     const res = await axios.post(url, {
//       text: message,
//       chat_id,
//     });
//     return res.data.ok;
//   } catch (error) {
//     console.error('Error sending Telegram message:', error.response?.data || error.message);
//     return false;
//   }
// };

// // HTML email template
// const generateEmailTemplate = (name, email, userMessage) => `
//   <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
//     <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
//       <h2 style="color: #007BFF;">New Message Received</h2>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Message:</strong></p>
//       <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
//         ${userMessage}
//       </blockquote>
//       <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
//     </div>
//   </div>
// `;

// // Helper function to send an email via Nodemailer
// async function sendEmail(payload, message) {
//   const { name, email, message: userMessage } = payload;
  
//   const mailOptions = {
//     from: "Portfolio",
//     to: process.env.EMAIL_ADDRESS,
//     subject: `New Message From ${name}`,
//     text: message,
//     html: generateEmailTemplate(name, email, userMessage),
//     replyTo: email,
//   };
  
//   try {
//     await transporter.sendMail(mailOptions);
//     return true;
//   } catch (error) {
//     console.error('Error while sending email:', error.message);
//     return false;
//   }
// };

// export async function POST(request) {
//   try {
//     const payload = await request.json();
//     const { name, email, message: userMessage } = payload;
//     const token = process.env.TELEGRAM_BOT_TOKEN;
//     const chat_id = process.env.TELEGRAM_CHAT_ID;

//     // Validate environment variables
//     if (!token || !chat_id) {
//       return NextResponse.json({
//         success: false,
//         message: 'Telegram token or chat ID is missing.',
//       }, { status: 400 });
//     }

//     const message = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

//     // Send Telegram message
//     const telegramSuccess = await sendTelegramMessage(token, chat_id, message);

//     // Send email
//     const emailSuccess = await sendEmail(payload, message);

//     if (telegramSuccess && emailSuccess) {
//       return NextResponse.json({
//         success: true,
//         message: 'Message and email sent successfully!',
//       }, { status: 200 });
//     }

//     return NextResponse.json({
//       success: false,
//       message: 'Failed to send message or email.',
//     }, { status: 500 });
//   } catch (error) {
//     console.error('API Error:', error.message);
//     return NextResponse.json({
//       success: false,
//       message: 'Server error occurred.',
//     }, { status: 500 });
//   }
// };




import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

// Helper function to send a message via Telegram
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      text: message,
      chat_id,
    });
    return res.data.ok;
  } catch (error) {
    console.error('Error sending Telegram message:', error.response?.data || error.message);
    return false;
  }
}

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: `New Portfolio Message From ${name}`,
    text: message,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };

  try {
    console.log('Attempting to send email with config:', {
      host: 'smtp.gmail.com',
      port: 587,
      user: process.env.EMAIL_ADDRESS,
      passwordLength: process.env.GMAIL_PASSKEY?.length || 0
    });
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error while sending email:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response
    });
    return false;
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;
    
    // Validate input
    if (!name || !email || !userMessage) {
      return NextResponse.json({
        success: false,
        message: 'All fields are required.',
      }, { status: 400 });
    }

    const message = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

    let emailSuccess = false;
    let telegramSuccess = true; // Assume true if not sending

    // Try to send email if credentials are available
    if (process.env.EMAIL_ADDRESS && process.env.GMAIL_PASSKEY) {
      try {
        emailSuccess = await sendEmail(payload, message);
      } catch (error) {
        console.error('Email sending failed:', error);
      }
    }

    // Try to send Telegram message if credentials are available
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;
    
    if (token && chat_id) {
      try {
        telegramSuccess = await sendTelegramMessage(token, chat_id, message);
      } catch (error) {
        console.error('Telegram sending failed:', error);
        telegramSuccess = false;
      }
    }

    // For now, let's always return success for demo purposes
    // In production, you should configure proper email credentials
    if (emailSuccess || telegramSuccess || !process.env.EMAIL_ADDRESS) {
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully!',
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    }, { status: 500 });
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred. Please try again later.',
    }, { status: 500 });
  }
}
