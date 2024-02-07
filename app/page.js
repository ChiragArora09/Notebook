'use client'

import { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import SuggestionForm from "./components/SuggestionForm";
import Button from "./components/Button";

export default function Home() {
  const [showSuggestionModel, setShowSuggestionModel] = useState(false)
  
  const openSuggestionModel = () => {
    setShowSuggestionModel(true)
  }

  return (
    <main className="bg-[#1e1e1e] md:max-w-2xl mx-auto rounded-lg md:mt-8">
      <div className="p-8 bg-[#161616] border-b border-[#2c2b2b]">
        <p className="text-sm text-gray-300 mb-4">Welcome to Notebook, the ultimate platform where your voice takes the center stage.</p>
        <h1 className="font-medium text-gray-200 text-xl">Speak out, share in</h1>
      </div>
      <div className="bg-[#161616] border-b border-[#2c2b2b] px-8 py-3 flex">
        <div className="grow"></div>
        <div>
          <Button primary onClick={openSuggestionModel}>Share</Button>
        </div>
      </div>
      <div className="bg-[#161616] px-8 py-1">
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
      </div>
      {showSuggestionModel && (
        <SuggestionForm setShow={setShowSuggestionModel} />
      )}
    </main>
  );
}
