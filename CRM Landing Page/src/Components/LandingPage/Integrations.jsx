import React from "react";

const GmailIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M20 18h2V6c0-1.1-.9-2-2-2h-3v14z" />
    <path fill="#34A853" d="M2 18h2V6c0-1.1.9-2 2-2h3V4H4c-1.1 0-2 .9-2 2v12z" />
    <path fill="#EA4335" d="M2 6v12c0 1.1.9 2 2 2h4V8l-4-4z" />
    <path fill="#FBBC05" d="M20 6v12c0 1.1-.9 2-2 2h-4V8l4-4z" />
    <path fill="#EA4335" d="M12 14L4 8v10h16V8z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#25D366" />
    <path d="M12 5C8.13 5 5 8.13 5 12c0 1.3.35 2.53.97 3.6L5 20l4.57-.96C10.57 19.65 11.78 20 13 20c3.87 0 7-3.13 7-7 0-3.87-3.13-7-7-7zm3.89 10.74c-.16.46-.81.84-1.12.89-.3.05-.66.09-1.9-.39-1.57-.61-2.58-2.22-2.66-2.33-.08-.11-.64-.85-.64-1.62 0-.77.41-1.15.55-1.3.15-.15.32-.19.43-.19h.31c.1 0 .23-.04.36.27.13.31.45 1.09.49 1.17.04.08.06.18.01.28-.05.1-.07.16-.14.24-.07.08-.15.18-.21.24-.07.07-.15.15-.06.3.09.15.39.64.83 1.03.57.51 1.05.67 1.2.74.15.07.24.06.33-.04.09-.1.39-.45.49-.6.1-.15.2-.12.33-.07.13.05.82.39.96.46.14.07.23.11.27.17.04.06.04.35-.12.81z" fill="#FFF" />
  </svg>
);

const RazorpayIcon = () => (
  <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12L12 21V15.5L17 12L12 8.5V3L22 12Z" fill="#0A2540" />
    <path d="M12 8.5L7 12L12 15.5V21L2 12L12 3V8.5Z" fill="#0052FF" />
  </svg>
);

const DailyCoIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#4A90D9" />
    <circle cx="8" cy="12" r="2" fill="#FFF" />
    <circle cx="16" cy="12" r="2" fill="#FFF" />
    <circle cx="12" cy="12" r="2" fill="#FFF" />
  </svg>
);

const RechartsIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#3B82F6" />
    <rect x="5" y="14" width="3" height="5" rx="0.5" fill="#FFF" />
    <rect x="10" y="10" width="3" height="9" rx="0.5" fill="#FFF" />
    <rect x="15" y="6" width="3" height="13" rx="0.5" fill="#FFF" />
  </svg>
);

const integrations = [
  { name: "Gmail", desc: "Email sync & campaigns", icon: GmailIcon },
  { name: "WhatsApp", desc: "Business API integration", icon: WhatsAppIcon },
  { name: "Razorpay", desc: "Payment links & subscriptions", icon: RazorpayIcon },
  { name: "Daily.co", desc: "Video meeting scheduling", icon: DailyCoIcon },
  { name: "Recharts", desc: "Analytics & reporting", icon: RechartsIcon },
];

export default function Integrations() {
  return (
    <section className="w-full bg-white py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-center mb-3">
          <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
            Integrations
          </span>
        </div>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-[40px] font-bold text-slate-900 leading-tight">
            Plays well with <span className="text-blue-500">your stack</span>
          </h2>
          <p className="mt-3 text-[16px] text-slate-600">
            Connect TARS CRM with the tools your team already uses.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
          {integrations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="group flex flex-col items-center gap-2 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 hover:-translate-y-0.5 min-h-[100px] cursor-pointer text-center"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-50/50 group-hover:bg-slate-50 flex-shrink-0 transition-colors">
                  <Icon />
                </div>
                <div>
                  <span className="font-semibold text-slate-700 text-[14px] sm:text-[15px] group-hover:text-slate-900 transition-colors leading-tight">
                    {item.name}
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
