
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Welcome to MalluPur-Doors. I am your personal architectural consultant. How can I help you design your gateway today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are the Lead Architectural Consultant for MalluPur-Doors, a luxury brand specializing in Burma Teak and Reinforced Steel doors. 
        Your tone is sophisticated, knowledgeable, and helpful. You recommend doors based on project types (villa, office, renovation). 
        Mention our categories: "Royal Teak", "Modern Steel", and "Smart Biometric". 
        Limit your responses to 3-4 sentences. User says: ${userMessage}`,
        config: {
          temperature: 0.7,
          topP: 0.9,
          maxOutputTokens: 250,
        },
      });

      const aiText = response.text || "I apologize, but I am momentarily unavailable. Please contact our human specialists at the Experience Center.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Consultation Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Thank you for your interest. Please reach out to our team at the San Francisco gallery for a detailed quote." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-primary rounded-full shadow-[0_10px_40px_rgba(247,163,8,0.4)] flex items-center justify-center text-slate-950 hover:scale-110 transition-all duration-300 animate-bounce"
        >
          <span className="material-icons text-3xl">auto_awesome</span>
        </button>
      ) : (
        <div className="bg-slate-900 border border-white/10 w-[350px] md:w-[400px] h-[550px] rounded-2xl flex flex-col shadow-2xl animate-in zoom-in-95 fade-in duration-300">
          {/* Header */}
          <div className="p-5 border-b border-white/5 flex justify-between items-center bg-slate-950 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                 <span className="material-icons text-primary">psychology</span>
              </div>
              <div>
                <h6 className="text-white font-serif font-bold text-sm">Design Concierge</h6>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest">AI Agent Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
              <span className="material-icons">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary text-slate-950 font-medium rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800 border border-white/5 px-4 py-3 rounded-2xl rounded-tl-none text-slate-400 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-5 border-t border-white/5">
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about materials, styles..."
                className="w-full bg-slate-800 border-0 focus:ring-1 focus:ring-primary text-white text-sm rounded-xl pl-4 pr-12 py-3.5"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-primary disabled:opacity-30 disabled:grayscale transition-all"
              >
                <span className="material-icons">send</span>
              </button>
            </div>
            <p className="text-[9px] text-center text-slate-600 mt-3 uppercase tracking-widest font-bold">
              Powered by Gemini AI • Premium Design Studio
            </p>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default AIConsultant;
