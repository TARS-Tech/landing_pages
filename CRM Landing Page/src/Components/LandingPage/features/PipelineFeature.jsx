import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "../Navbar";
import salesImage from "../../../assets/salesImage.png";

const features = [
  "5-stage visual pipeline (Lead → Contacted → Proposal → Qualified → Won)",
  "Drag-and-drop deal management",
  "AI risk scoring on every deal",
  "Probability-based forecasting",
  "Auto-assignment with round-robin",
  "Deal history and activity timeline",
  "Bulk deal updates",
  "Re cycling bin for deleted deals",
];

export default function PipelineFeature() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
              Sales Pipeline
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Track every deal with a <span className="text-blue-500">visual pipeline</span>
            </h1>
            <p className="text-slate-600 text-lg mt-4">
              Drag-and-drop deals across stages, spot stuck opportunities instantly, and forecast revenue with probability-based scoring.
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
            <img src={salesImage} alt="Sales Pipeline" className="w-full rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
