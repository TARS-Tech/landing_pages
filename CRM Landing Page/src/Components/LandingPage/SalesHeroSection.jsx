import {
    Mail,
    Target,
    BrainCircuit,
    Wand2,
    TrendingUp,
    Bot
} from 'lucide-react';

const salesFeatures = [
    { id: 1, icon: Mail, title: "AI email drafting", description: "Draft personalized outreach emails with AI assistance." },
    { id: 2, icon: Target, title: "Lead scoring", description: "Hot, warm, and cold scoring based on engagement." },
    { id: 3, icon: BrainCircuit, title: "AI risk detection", description: "Identify at-risk deals and bottlenecks in your pipeline." },
    { id: 4, icon: Wand2, title: "Next best action", description: "AI suggestions for the next step on every deal." },
    { id: 5, icon: TrendingUp, title: "Pipeline forecasting", description: "Revenue forecasts based on deal probabilities." },
    { id: 6, icon: Bot, title: "AI chat copilot", description: "Ask questions about your data and get instant insights." },
];

export default function SalesHeroSection() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-[#eef2ff] via-[#e9edff] via-[#e0eaff] to-[#dbeafe] py-20">
            <div className="flex justify-center mb-3">
                <span className="flex justify-center items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
                    <span><Bot size={22} /></span>AI Assistant
                </span>
            </div>
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-[40px] font-bold text-slate-900">
                    AI that helps your sales team <span className="text-blue-500">close <br />faster</span>
                </h2>
                <p className="mt-3 text-[16px] text-slate-600">
                    An AI co-pilot trained on your pipeline. From drafting emails to forecasting revenue —
                    the AI assistant turns CRM data into action.
                </p>
            </div>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                {salesFeatures.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.id} className="gap-4 bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                            <div className="mb-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 text-white">
                                    <Icon size={22} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-md font-bold text-slate-900 mb-1">{item.title}</h3>
                                <p className="text-sm text-slate-600">{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
