"use client"; 

// Import useState and ChangeEvent from React
import React, { useState, ChangeEvent } from "react"; 
import {Card, CardHeader, CardTitle, CardDescription, CardContent,} from "@/components/ui/card"; 
import { Textarea } from "@/components/ui/textarea"; 
import { Button } from "@/components/ui/button";


export default function WordCounter() {
  // State to manage the input text
  const [text, setText] = useState<string>("");

  // Function to handle text input changes
  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  // Function to clear the input text
  const clearText = () => {
    setText("");
  };

  // Calculate word count
  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;

  // Calculate character count
  const charCount = text.length;

  // JSX return statement rendering the Word Counter UI
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-gradient-to-r from-black via-transparent to-black p-4"> 
      <Card className="w-full max-w-md shadow-lg rounded-lg border border-gray-200 bg-white transition-transform transform hover:scale-105">
        <CardHeader className="text-center justify-center flex flex-col p-6">
          <CardTitle className="text-2xl font-semibold text-gray-800">Text Analysis</CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            Enter text and see the word and character count.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 p-4">
          {/* Textarea for input text */}
          <Textarea
            id="text-input"
            placeholder="Enter your text here..."
            className="h-32 resize-none border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={text}
            onChange={handleTextChange}
          />
          {/* Display word and character count */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <span id="word-count" className="font-medium text-blue-600">{wordCount}</span> words,{" "}
              <span id="char-count" className="font-medium text-blue-600">{charCount}</span> characters
            </div>
            {/* Button to clear the input text */}
            <Button className="bg-blue-500 text-white hover:bg-blue-600 transition duration-200" onClick={clearText}>
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}  