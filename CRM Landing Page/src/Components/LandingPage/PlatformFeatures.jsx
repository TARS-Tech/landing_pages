import {
    Users,
    Phone,
    Bot,
    Receipt,
    FolderKanban,
    BarChart3,
} from "lucide-react";

const platformFeatures = [
    {
        id: 1,
        title: "CRM & Sales",
        icon: Users,
        features: [
            "Lead management",
            "Contacts & clients",
            "Visual sales pipeline",
            "Deal tracking",
            "Lead scoring",
            "Assignment automation",
        ],
        tags: [],
    },
    {
        id: 2,
        title: "Communication",
        icon: Phone,
        features: [
            "WhatsApp CRM",
            "Email campaigns",
            "Email sequences",
            "Meeting scheduling",
            "Tasks & reminders",
        ],
        tags: ["WhatsApp", "Email", "Meetings"],
    },
    {
        id: 3,
        title: "Automation",
        icon: Bot,
        features: [
            "Workflow automation",
            "AI assistant",
            "Trigger-based actions",
            "Auto task creation",
        ],
        tags: ["Workflows", "Triggers"],
    },
    {
        id: 4,
        title: "Finance",
        icon: Receipt,
        features: [
            "GST invoicing",
            "Quotations",
            "Payment tracking",
            "Products catalog",
        ],
        tags: ["Quotes", "Payments", "Catalog"],
    },
    {
        id: 5,
        title: "Operations",
        icon: FolderKanban,
        features: [
            "Projects management",
            "Support tickets",
            "Complaints handling",
            "Documents module",
        ],
        tags: ["Support", "Projects"],
    },
    {
        id: 6,
        title: "Analytics",
        icon: BarChart3,
        features: [
            "Reports builder",
            "Forecasting",
            "KPI dashboards",
            "Team activity analytics",
        ],
        tags: ["Reports", "Forecasts"],
    },
];

export default function PlatformFeatures() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex justify-center mb-3">
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
                        One platform &bull; Everything you need
                    </span>
                </div>

                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-[40px] font-bold text-slate-900">
                        Your entire business,{" "}
                        <span className="text-blue-500">connected</span>
                    </h2>
                    <p className="mt-3 text-[16px] text-slate-600">
                        CRM, sales, quotations, GST invoicing, projects and support — all in one
                        platform built for Indian businesses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {platformFeatures.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.id}
                                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="mb-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-800 to-blue-500 text-white">
                                        <Icon size={22} />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 mb-1">{item.title}</h3>
                                <ul>
                                    {item.features.map((feature) => (
                                        <li key={feature} className="text-[15px] text-slate-600 flex items-start gap-2">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                {item.tags.length > 0 && (
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
