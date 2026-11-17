import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckIcon = () => (
  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 flex-shrink-0">
    <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.75 6L5.25 7.5L8.25 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const pricingTiers = [
  {
    name: "STARTER",
    description: "For small teams getting started with CRM.",
    yearlyPrice: 0,
    monthlyPrice: 0,
    priceLabel: "Free",
    features: ["Up to 5 users", "1 GB storage", "Lead & deal management", "WhatsApp inbox", "GST invoicing", "Email support"],
    isPopular: false,
  },
  {
    name: "BUSINESS",
    description: "For growing sales teams that need automation.",
    yearlyPrice: 833,
    monthlyPrice: 2499,
    priceLabel: null,
    features: ["Up to 25 users", "50 GB storage", "AI assistant & lead scoring", "Workflow automation", "Email campaigns & sequences", "Reports & forecasting", "Priority support"],
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    description: "For large organizations with custom needs.",
    yearlyPrice: 3333,
    monthlyPrice: 4999,
    priceLabel: null,
    features: ["Unlimited users", "Unlimited storage", "Advanced AI & forecasting", "Custom roles & permissions", "Dedicated success manager", "SLA & uptime guarantee", "Custom integrations"],
    isPopular: false,
  },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("yearly");
  const navigate = useNavigate();

  return (
    <section id="pricing" className="w-full bg-white py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-center mb-3">
          <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">Pricing</span>
        </div>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-[40px] font-bold text-slate-900 leading-tight">
            Simple, transparent <span className="text-blue-500">pricing</span>
          </h2>
          <p className="mt-3 text-[16px] text-slate-600">Start free, upgrade when you're ready. No hidden fees.</p>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex items-center bg-slate-100 p-1.5 rounded-full border border-slate-200/40 shadow-inner">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`cursor-pointer px-6 py-2 text-[14px] font-semibold rounded-full transition-all duration-300 ${billingCycle === "monthly" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`cursor-pointer px-6 py-2 text-[14px] font-semibold rounded-full transition-all duration-300 ${billingCycle === "yearly" ? "bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
            >
              Yearly - save 20%
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto items-stretch">
          {pricingTiers.map((tier) => {
            const price = billingCycle === "yearly" ? tier.yearlyPrice : tier.monthlyPrice;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 hover:shadow-xl ${tier.isPopular ? "bg-white border-2 border-blue-500 shadow-lg shadow-blue-500/5 hover:-translate-y-1.5 z-10" : "bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 hover:-translate-y-1"}`}
              >
                {tier.isPopular && (
                  <span className="bg-blue-600 text-white text-[11px] font-bold tracking-wide uppercase px-4 py-1.5 rounded-full absolute -top-3.5 left-1/2 -translate-x-1/2 shadow-md flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Most popular
                  </span>
                )}
                <div>
                  <h3 className="text-blue-600 font-extrabold text-sm tracking-wider uppercase">{tier.name}</h3>
                  <p className="text-slate-500 text-[14px] mt-2 leading-relaxed">{tier.description}</p>
                  <div className="mt-5 flex items-baseline">
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight transition-all duration-300">
                      {tier.priceLabel || `\u20B9${price.toLocaleString("en-IN")}`}
                    </span>
                    {!tier.priceLabel && <span className="ml-1 text-slate-500 text-sm font-medium">/user/month</span>}
                  </div>
                  <p className="text-[12px] text-slate-500 mt-1.5 transition-all duration-200">
                    {tier.priceLabel ? "No credit card required" : `Billed ${billingCycle === "yearly" ? "annually" : "monthly"} - 18% GST extra`}
                  </p>
                  <button
                    onClick={() => navigate("/signup")}
                    className={`cursor-pointer mt-6 w-full text-center py-3 px-4 rounded-xl font-semibold transition-all duration-200 ${tier.isPopular ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" : "border border-slate-200 hover:border-slate-300 text-slate-800 hover:bg-slate-50 focus:ring-2 focus:ring-slate-100"}`}
                  >
                    {tier.priceLabel ? "Get started free" : "Start free trial"}
                  </button>
                  <div className="h-px bg-slate-100 mt-8" />
                  <ul className="mt-8 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-[14.5px] text-slate-600 leading-snug font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
