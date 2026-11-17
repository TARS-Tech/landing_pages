import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "../Navbar";
import whatsAppCRMImage from "../../../assets/whatsAppCRMImage.png";

const features = [
  "Shared WhatsApp inbox for sales teams",
  "Full conversation timeline linked to CRM records",
  "WhatsApp contacts synced to leads and clients",
  "Open WhatsApp chat from any lead or deal record",
  "Message history stored with contact records",
  "Team collaboration on customer conversations",
];

export default function WhatsAppFeature() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <span className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
              WhatsApp CRM
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Built for businesses that <span className="text-emerald-600">run on WhatsApp</span>
            </h1>
            <p className="text-slate-600 text-lg mt-4">
              View your entire customer conversation history in one timeline. Link WhatsApp chats to leads, deals, and contacts.
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
            <img src={whatsAppCRMImage} alt="WhatsApp CRM" className="w-full rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
