import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  TrendingUp,
  MessageSquare,
  Receipt,
  Sparkles,
  Building,
  ShieldCheck,
  Rocket,
  CreditCard,
  FileText,
  Cpu,
  BookOpen,
  Users,
  LifeBuoy,
  Mail
} from "lucide-react";

const dropdownMenus = {
  features: {
    items: [
      { title: "Sales Pipeline", desc: "Track and manage deals visually.", icon: TrendingUp, color: "text-blue-600 bg-blue-50", path: "/features/pipeline" },
      { title: "WhatsApp CRM", desc: "Shared inbox and chat history.", icon: MessageSquare, color: "text-emerald-600 bg-emerald-50", path: "/features/whatsapp" },
      { title: "GST Invoicing", desc: "Auto-generate tax-compliant bills.", icon: Receipt, color: "text-indigo-600 bg-indigo-50", path: "/features/invoicing" },
      { title: "AI Assistant", desc: "Draft emails and analyze pipeline.", icon: Sparkles, color: "text-purple-600 bg-purple-50", path: "/features/ai" }
    ]
  },
  solutions: {
    items: [
      { title: "For SMBs", desc: "Affordable tools for growing firms.", icon: Building, color: "text-amber-600 bg-amber-50", path: "/solutions/smb" },
      { title: "For Enterprises", desc: "Advanced features and custom roles.", icon: ShieldCheck, color: "text-cyan-600 bg-cyan-50", path: "/solutions/enterprise" },
      { title: "For Startups", desc: "Free plan to close your first deals.", icon: Rocket, color: "text-rose-600 bg-rose-50", path: "/solutions/startups" }
    ]
  },
  integrations: {
    items: [
      { title: "Gmail", desc: "Email sync, campaigns & sequences.", icon: Mail, color: "text-sky-600 bg-sky-50", path: "/#integrations" },
      { title: "WhatsApp Business", desc: "Chat history & team inbox.", icon: MessageSquare, color: "text-emerald-600 bg-emerald-50", path: "/#integrations" },
      { title: "Razorpay", desc: "Payment links & subscriptions.", icon: CreditCard, color: "text-violet-600 bg-violet-50", path: "/#integrations" }
    ]
  },
  resources: {
    items: [
      { title: "Help Center", desc: "Get support from our team.", icon: LifeBuoy, color: "text-amber-600 bg-amber-50", path: "#" },
      { title: "Features", desc: "Explore all CRM features.", icon: Sparkles, color: "text-blue-600 bg-blue-50", path: "/features/pipeline" },
      { title: "Pricing", desc: "See plans and pricing.", icon: CreditCard, color: "text-emerald-600 bg-emerald-50", path: "/#pricing" }
    ]
  }
};

function DropdownCard({ items, navigate }) {
  return (
    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[340px] bg-white border border-slate-200/50 rounded-2xl shadow-xl p-3 z-50 flex flex-col gap-1">
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <a
            key={idx}
            onClick={(e) => { e.preventDefault(); navigate(item.path); }}
            className="group flex gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.color} flex-shrink-0 transition-colors`}>
              <Icon size={16} strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-slate-800 text-[13.5px] group-hover:text-blue-600 transition-colors leading-none">
                {item.title}
              </h4>
              <p className="text-slate-400 text-[11.5px] mt-1.5 leading-normal font-medium">
                {item.desc}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 w-full bg-white/85 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full h-16 flex items-center justify-between relative">
        
        {/* Brand Logo */}
        <div className="flex items-center justify-center gap-2">
          <div className="bg-blue-600 rounded-xl p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
          </div>
          <a onClick={() => navigate("/")} className="flex items-center gap-1 cursor-pointer">
            <h3 className="text-black text-xl font-bold">TARS<span className="text-blue-500">CRM</span></h3>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center h-full">
          <ul className="flex items-center gap-7 text-[15px] text-gray-500 h-full">
            <li
              className="flex items-center gap-1 cursor-pointer hover:text-black h-full relative"
              onMouseEnter={() => setActiveDropdown("features")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Features
              <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === "features" ? "rotate-180" : ""}`} />
              {activeDropdown === "features" && (
                <DropdownCard items={dropdownMenus.features.items} navigate={navigate} />
              )}
            </li>

            <li
              className="flex items-center gap-1 cursor-pointer hover:text-black h-full relative"
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Solutions
              <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
              {activeDropdown === "solutions" && (
                <DropdownCard items={dropdownMenus.solutions.items} navigate={navigate} />
              )}
            </li>

            <li className="flex items-center gap-1 cursor-pointer hover:text-black h-full">
              <a href="#pricing" className="hover:text-black">Pricing</a>
            </li>

            <li
              className="flex items-center gap-1 cursor-pointer hover:text-black h-full relative"
              onMouseEnter={() => setActiveDropdown("integrations")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Integrations
              <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === "integrations" ? "rotate-180" : ""}`} />
              {activeDropdown === "integrations" && (
                <DropdownCard items={dropdownMenus.integrations.items} navigate={navigate} />
              )}
            </li>

            <li
              className="flex items-center gap-1 cursor-pointer hover:text-black h-full relative"
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Resources
              <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180" : ""}`} />
              {activeDropdown === "resources" && (
                <DropdownCard items={dropdownMenus.resources.items} navigate={navigate} />
              )}
            </li>
          </ul>
        </div>

        

        {/* Mobile Menu Action and Burger Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => navigate("/signup")}
            className="cursor-pointer bg-gradient-to-r from-blue-900 to-blue-600 text-white font-semibold px-4 py-2 rounded-xl shadow-sm text-sm hover:from-blue-850 hover:to-blue-700 transition-all"
          >
            Get Started
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-black focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-4 right-4 bg-white border border-gray-100 rounded-2xl shadow-xl p-6 flex flex-col gap-6 z-50 lg:hidden">
          <ul className="flex flex-col gap-4 text-gray-600 font-medium">
            <li onClick={() => { setIsOpen(false); navigate("/features/pipeline"); }} className="flex justify-between items-center cursor-pointer hover:text-black py-1 border-b border-gray-50">
              Sales Pipeline
            </li>
            <li onClick={() => { setIsOpen(false); navigate("/features/whatsapp"); }} className="flex justify-between items-center cursor-pointer hover:text-black py-1 border-b border-gray-50">
              WhatsApp CRM
            </li>
            <li onClick={() => { setIsOpen(false); navigate("/features/invoicing"); }} className="flex justify-between items-center cursor-pointer hover:text-black py-1 border-b border-gray-50">
              GST Invoicing
            </li>
            <li onClick={() => { setIsOpen(false); navigate("/features/ai"); }} className="flex justify-between items-center cursor-pointer hover:text-black py-1 border-b border-gray-50">
              AI Assistant
            </li>
            <li onClick={() => { setIsOpen(false); navigate("/#pricing"); }} className="flex justify-between items-center cursor-pointer hover:text-black py-1 border-b border-gray-50">
              Pricing
            </li>
          </ul>
        
        </div>
      )}
    </nav>
  );
}
