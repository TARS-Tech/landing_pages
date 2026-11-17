import React from "react";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-6xl mx-auto rounded-[32px] overflow-hidden bg-gradient-to-r from-blue-800 via-blue-600 to-sky-500 py-16 px-6 md:py-20 md:px-12 text-center shadow-2xl shadow-blue-500/10 relative">
        <div className="absolute left-[-10%] bottom-[-20%] w-[45%] h-[90%] bg-indigo-600/35 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-[-10%] top-[-20%] w-[45%] h-[90%] bg-cyan-400/25 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight">
            Ready to scale your business with <br /> TARS CRM?
          </h2>
          <p className="mt-4 text-[15px] md:text-[16px] text-blue-100/90 leading-relaxed font-medium max-w-2xl">
            Manage leads, sales, GST invoices and customer communication — all in one AI-powered platform.
          </p>
          
            <button 
            onClick={() => window.open("https://tarsbookademoapp.vercel.app/demo/tars-crm", "_blank")}
            className="cursor-pointer border border-white/25 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition duration-200 flex items-center justify-center gap-2.5 w-full sm:w-auto text-[15px]">
              <svg className="w-5 h-5 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.75 12L9.5 8.25v7.5L14.75 12z" fill="currentColor" />
              </svg>
              Book Live Demo
            </button>
          </div>
          <p className="text-[12.5px] text-blue-100/70 mt-6 tracking-wide font-medium">
            Free starter plan &middot; No credit card required &middot; Cancel anytime
          </p>
        </div>

    </section>
  );
}
