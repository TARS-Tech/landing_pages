import {
    IndianRupee,
    FileText,
    Wallet,
    Workflow,
    ShieldCheck,
    BarChart3,
} from "lucide-react";
import Invoice from "../../assets/taxinvoice.png";
import WorkflowImg from "../../assets/workflow.png";

const indianBusinessFeatures = [
    { id: 1, title: "GST-ready invoicing", description: "Auto-generate compliant tax invoices with CGST/SGST/IGST.", icon: IndianRupee },
    { id: 2, title: "HSN/SAC support", description: "Built-in HSN & SAC codes for products and services.", icon: FileText },
    { id: 3, title: "UPI payment links", description: "Send Razorpay payment links and track payments instantly.", icon: Wallet },
    { id: 4, title: "Workflow automation", description: "Automate follow-ups, tasks, and notifications with custom triggers.", icon: Workflow },
    { id: 5, title: "Role-based access", description: "Granular permissions for team members with audit logs.", icon: ShieldCheck },
    { id: 6, title: "Reports & forecasting", description: "Pipeline forecasts, revenue reports, and data export.", icon: BarChart3 },
];

export default function BuiltForIndia() {
    return (
        <div className="bg-[#f8fafe] py-20">
            <div className="flex justify-center mb-3">
                <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
                    Built in India, for India
                </span>
            </div>
            <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-[40px] font-bold text-slate-900">
                    Designed for <span className="text-blue-500">Indian businesses</span>
                </h2>
                <p className="mt-3 text-[16px] text-slate-600">
                    GST invoicing, HSN codes, UPI payments, and workflow automation — everything you need in one platform.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {indianBusinessFeatures.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.id} className="flex gap-2 bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                            <div className="mb-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 text-white">
                                    <Icon size={22} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-md font-bold text-slate-900">{item.title}</h3>
                                <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1 items-start pt-10">
                <img src={Invoice} alt="Invoice" className="w-full h-auto object-contain" />
                <img src={WorkflowImg} alt="Workflow" className="w-full h-auto object-contain" />
            </div>
        </div>
    );
}
