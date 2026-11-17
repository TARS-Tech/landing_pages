import React from "react";

const QuoteIcon = () => (
  <svg className="w-8 h-8 text-blue-500/15 mb-3 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z" />
  </svg>
);

const testimonials = [
  { name: "Manu Arora", role: "Tech Innovator & Entrepreneur", initials: "MA", gradient: "from-blue-400 to-indigo-500", quote: "What a fantastic CRM TARS CRM is, I just love it. It has completely transformed the way I approach sales pipelines and develop solutions." },
  { name: "Bob Smith", role: "Industry Analyst", initials: "BS", gradient: "from-amber-400 to-orange-500", quote: "Absolutely revolutionary, a game-changer for our industry." },
  { name: "Cathy Lee", role: "Product Manager", initials: "CL", gradient: "from-pink-400 to-rose-500", quote: "I can't imagine going back to how things were before TARS CRM." },
  { name: "Tyler Durden", role: "Creative Director & Business Owner", initials: "TD", gradient: "from-red-400 to-rose-500", quote: "I manage all my business operations with TARS CRM, it is so easy to use. It has simplified our entire client workflow." },
  { name: "Eva Green", role: "Operations Director", initials: "EG", gradient: "from-emerald-400 to-teal-500", quote: "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly." },
  { name: "Henry Ford", role: "Operations Analyst", initials: "HF", gradient: "from-purple-400 to-violet-500", quote: "It has saved us countless hours. Highly recommended for anyone looking to enhance their efficiency and productivity." },
  { name: "Cody Fisher", role: "Product Analyst", initials: "CF", gradient: "from-cyan-400 to-blue-500", quote: "A robust solution that fits perfectly into our workflow. It has enhanced our team's capabilities and allowed us to tackle more complex sales cycles." },
  { name: "Albert Einstein", role: "Research Lead", initials: "AE", gradient: "from-teal-400 to-emerald-500", quote: "A must-have tool for any professional. It's revolutionized the way we approach customer management and decision-making." },
];

function TestimonialCard({ card }) {
  return (
    <div className="group bg-white border border-slate-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-slate-300/80 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between">
      <div>
        <QuoteIcon />
        <p className="text-slate-600 text-[14.5px] leading-relaxed font-medium">{card.quote}</p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <div className={`flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${card.gradient} text-white font-bold text-[12px] shadow-sm flex-shrink-0`}>
          {card.initials}
        </div>
        <div>
          <h4 className="font-bold text-slate-800 text-[13.5px] group-hover:text-slate-900 transition-colors leading-none">{card.name}</h4>
          <p className="text-slate-400 text-[11.5px] mt-1 leading-none">{card.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-[#f8fafe] py-24 border-t border-slate-200/50 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/12 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex justify-center mb-3">
          <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700 shadow-sm">Testimonials</span>
        </div>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-[40px] font-bold text-slate-900 leading-tight">
            Loved by scaling <span className="text-blue-500">teams</span>
          </h2>
          <p className="mt-3 text-[16px] text-slate-600 max-w-2xl mx-auto">
            See how businesses are transforming their sales and operations with TARS CRM.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto items-start">
          <div className="flex flex-col gap-6">
            <TestimonialCard card={testimonials[0]} />
            <TestimonialCard card={testimonials[3]} />
          </div>
          <div className="flex flex-col gap-6">
            <TestimonialCard card={testimonials[1]} />
            <TestimonialCard card={testimonials[2]} />
          </div>
          <div className="flex flex-col gap-6">
            <TestimonialCard card={testimonials[4]} />
            <TestimonialCard card={testimonials[6]} />
          </div>
          <div className="flex flex-col gap-6">
            <TestimonialCard card={testimonials[5]} />
            <TestimonialCard card={testimonials[7]} />
          </div>
        </div>
      </div>
    </section>
  );
}
