import React from "react";

const productLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Sales pipeline", href: "/features/pipeline" },
  { label: "GST invoicing", href: "/features/invoicing" },
  { label: "WhatsApp CRM", href: "/features/whatsapp" },
  { label: "AI assistant", href: "/features/ai" },
  { label: "Integrations", href: "/#integrations" },
];

const solutionsLinks = [
  { label: "For SMBs", href: "/solutions/smb" },
  { label: "For enterprises", href: "/solutions/enterprise" },
  { label: "For startups", href: "/solutions/startups" },
];

const resourcesLinks = [
  { label: "Help center", href: "#" },
  { label: "Contact", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8fafe] border-t border-slate-200/50 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-2 lg:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12">
          <div className="col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 rounded-xl p-1.5 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-black text-xl font-bold">TARS<span className="text-blue-500">CRM</span></h3>
            </div>
            <p className="text-slate-500 text-sm mt-4 leading-relaxed max-w-xs">
              AI-powered CRM with sales pipeline, GST invoicing, WhatsApp integration, and workflow automation — built for Indian businesses.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-slate-800 text-sm tracking-wider uppercase mb-1">Product</h4>
            {productLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">{link.label}</a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-slate-800 text-sm tracking-wider uppercase mb-1">Solutions</h4>
            {solutionsLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">{link.label}</a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-slate-800 text-sm tracking-wider uppercase mb-1">Resources</h4>
            {resourcesLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">{link.label}</a>
            ))}
            <h4 className="font-bold text-slate-800 text-sm tracking-wider uppercase mb-1 mt-2">Company</h4>
            {companyLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-slate-500 hover:text-slate-900 transition-colors text-sm font-medium">{link.label}</a>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-200/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-xs font-semibold">
            &copy; {new Date().getFullYear()} TARS CRM — Made in India
          </p>
        </div>
      </div>
    </footer>
  );
}
