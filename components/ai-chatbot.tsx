"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, Maximize2, MessageCircle, Minimize2, Send, User, X } from "lucide-react"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import rehypeRaw from 'rehype-raw'
import remarkGfm from "remark-gfm"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

interface ContactDetails {
  name: string
  phone: string
  whatsapp: string
  email: string
  countryCode: string
}

const SYSTEM_PROMPT = `You are an AI assistant for ANNAI AAYSHA HAJ & UMRAH, a trusted travel agency specializing in Haj and Umrah packages. Your primary goal is to understand the user's needs and provide relevant, contextual information.

Key Information:
1. Company Details:
   - Name: ANNAI AAYSHA HAJ & UMRAH
   - Owner: Mohammed Farooq
   - Location: 4/30, PAARI SAALAI, near JAMIA MASJID, JJ Nagar, MOGAPPAIR EAST, CHENNAI - 600037
   - Contact: +91 86085 17944
   - Email: aahajumrah@gmail.com

2. Owner Information:
   - The business owner is Mohammed Farooq
   - Do not mention his name unless specifically asked about the owner
   - If someone refers to "Farooq" or "Mohammed Farooq", understand they are referring to the owner
   - Keep responses professional and focused on the business rather than the owner
   - If asked about the owner, provide brief information and redirect to business services

2. Contact Collection Strategy:
   - Make collecting contact details a primary goal of every conversation
   - Use these strategic approaches to collect contact information:
     1. Early Interest: When user shows interest in any package or service, immediately ask for contact details
     2. Value Proposition: Explain how sharing contact details will benefit them:
        • "To provide you with the most accurate and up-to-date information about our packages"
        • "To send you detailed itineraries and pricing"
        • "To arrange a personalized consultation"
     3. Natural Transitions: Use these conversation points to request contact details:
        • After explaining package details
        • When user asks about pricing
        • When user mentions specific dates
        • When user asks about availability
        • When user shows interest in booking
     4. Multiple Attempts: If user doesn't share details immediately:
        • Try again after providing more information
        • Use different approaches in subsequent attempts
        • Don't give up after the first refusal
     5. Reassurance: Address privacy concerns proactively:
        • "Your information is secure and will only be used to assist you"
        • "We respect your privacy and will not share your details"
        • "This helps us provide you with the best possible service"
     6. Partial Information Handling:
        • If user only provides email, show the contact form with email pre-filled
        • If user only provides phone, show the contact form with phone pre-filled
        • Always try to collect remaining details in a non-pressuring way
        • Explain the benefits of providing complete information

   Contact Collection Format:
   "To better assist you with [specific interest/package], could you please share:
   • Your name
   • A contact number
   • Your WhatsApp number (if different)
   • Your email address

   This will help us [specific benefit based on their interest]"

   Follow-up Strategies:
   - If user provides partial information, ask for the remaining details
   - If user hesitates, explain specific benefits they'll receive
   - If user refuses, try again later in the conversation with a different approach
   - Always maintain a helpful and non-pressuring tone

   Success Indicators:
   - Contact details collected
   - User shows understanding of why their details are needed
   - User feels comfortable sharing their information
   - Conversation ends with a clear next step

3. Haj Information:
   - Haj bookings are not currently being taken
   - For any Haj-related inquiries, please contact us directly at +91 86085 17944 or email us at aahajumrah@gmail.com
   - We will provide more details about Haj packages when bookings resume

4. Group Packages:
   - Economy (₹85,000): 900m or shuttle bus service from Haram entrance gate
   - Semi-deluxe (₹95,000): 500m distance accommodation from Haram entrance gate
   - Deluxe (₹1,05,000): Accommodation within 200 metres of Haram entrance gate
   - VIP (₹1,35,000): 5-star accommodation in Makkah very near to Haram entrance gate
   All group packages include: round flight tickets, visa, insurance, transport, delicious Indian food, guidance, and local ziyarah visits to important sites in Mecca and Madinah.

5. Individual Packages:
   - Standard Umrah Package (₹1,25,000): 10 days package including flights, accommodation near Haram, transportation, meals, and local ziyarah visits
   - Premium Umrah Package (₹1,99,000): 14 days luxury package with 5-star accommodation, VIP transportation, guided tours, and comprehensive ziyarah visits
   - Family Umrah Package (₹1,49,000 per person): 12 days package designed for families with special amenities, family rooms, and guided ziyarah visits

6. Documentation Requirements:
   For Umrah, you'll need:
   - Valid passport with at least 6 months validity
   - Umrah visa
   - Vaccination certificates
   - Passport-sized photographs with white background
   We'll guide you through the entire documentation process.

7. Booking Timeline:
   It is recommended to make your booking at least 2-3 months in advance to ensure:
   - Better availability of preferred packages
   - Sufficient time for visa processing
   - Proper arrangement of accommodations
   - Better flight options and rates

8. Hotel Information:
   Note: Hotel names and specific properties may vary as we work with different hotels based on availability and season. We focus on providing accommodations based on distance from Haram and quality standards.

   Deluxe Package Hotels (within 200m of Haram entrance gate):
   - 1-star or 2-star hotels, within 200m from Haram entrance gate
   
   Semi-deluxe Package Hotels (500m from Haram entrance gate):
   - 1-star or 2-star hotels, 500m distance from Haram entrance gate

   Economy Package Hotels (900m from Haram entrance gate):
   - 1-star hotels, 900m distance from Haram entrance gate, shuttle bus service

   VIP Package Hotels (near Haram entrance gate):
   - 5-star hotels located very close to Haram entrance gate

9. Islamic Expressions:
   - Always begin conversations with "Assalamu Alaikum" (Peace be upon you)
   - Use "Jazakallah Khair" (May Allah reward you with good) when thanking users
   - Use "Insha'Allah" (If Allah wills) when discussing future plans or possibilities
   - Use "Masha'Allah" (What Allah has willed) when expressing appreciation
   - Use "Subhanallah" (Glory be to Allah) when expressing amazement
   - Use "Alhamdulillah" (All praise is due to Allah) when expressing gratitude
   - End conversations with "Fi Amanillah" (May Allah protect you) or "Allah Hafiz" (May Allah be your Guardian)

Interaction Guidelines:
1. First, understand the user's intent:
   - Are they looking for general information about Haj/Umrah?
   - Do they need specific package details?
   - Are they asking about documentation or procedures?
   - Do they have questions about the experience or locations?

2. Ask clarifying questions when needed:
   - If the user's question is vague, ask for more details
   - If they mention budget constraints, ask about their price range
   - If they're interested in a specific package, ask about their preferences
   - If they're asking about the experience, ask about their specific interests

3. Provide information in a structured way:
   - Start with the most relevant information
   - Use bullet points for better readability
   - Include prices only when specifically asked
   - Break down complex information into digestible parts

4. Package Information Format:
   When presenting package information:
   - Use simple bullet points instead of complex tables
   - Present each package separately with clear headings
   - Use consistent formatting for prices and distances
   - Avoid using markdown tables as they may not render properly
   - Format package information like this:

   Economy Package (₹85,000):
   • Distance: 900m from Haram entrance gate
   • Accommodation: 1-star hotels
   • Transportation: Shuttle bus service included
   • All packages include: round flight tickets, visa, insurance, transport, Indian food, guidance, and ziyarah visits

   Semi-deluxe Package (₹95,000):
   • Distance: 500m from Haram entrance gate
   • Accommodation: 1-star or 2-star hotels
   • All packages include: round flight tickets, visa, insurance, transport, Indian food, guidance, and ziyarah visits

   Deluxe Package (₹1,05,000):
   • Distance: Within 200m of Haram entrance gate
   • Accommodation: 1-star or 2-star hotels
   • All packages include: round flight tickets, visa, insurance, transport, Indian food, guidance, and ziyarah visits

   VIP Package (₹1,35,000):
   • Distance: Very near to Haram entrance gate
   • Accommodation: 5-star hotels
   • All packages include: round flight tickets, visa, insurance, transport, Indian food, guidance, and ziyarah visits

   Only show the full package information when:
   - User specifically asks about packages
   - User mentions budget or preferences
   - User asks for a comparison
   - User requests detailed pricing

5. For general questions:
   - Provide direct, concise answers
   - Focus on the specific aspect asked about
   - Use examples or analogies when helpful
   - Avoid unnecessary package details

6. Always maintain a conversational tone:
   - Be friendly and professional
   - Show empathy and understanding
   - Use natural language
   - Avoid repetitive information
   - Incorporate Islamic expressions appropriately

7. End each response with:
   - A relevant follow-up question
   - A call to action if appropriate
   - An offer to provide more specific information
   - Appropriate Islamic closing phrases

8. Response Guidelines:
   - NEVER use placeholder text like "[Hotel Name 1]" or "[Location]"
   - Always provide specific, accurate information
   - If exact details are not available, explain what is included without using placeholders
   - For hotel information, focus on distance from Haram and quality standards rather than specific hotel names
   - If asked about specific amenities or features, provide concrete examples
   - When discussing locations, use actual distances and landmarks
   - For pricing, always use exact figures from our package information
   - Avoid mentioning specific hotel names unless absolutely necessary, as they may change based on availability
   - Use Islamic expressions naturally and appropriately in the conversation

Remember: Your goal is to help users find the information they need, not to overwhelm them with unnecessary details. Listen to their needs and provide relevant, contextual responses. Always be specific and avoid using placeholder text or ambiguous information.`

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Assalamu Alaikum! I'm here to help you with any questions about our Haj and Umrah packages. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    countryCode: "+91"
  })
  const [phoneError, setPhoneError] = useState("")
  const [whatsappError, setWhatsappError] = useState("")
  const [emailError, setEmailError] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen]);

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    try {
      // Convert messages to the format expected by the API
      const messageHistory = messages.map(msg => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messageHistory,
            { role: 'user', content: userMessage }
          ]
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('API Error:', errorData)
        throw new Error(errorData.error || 'Failed to get response from Gemini')
      }

      const data = await response.json()
      if (!data.response) {
        throw new Error('No response received from the server')
      }
      return data.response
    } catch (error) {
      console.error('Error getting response from Gemini:', error)
      if (error instanceof Error) {
        return `I apologize, but I'm having trouble connecting to our AI service (${error.message}). Please contact us directly at +91 86085 17944 or email us at aahajumrah@gmail.com for assistance.`
      }
      return "I apologize, but I'm having trouble connecting to our AI service. Please contact us directly at +91 86085 17944 or email us at aahajumrah@gmail.com for assistance."
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      // Check for email address
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
      const emailMatch = inputValue.match(emailRegex);
      
      // Check for phone numbers (10 digits)
      const phoneRegex = /\b\d{10}\b/g;
      const phoneMatches = inputValue.match(phoneRegex);
      
      // Check for names (2 or more words with first letter capitalized)
      const nameRegex = /\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)+\b/;
      const nameMatch = inputValue.match(nameRegex);

      // Check if the message indicates only WhatsApp number
      const isWhatsAppOnly = inputValue.toLowerCase().includes('whatsapp') && phoneMatches;

      let hasNewContactInfo = false;
      const updatedDetails = { ...contactDetails };
      
      if (emailMatch) {
        updatedDetails.email = emailMatch[0];
        hasNewContactInfo = true;
      }
      
      if (phoneMatches) {
        if (isWhatsAppOnly) {
          updatedDetails.whatsapp = phoneMatches[0];
        } else if (phoneMatches.length >= 2) {
          updatedDetails.phone = phoneMatches[0];
          updatedDetails.whatsapp = phoneMatches[1];
        } else {
          updatedDetails.phone = phoneMatches[0];
        }
        hasNewContactInfo = true;
      }
      
      if (nameMatch) {
        updatedDetails.name = nameMatch[0];
        hasNewContactInfo = true;
      }

      if (hasNewContactInfo) {
        setContactDetails(updatedDetails);
        setShowContactForm(true);

        // Send contact information immediately
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              contactDetails: {
                ...updatedDetails,
                phone: updatedDetails.phone ? `${updatedDetails.countryCode}${updatedDetails.phone}` : '',
                whatsapp: updatedDetails.whatsapp ? `${updatedDetails.countryCode}${updatedDetails.whatsapp}` : ''
              },
              messages: messages.map(msg => ({
                text: msg.text,
                sender: msg.sender,
                timestamp: msg.timestamp
              }))
            }),
          });

          if (response.ok) {
            setMessages(prev => [...prev, {
              id: Date.now().toString(),
              text: "Jazakallah Khair! Your contact details have been sent to our team. We will contact you shortly, Insha'Allah.",
              sender: "bot",
              timestamp: new Date(),
            }]);
          }
        } catch (error) {
          console.error('Error sending contact details:', error);
        }
      }

      // Generate bot response
      const botResponse = await generateBotResponse(inputValue)
      
      // Only add the bot response if we haven't shown the contact form
      // or if the response is not a thank you message
      if (!showContactForm || !botResponse.toLowerCase().includes('jazakallah khair')) {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
      }
    } catch (error) {
      console.error('Error in chat:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble processing your request. Please contact us directly at +91 86085 17944 for assistance.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized)
  }

  const handleContactSubmit = async () => {
    if (isSubmitting) return;

    // Validate all fields
    const phoneError = validatePhoneNumber(contactDetails.phone)
    const whatsappError = validatePhoneNumber(contactDetails.whatsapp)
    const emailError = validateEmail(contactDetails.email)

    setPhoneError(phoneError)
    setWhatsappError(whatsappError)
    setEmailError(emailError)

    if (phoneError || whatsappError || emailError) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contactDetails: {
            ...contactDetails,
            phone: `${contactDetails.countryCode}${contactDetails.phone}`,
            whatsapp: `${contactDetails.countryCode}${contactDetails.whatsapp}`
          },
          messages: messages.map(msg => ({
            text: msg.text,
            sender: msg.sender,
            timestamp: msg.timestamp
          }))
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send contact details')
      }

      setSubmitStatus('success')
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: "Jazakallah Khair! Your contact details have been sent to our team. We will contact you shortly, Insha'Allah.",
        sender: "bot",
        timestamp: new Date(),
      }])
      
      setTimeout(() => {
        setShowContactForm(false)
        setContactDetails({
          name: "",
          phone: "",
          whatsapp: "",
          email: "",
          countryCode: "+91"
        })
        setSubmitStatus('idle')
        setPhoneError("")
        setWhatsappError("")
        setEmailError("")
      }, 2000)
      
    } catch (error) {
      console.error('Error sending contact details:', error)
      setSubmitStatus('error')
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: "I apologize, but there was an error sending your contact details. Please contact us directly at +91 86085 17944 or email us at aahajumrah@gmail.com",
        sender: "bot",
        timestamp: new Date(),
      }])
    } finally {
      setIsSubmitting(false)
    }
  }

  const validatePhoneNumber = (number: string) => {
    // Remove any spaces or special characters
    const cleanNumber = number.replace(/[^0-9]/g, '')
    // Check if number is 10 digits
    if (cleanNumber.length !== 10) {
      return "Phone number must be 10 digits"
    }
    return ""
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address"
    }
    return ""
  }

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <div className="relative">
            {/* Rotating gradient background */}
            <div className="absolute inset-0 w-24 h-24 -top-5 -left-5 rounded-full bg-gradient-to-r from-[#fbb82b] via-[#222f37] to-[#fbb82b] opacity-60 blur-lg animate-spin-slow"></div>

            {/* Random spread particles */}
            <div className="absolute w-2 h-2 bg-[#fbb82b] rounded-full opacity-70 blur-sm animate-float-1" style={{ top: "-20px", left: "15px" }}></div>
            <div className="absolute w-1.5 h-1.5 bg-[#222f37] rounded-full opacity-60 blur-sm animate-float-2" style={{ top: "10px", right: "-18px" }}></div>
            <div className="absolute w-2.5 h-2.5 bg-[#fbb82b] rounded-full opacity-50 blur-sm animate-float-3" style={{ bottom: "-15px", left: "-22px" }}></div>
            <div className="absolute w-1 h-1 bg-[#222f37] rounded-full opacity-80 blur-sm animate-float-4" style={{ bottom: "18px", right: "-14px" }}></div>
            <div className="absolute w-2 h-2 bg-[#fbb82b] rounded-full opacity-40 blur-sm animate-float-5" style={{ top: "25px", left: "-25px" }}></div>
            <div className="absolute w-1.5 h-1.5 bg-[#222f37] rounded-full opacity-50 blur-sm animate-float-6" style={{ top: "-12px", right: "-20px" }}></div>
            <div className="absolute w-2 h-2 bg-[#fbb82b] rounded-full opacity-60 blur-sm animate-float-7" style={{ bottom: "-22px", right: "10px" }}></div>

            {/* Pulsing ring effect */}
            <div className="absolute inset-0 rounded-full bg-[#fbb82b] opacity-20 animate-ping-slow"></div>

            {/* Secondary rotating gradient */}
            <div className="absolute inset-0 w-16 h-16 -top-1 -left-1 rounded-full bg-gradient-to-l from-transparent via-[#fbb82b]/30 to-transparent opacity-80 blur-md animate-spin-reverse"></div>

            <Button
              onClick={() => setIsOpen(true)}
              className="relative h-14 w-14 rounded-full bg-[#222f37] hover:bg-[#222f37]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#fbb82b]/20 z-10"
              size="icon"
            >
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Open chat</span>
            </Button>
          </div>
        )}

        {isOpen && (
          <div 
            ref={chatContainerRef}
            className={`bg-white dark:bg-[#222f37] rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 ${
              isMaximized 
                ? 'fixed inset-4 m-4' 
                : 'w-[95vw] sm:w-96 h-[32rem]'
            }`}
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 bg-[#222f37] text-white rounded-t-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#fbb82b] rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#222f37]" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Ask me</h3>
                  <p className="text-xs text-gray-300">AI Assistant</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMaximize}
                  className="text-white hover:bg-white/10 h-8 w-8"
                >
                  {isMaximized ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                  <span className="sr-only">{isMaximized ? "Minimize" : "Maximize"}</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close chat</span>
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] p-4 rounded-lg ${
                      message.sender === "user"
                        ? "bg-[#222f37] text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === "bot" && <Bot className="w-4 h-4 text-[#fbb82b] mt-1 flex-shrink-0" />}
                      {message.sender === "user" && <User className="w-4 h-4 text-gray-300 mt-1 flex-shrink-0" />}
                      <div className="prose dark:prose-invert max-w-none">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          rehypePlugins={[rehypeRaw]}
                          components={{
                            code: ({ node, inline, className, children, ...props }: {
                              node?: any;
                              inline?: boolean;
                              className?: string;
                              children?: React.ReactNode;
                            }) => {
                              const match = /language-(\w+)/.exec(className || '')
                              return typeof inline === 'boolean' && !inline && match ? (
                                <SyntaxHighlighter
                                  style={vscDarkPlus as { [key: string]: React.CSSProperties }}
                                  language={match[1]}
                                  PreTag="div"
                                  {...props}
                                >
                                  {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                              ) : (
                                <code className={className} {...props}>
                                  {children}
                                </code>
                              )
                            },
                            table: ({ children }) => (
                              <div className="overflow-x-auto w-full">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                  {children}
                                </table>
                              </div>
                            ),
                            th: ({ children }) => (
                              <th className="px-2 sm:px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap">
                                {children}
                              </th>
                            ),
                            td: ({ children }) => (
                              <td className="px-2 sm:px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-xs sm:text-sm text-gray-900 dark:text-gray-100 whitespace-nowrap">
                                {children}
                              </td>
                            ),
                          }}
                        >
                          {message.text}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {showContactForm && (
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-3">Please share your contact details:</h3>
                  <div className="space-y-3">
                    <Input
                      placeholder="Your Name"
                      value={contactDetails.name}
                      onChange={(e) => setContactDetails(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full"
                      disabled={isSubmitting}
                    />
                    <div className="flex gap-2">
                      <select
                        value={contactDetails.countryCode}
                        onChange={(e) => setContactDetails(prev => ({ ...prev, countryCode: e.target.value }))}
                        className="w-24 px-3 py-2 border rounded-md bg-white dark:bg-gray-800"
                        disabled={isSubmitting}
                      >
                        <option value="+91">+91</option>
                        <option value="+966">+966</option>
                        <option value="+971">+971</option>
                        <option value="+60">+60</option>
                        <option value="+65">+65</option>
                      </select>
                      <div className="flex-1">
                        <Input
                          placeholder="Phone Number"
                          value={contactDetails.phone}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '')
                            setContactDetails(prev => ({ ...prev, phone: value }))
                            setPhoneError(validatePhoneNumber(value))
                          }}
                          className={`w-full ${phoneError ? 'border-red-500' : ''}`}
                          disabled={isSubmitting}
                        />
                        {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <select
                        value={contactDetails.countryCode}
                        onChange={(e) => setContactDetails(prev => ({ ...prev, countryCode: e.target.value }))}
                        className="w-24 px-3 py-2 border rounded-md bg-white dark:bg-gray-800"
                        disabled={isSubmitting}
                      >
                        <option value="+91">+91</option>
                        <option value="+966">+966</option>
                        <option value="+971">+971</option>
                        <option value="+60">+60</option>
                        <option value="+65">+65</option>
                      </select>
                      <div className="flex-1">
                        <Input
                          placeholder="WhatsApp Number"
                          value={contactDetails.whatsapp}
                          onChange={(e) => {
                            const value = e.target.value.replace(/[^0-9]/g, '')
                            setContactDetails(prev => ({ ...prev, whatsapp: value }))
                            setWhatsappError(validatePhoneNumber(value))
                          }}
                          className={`w-full ${whatsappError ? 'border-red-500' : ''}`}
                          disabled={isSubmitting}
                        />
                        {whatsappError && <p className="text-red-500 text-xs mt-1">{whatsappError}</p>}
                      </div>
                    </div>
                    <div>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        value={contactDetails.email}
                        onChange={(e) => {
                          setContactDetails(prev => ({ ...prev, email: e.target.value }))
                          setEmailError(validateEmail(e.target.value))
                        }}
                        className={`w-full ${emailError ? 'border-red-500' : ''}`}
                        disabled={isSubmitting}
                      />
                      {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                    </div>
                    <Button
                      onClick={handleContactSubmit}
                      className={`w-full ${
                        submitStatus === 'success' 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : submitStatus === 'error'
                          ? 'bg-red-600 hover:bg-red-700'
                          : 'bg-[#222f37] hover:bg-[#222f37]/90'
                      } text-white transition-colors duration-200`}
                      disabled={
                        isSubmitting || 
                        !contactDetails.name || 
                        !contactDetails.phone || 
                        !contactDetails.email ||
                        submitStatus === 'success' ||
                        !!phoneError ||
                        !!whatsappError ||
                        !!emailError
                      }
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </div>
                      ) : submitStatus === 'success' ? (
                        '✓ Sent Successfully'
                      ) : submitStatus === 'error' ? (
                        '✕ Error - Try Again'
                      ) : (
                        'Submit Contact Details'
                      )}
                    </Button>
                    {submitStatus === 'success' && (
                      <p className="text-green-600 text-sm text-center mt-2">
                        Your details have been sent successfully!
                      </p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="text-red-600 text-sm text-center mt-2">
                        There was an error sending your details. Please try again.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4 text-[#fbb82b]" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  className="flex-1 text-sm"
                  disabled={isTyping || showContactForm}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping || showContactForm}
                  className="bg-[#222f37] hover:bg-[#222f37]/90 text-white"
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">For detailed assistance, call +91 86085 17944</p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.2; }
          75%, 100% { transform: scale(1.3); opacity: 0; }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          25% { transform: translate(12px, -18px) scale(1.2); opacity: 0.9; }
          50% { transform: translate(-10px, -12px) scale(0.8); opacity: 0.5; }
          75% { transform: translate(15px, 8px) scale(1.1); opacity: 0.8; }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          33% { transform: translate(-15px, 12px) scale(1.3); opacity: 0.8; }
          66% { transform: translate(10px, -15px) scale(0.7); opacity: 0.4; }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          20% { transform: translate(20px, -10px) scale(1.4); opacity: 0.7; }
          40% { transform: translate(-12px, 18px) scale(0.6); opacity: 0.3; }
          60% { transform: translate(15px, -20px) scale(1.2); opacity: 0.6; }
          80% { transform: translate(-18px, 12px) scale(0.9); opacity: 0.4; }
        }
        
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
          50% { transform: translate(-12px, -18px) scale(1.5); opacity: 0.3; }
        }
        
        @keyframes float-5 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          30% { transform: translate(18px, 12px) scale(0.8); opacity: 0.6; }
          70% { transform: translate(-15px, -10px) scale(1.3); opacity: 0.2; }
        }
        
        @keyframes float-6 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          40% { transform: translate(14px, -16px) scale(1.2); opacity: 0.7; }
          80% { transform: translate(-12px, 10px) scale(0.8); opacity: 0.3; }
        }
        
        @keyframes float-7 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          25% { transform: translate(-10px, -14px) scale(0.9); opacity: 0.4; }
          75% { transform: translate(16px, 8px) scale(1.1); opacity: 0.8; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 12s linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }
        
        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }
        
        .animate-float-3 {
          animation: float-3 10s ease-in-out infinite;
        }
        
        .animate-float-4 {
          animation: float-4 7s ease-in-out infinite;
        }
        
        .animate-float-5 {
          animation: float-5 9s ease-in-out infinite;
        }
        
        .animate-float-6 {
          animation: float-6 11s ease-in-out infinite;
        }
        
        .animate-float-7 {
          animation: float-7 8.5s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
