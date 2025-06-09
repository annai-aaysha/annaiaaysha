import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai"
import { NextResponse } from "next/server"

// Initialize the Gemini API with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

export async function POST(req: Request) {
  try {
    // Check if API key is available
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set in environment variables")
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      )
    }

    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      console.error("Invalid messages format:", messages)
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      )
    }

    // Get the model
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

    // Format messages for Gemini
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }))

    console.log("Sending request to Gemini with messages:", formattedMessages)

    // Generate response with more controlled parameters
    const result = await model.generateContent({
      contents: formattedMessages,
      generationConfig: {
        temperature: 0.3, // Lower temperature for more focused responses
        topK: 20, // Reduced for more focused token selection
        topP: 0.8, // Slightly reduced for more focused responses
        maxOutputTokens: 1024, // Increased for complete responses
      },
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
    })

    if (!result.response) {
      console.error("No response from Gemini")
      return NextResponse.json(
        { error: "No response from AI model" },
        { status: 500 }
      )
    }

    const response = result.response.text()
    console.log("Received response from Gemini:", response)

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Detailed error in chat API:", error)
    return NextResponse.json(
      { 
        error: "Failed to generate response",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    )
  }
} 