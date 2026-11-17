import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, Building } from "lucide-react";
import { Navbar } from "../Navbar";

const features = [
  "Affordable starter plan (free for up to 5 users)",
  "Lead & deal management",
  "GST invoicing out of the box",
  "WhatsApp CRM integration",
  "Workflow automation",
  "Email campaigns",
  "Reports & analytics",
  "Role-based access control",
];

export default function SMBFeature() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="rounded-full border border-amber-100 bg-amber-50 px-4 py-1 text-sm font-medium text-amber-700 inline-flex items-center gap-2">
            <Building size={16} /> For SMBs
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            CRM built for <span className="text-amber-500">growing businesses</span>
          </h1>
          <p className="text-slate-600 text-lg mt-4">
            Everything you need to manage leads, close deals, and send invoices — without the enterprise price tag.
          </p>
          <ul className="mt-8 space-y-3 text-left max-w-xl mx-auto">
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
      </div>
    </div>
  );
}
