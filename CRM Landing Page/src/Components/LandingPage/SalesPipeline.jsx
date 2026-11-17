import salesImage from "../../assets/salesImage.png";

export default function SalesPipelines() {
    return (
        <div className="bg-[#f8fafe]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
                <div className="flex justify-center mb-3">
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
                        Visual sales pipeline
                    </span>
                </div>
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-[40px] font-bold text-slate-900">
                        Track every deal with a <span className="text-blue-500">powerful</span><br />
                        <span className="text-blue-500">visual pipeline</span>
                    </h2>
                    <p className="mt-3 text-[16px] text-slate-600">
                        Drag-and-drop deals across stages, spot stuck opportunities instantly, and forecast revenue with
                        probability-based scoring.
                    </p>
                </div>
                <div className="mx-auto w-[90%] h-full px-5">
                    <img src={salesImage} alt="sales pipeline" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
}
