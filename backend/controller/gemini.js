const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("GEMINI_API_KEY is not set. Please add it to your environment variables.");
} else {
  console.log("GEMINI_API_KEY is set.");
}

const systemPrompt = `
You're a customer support chatbot for the Multivendor e-shop. 
Help users with questions about products, orders, refunds, shipping, and more.
Answer their queries clearly and concisely, providing helpful information.

Please return your response as a clear message in plain text format and in points. Each point starts from a
number and is separated by a period.
`;

exports.getGeminiResponse = async (req, res) => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  try {
    const data = req.body;
    console.log("Received data:", data);

    if (!data.query) {
      return res.status(400).json({ message: "No query provided" });
    }

    console.log("Calling Gemini API with user query:", data.query);

    let completion;
    try {
      const prompt = `${systemPrompt}\nUser query: "${data.query}"`;

      completion = await model.generateContent(prompt);
      console.log("API call succeeded:", completion);
    } catch (apiError) {
      console.error("API call failed:", apiError);
      return res.status(500).json({ message: "Failed to contact Gemini API", error: apiError.message });
    }

    console.log("Complete API response:", completion);

    const messageContent = completion.response.text();
    console.log("Message content:", messageContent);

    if (!messageContent) {
      return res.status(500).json({ message: "Invalid response from Gemini API" });
    }

    res.status(200).json({ response: messageContent });

  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
};