// English-to-luganda-translator api
// translates english text or sentence to luganda using google gemini 2.0 flash model
//langchain library
//responds with json object containing the translated text
//author: Waiswa Joseph Bryan

import * as dotenv from 'dotenv';

import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { ChatPromptTemplate } from '@langchain/core/prompts';

dotenv.config();


//initialize model
const model = new ChatGoogleGenerativeAI({
  temperature: 0,
  model: 'gemini-2.0-flash',
  apiKey: process.env.GOOGLE_API_KEY,
});

 export default async function handler(req, res) {
     if (req.method !== 'POST') { 
         res.status(405).json({ error: 'only post requests are Allowed' });
     }
    try {
        const { text } = req.body;
        if (!text) { 
            return res.status(400).json({ error: 'No text provided' });
        }

        //create prompt
        const prompt = ChatPromptTemplate.fromMessages([
            ['system', 'Translate the following English text to Luganda'],
            ['human', '{text}'],
        ]);

        const chainPrompt = await prompt.pipe(model);
        const response = await chainPrompt.invoke({ text });
        
        res.json({ 
            success: true,
            translation: response.content,

         });
       

    } catch (error) {
        //console.error('Error processing request:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Internal Server Error',
       
        });
    }
};
