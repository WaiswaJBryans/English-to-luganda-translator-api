
# English → Luganda Translator API

A lightweight and efficient **serverless translation API** built using **LangChain**, **Google Gemini (Generative AI)**, and **Vercel**.  
It translates English text into **Luganda** through a simple POST request.

---

## Features

-  **English → Luganda translation** using Google Gemini 2.0 Flash  
-  **Built with LangChain** prompt templates for better control  
-  **Serverless deployment** via [Vercel](https://vercel.com/)  
-  **Secure API key management** using environment variables  
-  **JSON-based REST API** for easy integration with web and mobile apps  

---

## Project Structure

translator-app/
│
├── api/
│ └── translator.js # Main serverless API endpoint
│
├── package.json # Project dependencies
├── .env # Environment variables (not uploaded)
├── .gitignore # Ignore node_modules, .env, etc.
└── README.md # Documentation


---

## Tech Stack

| Component | Technology |
|------------|-------------|
| Backend Runtime | Node.js |
| Framework | LangChain Core |
| AI Model | Google Gemini 2.0 Flash |
| Deployment | Vercel Serverless Functions |
| Language | JavaScript (ES Modules) |

---

##  Installation & Setup

### 1 Clone the Repository
```bash
git clone https://github.com/yourusername/translator-app.git
cd translator-app
```
##3 2 Install Dependencies
```bash
npm install
```
### 3 Add Environment Variables

Create a .env file in your project root:
```
GOOGLE_API_KEY=your_google_api_key_here
```

 API Usage
 Endpoint
 ```
POST /api/translator
```
 Request Headers
 ```
{
  "Content-Type": "application/json"
}
```
 Request Body
 ```
{
  "text": "Good morning, how are you?"
}
```
 Example cURL Command
```
curl -X POST https://translator-app.vercel.app/api/translator \
  -H "Content-Type: application/json" \
  -d '{"text":"Good morning"}'
```
 Sample Response
 ```
{
  "success": true,
  "translation": "Wasuze otya nno"
}
```
### Code Overview

The core logic uses LangChain to structure prompts and communicate with Gemini AI:
```
const model = new ChatGoogleGenerativeAI({
  temperature: 0,
  model: "gemini-2.0-flash",
  apiKey: process.env.GOOGLE_API_KEY,
});

const prompt = ChatPromptTemplate.fromMessages([
  ["system", "Translate the following English text to Luganda"],
  ["human", "{text}"],
]);

const chain = await prompt.pipe(model);
const response = await chain.invoke({ text });
```

## Troubleshooting
Issue	Cause	Fix
Missing value for input variable 'text'	Wrong variable name in .invoke()	Use .invoke({ text })
500 Internal Server Error	Invalid or missing API key	Check .env and Vercel settings
405 Method Not Allowed	Wrong HTTP method used	Use POST only

## Author
Waiswa Joseph Bryans
Javascript — Software Engineer
Kampala, Uganda

## License

This project is licensed under the MIT License — feel free to use, modify, and distribute for educational or commercial purposes.

 If this project helped you, please give it a star on GitHub!

---

