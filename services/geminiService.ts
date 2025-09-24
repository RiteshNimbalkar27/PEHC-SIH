
import { GoogleGenAI } from "@google/genai";
import type { Patient } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development. 
  // In a real deployed environment, the API_KEY should be set.
  console.warn("API_KEY environment variable not set. Gemini features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateHealthSummary = async (patient: Patient, query: string): Promise<string> => {
  if (!API_KEY) {
    return "Gemini API key is not configured. This is a static response.";
  }

  const model = 'gemini-2.5-flash';

  const healthHistory = patient.healthRecords.map(r => 
    `- On ${r.date} at ${r.location}: ${r.type} - ${r.summary} (by ${r.doctor})`
  ).join('\n');

  const prompt = `
    You are a helpful medical assistant AI. Your task is to summarize a patient's health record based on a doctor's query.
    Be concise, accurate, and focus only on information present in the records.

    PATIENT DETAILS:
    - Name: ${patient.name}
    - Age: ${patient.age}
    - Gender: ${patient.gender}
    - Known Allergies: ${patient.allergies.join(', ') || 'None'}

    PATIENT HEALTH HISTORY:
    ${healthHistory}

    DOCTOR'S QUERY:
    "${query}"

    Based on the provided history and the query, generate a summary.
  `;

  try {
    const response = await ai.models.generateContent({
        model: model,
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating content with Gemini:", error);
    return "There was an error processing the request with the AI model. Please check the console for details.";
  }
};
