import React, { useState } from 'react';
import { PageTransition } from '@/utils/motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Bot, Send, Sparkles, History, User } from 'lucide-react';
import { aiModules } from '@/data/mock';

export function AIAssistant() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hello! I am SprintFlow AI. I can help you generate strategies, draft roadmaps, or analyze your metrics. What would you like to work on today?' }
  ]);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', content: 'I understand you want to work on that. Based on your current workspace data, I recommend we first look at the Q3 objectives to ensure alignment.' }]);
    }, 1000);
  };

  return (
    <PageTransition>
      <div className="flex h-[calc(100vh-8rem)] flex-col gap-6 lg:flex-row">
        {/* Sidebar */}
        <div className="w-full shrink-0 flex-col gap-4 lg:flex lg:w-72">
          <Card className="flex-1">
            <CardContent className="flex h-full flex-col p-4">
              <Button className="w-full gap-2 mb-6"><Sparkles size={16}/> New Chat</Button>
              
              <div className="mb-2 text-xs font-semibold uppercase text-text3">Modules</div>
              <div className="flex flex-col gap-2 mb-6">
                {aiModules.slice(0, 3).map(mod => (
                  <button key={mod.id} className="flex items-center gap-3 rounded-md px-2 py-2 text-left text-sm text-text2 hover:bg-bg2 transition-colors">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-accent-light text-accent">
                      <Bot size={14} />
                    </div>
                    <span className="truncate">{mod.name}</span>
                  </button>
                ))}
              </div>
              
              <div className="mb-2 text-xs font-semibold uppercase text-text3">Recent Chats</div>
              <div className="flex flex-col gap-1 overflow-y-auto">
                {['Q3 Roadmap Planning', 'Competitor Analysis: Acme', 'Marketing Copy Draft'].map((chat, i) => (
                  <button key={i} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px] text-text2 hover:bg-bg2 hover:text-text transition-colors">
                    <History size={14} className="shrink-0" />
                    <span className="truncate">{chat}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Area */}
        <Card className="flex flex-1 flex-col overflow-hidden">
          <div className="flex flex-1 flex-col overflow-y-auto p-4 md:p-6 space-y-6">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${msg.role === 'ai' ? 'bg-accent text-white' : 'bg-bg2 text-text2 border border-border'}`}>
                  {msg.role === 'ai' ? <Bot size={18} /> : <User size={18} />}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-5 py-3.5 text-[15px] leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-bg2 text-text rounded-tr-sm border border-border' : 'bg-accent-light/30 border border-accent/10 text-text rounded-tl-sm'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-border p-4 bg-bg">
            <form onSubmit={handleSend} className="relative flex items-end overflow-hidden rounded-xl border border-border bg-bg2 focus-within:border-accent focus-within:ring-1 focus-within:ring-accent transition-all">
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask SprintFlow AI anything..."
                className="max-h-32 min-h-[56px] w-full resize-none bg-transparent px-4 py-4 text-[15px] outline-none placeholder:text-text3"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <div className="p-2">
                <Button type="submit" size="sm" className="h-10 w-10 rounded-lg p-0" disabled={!input.trim()}>
                  <Send size={18} />
                </Button>
              </div>
            </form>
            <div className="mt-2 text-center text-[11px] text-text3">
              SprintFlow AI can make mistakes. Verify important information.
            </div>
          </div>
        </Card>
      </div>
    </PageTransition>
  );
}
