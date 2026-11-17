import {
    Users,
    MessageSquare,
    History,
    Link,
} from "lucide-react";
import whatsAppCRMImage from "../../assets/whatsAppCRMImage.png";

const features = [
    { id: 1, title: "Team inbox", description: "Shared WhatsApp inbox for your sales team", icon: Users },
    { id: 2, title: "Chat history", description: "Full conversation timeline linked to CRM records", icon: History },
    { id: 3, title: "Contact sync", description: "WhatsApp contacts linked to leads and clients", icon: MessageSquare },
    { id: 4, title: "CRM integration", description: "Open WhatsApp chat from any lead or deal record", icon: Link },
];

export default function WhatsAppCRM() {
    return (
        <div className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="w-full lg:max-w-[55%] xl:max-w-[580px]">
                        <div className="w-fit flex justify-center items-center gap-1 text-xs font-medium text-[#22c373] px-3 py-[0.2rem] rounded-full bg-[#22c55e1a]">
                            <span><MessageSquare className="w-4 h-4 text-[#00E676]" /></span><p>WhatsApp-first CRM</p>
                        </div>
                        <div className="w-full pt-2">
                            <p className="text-4xl md:text-5xl font-semibold text-black">
                                Built for businesses that <br />
                                <span className="text-blue-600">run on WhatsApp</span>
                            </p>
                        </div>
                        <p className="text-gray-500 text-[16px] pt-3">
                            View your entire customer conversation history in one timeline. <br />
                            Link WhatsApp chats to leads, deals, and contacts — all in one place.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
                            {features.map((feature) => (
                                <div key={feature.id} className="items-start border border-slate-300 rounded-xl px-4 py-1">
                                    <div className="flex items-center justify-center w-10 h-10 text-blue-900">
                                        <feature.icon className="w-5 h-5 -mt-2" />
                                    </div>
                                    <div>
                                        <h3 className="text-md font-semibold text-black -mt-2">{feature.title}</h3>
                                        <p className="text-xs text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:max-w-[45%] xl:max-w-[650px]">
                        <img src={whatsAppCRMImage} alt="whatsapp crm" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
