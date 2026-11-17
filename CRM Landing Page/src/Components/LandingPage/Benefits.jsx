import { IndianRupee, MessageSquare, Layers, Sparkles, Zap, TrendingUp } from "lucide-react";
const benefits = [
  {
    title: "Built for India",
    intro: "Most big CRMs (Salesforce, HubSpot, Zoho) are built for global markets. TARS is built for Indian businesses.",
    points: [
      "GST invoicing: auto-generated, tax-compliant bills inside the CRM, so you don't need a separate billing tool.",
      "Razorpay integration: payment links and subscriptions with a gateway Indian businesses already use.",
      "Indian pricing: affordable plans in rupees, instead of dollar pricing.",
    ],
    icon: IndianRupee,
    color: "text-amber-600 bg-amber-50",
  },
  {
    title: "WhatsApp-first CRM",
    intro: "Indian customers deal mostly on WhatsApp, not email.",
    points: [
      "A shared team inbox and full chat history per customer.",
      "Nothing gets lost when a salesperson leaves, because the conversations stay with the company.",
      "No extra charges or complicated setup.",
    ],
    icon: MessageSquare,
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    title: "Everything in one place",
    intro: "Instead of paying for a CRM, an invoicing tool and a WhatsApp tool separately, get it all in one product.",
    points: [
      "Sales pipeline, WhatsApp, Gmail sync, invoicing and payments together.",
      "One login, one bill.",
      "No copying data between apps.",
    ],
    icon: Layers,
    color: "text-blue-600 bg-blue-50",
  },
  {
    title: "Built-in AI assistant",
    intro: "Saves time for small teams without a dedicated sales operations person.",
    points: [
      "Drafts emails for you.",
      "Analyzes your pipeline.",
    ],
    icon: Sparkles,
    color: "text-purple-600 bg-purple-50",
  },
  {
    title: "Simplicity",
    intro: "Other CRMs can feel overwhelming. TARS is clean and focused.",
    points: [
      "A small team can set up in a day.",
      "Easy to learn without training.",
    ],
    icon: Zap,
    color: "text-rose-600 bg-rose-50",
  },
    {
    title: "Easy to start, with room to grow",
    intro: "Start small and add more as your business grows.",
    points: [
      "A free plan for startups lets them try before paying.",
      "Affordable tools for SMBs.",
      "Advanced features and custom roles for enterprises.",
      "The visual pipeline is simple enough for non-technical staff to learn quickly.",
    ],
    icon: TrendingUp,
    color: "text-cyan-600 bg-cyan-50",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
           Why TARS CRM and not another CRM?
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Because it was built around how Indian teams actually sell: on WhatsApp, with GST invoices and rupee pricing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ title, intro, points, icon: Icon, color }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
                <Icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{intro}</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 list-disc pl-5">
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}