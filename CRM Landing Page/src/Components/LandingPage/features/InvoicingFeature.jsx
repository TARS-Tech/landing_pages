import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "../Navbar";
import Invoice from "../../../assets/taxinvoice.png";

const features = [
  "GST-compliant tax invoices with CGST/SGST/IGST",
  "HSN/SAC codes for products and services",
  "Tax classes: 0%, 5%, 12%, 18%, 28%",
  "PDF invoice generation",
  "Auto-numbering (TTINV-XXXXX)",
  "Payment tracking with Razorpay integration",
  "Quotation builder with line items and discounts",
  "10 quotation templates",
  "Products catalog with price tiers",
];

export default function InvoicingFeature() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <span className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-700">
              GST Invoicing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              GST-ready invoicing <span className="text-indigo-500">built-in</span>
            </h1>
            <p className="text-slate-600 text-lg mt-4">
              Auto-generate compliant tax invoices with CGST/SGST/IGST, HSN/SAC codes, and track payments — all from your CRM.
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
          <div className="w-full lg:w-1/2">
            <img src={Invoice} alt="GST Invoicing" className="w-full rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
