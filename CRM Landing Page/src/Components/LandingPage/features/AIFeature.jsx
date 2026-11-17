import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Bot } from "lucide-react";
import { Navbar } from "../Navbar";

const features = [
  "AI chat copilot for pipeline questions",
  "AI email drafting with personalized tone",
  "Lead scoring (Hot / Warm / Cold)",
  "AI risk detection on deals",
  "Next-best-action suggestions",
  "Pipeline forecasting",
  "Auto-summarize deal activities",
  "AI-powered workflow triggers",
];

export default function AIFeature() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <span className="rounded-full border border-purple-100 bg-purple-50 px-4 py-1 text-sm font-medium text-purple-700 inline-flex items-center gap-2">
              <Bot size={16} /> AI Assistant
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              AI that helps your team <span className="text-purple-500">close faster</span>
            </h1>
            <p className="text-slate-600 text-lg mt-4">
              An AI co-pilot trained on your pipeline. From drafting emails to forecasting revenue — the AI assistant turns CRM data into action.
            </p>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate("/signup")}
              className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:from-blue-950 hover:to-blue-700 transition-all"
            >
              Get Started Free <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-12 flex items-center justify-center">
            <div className="text-center">
              <Bot size={80} className="text-purple-400 mx-auto" />
              <p className="text-slate-500 mt-4 text-lg">AI Copilot "Apex"</p>
              <p className="text-slate-400 text-sm mt-1">Ask anything about your pipeline</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
