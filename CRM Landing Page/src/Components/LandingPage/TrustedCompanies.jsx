import React from "react";

const features = [
    "Lead management",
    "Deal pipeline",
    "GST invoicing",
    "WhatsApp CRM",
    "AI assistant",
    "Workflow automation",
];

export default function TrustedCompanies() {
    return (
        <div className="mt-16 w-full">
            <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-widest mb-8">
                Everything you need to run your business
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-blue-200 hover:scale-105 transition-all duration-300 cursor-default group">
                        <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0" />
                        <span className="text-slate-600 text-sm font-semibold tracking-tight whitespace-nowrap group-hover:text-slate-800 transition-colors duration-300">
                            {feature}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
