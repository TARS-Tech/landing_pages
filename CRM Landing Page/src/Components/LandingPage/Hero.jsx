import React from "react";
import { useNavigate } from "react-router-dom";
import HeroMain from "../../assets/hero-main.png";
import Hero1 from "../../assets/hero-1.png";
import Hero2 from "../../assets/hero-2.png";
import { ArrowRight, PlayCircle, CheckCircle2 } from "lucide-react";

const features = [
  "GST-ready invoicing",
  "WhatsApp integrated",
  "AI assistant",
  "Free starter plan",
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-white">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.6]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e8ebff 1px, transparent 1px),
              linear-gradient(to bottom, #e5e8ebff 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:max-w-[55%] xl:max-w-[580px]">
            <div className="w-fit flex justify-center items-center text-sm text-black px-3 pt-1 rounded-full border border-slate-300 bg-gray-50">
              <p>AI-powered CRM for Indian businesses</p>
            </div>
            <div className="w-full pt-2">
              <p className="text-4xl md:text-5xl font-semibold text-black">
                Smartest <br />
                CRM for{" "}
                <span className="text-blue-500">Sales, GST <br /> Invoicing</span> &
                Growth
              </p>
            </div>

            <p className="text-gray-500 text-[16px] pt-5">
              Capture leads, manage pipelines, automate follow-ups, send
              quotations, invoices, and close deals faster — all from one
              AI-powered platform built for Indian businesses.
            </p>

            <div className="flex flex-wrap gap-4 pt-5">
              <button 
              onClick={() => window.open("https://tarsbookademoapp.vercel.app/demo/tars-crm", "_blank")}
              className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 font-semibold px-5 py-2.5 rounded-full shadow-sm hover:bg-slate-50 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <PlayCircle className="w-5 h-5 text-blue-600" />
                <span>Book Live Demo</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-400 text-xs pt-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 stroke-[2.5]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center w-full lg:w-[45%] max-w-[500px] lg:max-w-none">
            <div className="relative">
              <img src={HeroMain} alt="Hero illustration" className="z-10 w-full h-auto object-contain max-h-[650px]" />
              <img src={Hero1} alt="Hero1" className="absolute top-35 -ml-37 w-full h-33 object-contain animate-float-slow" />
              <img src={Hero2} alt="Hero2" className="absolute bottom-13 ml-37 w-full h-33 object-contain animate-float-delayed" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
