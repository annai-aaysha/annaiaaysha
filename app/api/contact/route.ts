import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { contactDetails, messages } = await req.json()

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Format the conversation history
    const conversationHistory = messages
      .map((msg: any) => `${msg.sender === "user" ? "User" : "Bot"}: ${msg.text}`)
      .join("\n\n")

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "aahajumrah@gmail.com",
      subject: "New Contact Details from Website Chatbot",
      html: `
        <h2>New Contact Details</h2>
        <p><strong>Name:</strong> ${contactDetails.name}</p>
        <p><strong>Phone:</strong> ${contactDetails.phone}</p>
        <p><strong>WhatsApp:</strong> ${contactDetails.whatsapp}</p>
        <p><strong>Email:</strong> ${contactDetails.email}</p>
        
        <h3>Conversation History:</h3>
        <pre style="white-space: pre-wrap;">${conversationHistory}</pre>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send contact details" },
      { status: 500 }
    )
  }
} 