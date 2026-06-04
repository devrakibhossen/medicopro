import {
  Brain,
  Thermometer,
  Wind,
  Zap,
  HeartCrack,
  ArrowUpRight,
  TriangleAlert,
  AudioLines,
} from "lucide-react";
import ConsultationAttachment from "../../components/ConsultationAttachment";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "New Consultation",
  description:
    "Your Doctor, Zero Distance Healthcare for Everyone, Everywhere Zero Wait. Zero Cost. Zero Worry.",
};
const page = () => {
  const SYMPTOMS = [
    { label: "Headache", icon: Brain },
    { label: "Fever", icon: Thermometer },
    { label: "Cough", icon: Wind },
    { label: "Fatigue", icon: Zap },
    { label: "Chest pain", icon: HeartCrack },
  ];

  return (
    <div>
      {/* <h3 className="text-sm">New Consultation </h3> */}
      <div className="flex items-start gap-1 max-w-xs mx-auto bg-yellow-500/10 border border-yellow-500/20 text-yellow-500/80 rounded-md p-2 text-xs leading-relaxed">
        <TriangleAlert size={14} className="shrink-0 mt-0.5" />
        <span>Not a substitute for medical advice. Consult a doctor.</span>
      </div>
      <div className="mt-36">
        <h3 className="text-app text-center text-3xl font-semibold mb-8">
          How are you feeling, Rakib?
        </h3>
        <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto mb-8">
          {SYMPTOMS.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="text-muted flex items-center gap-1.5 px-3 py-1.5  text-sm border border-color rounded-lg transition-all"
            >
              <Icon size={13} />
              {label}
            </button>
          ))}
        </div>
        <div className="bg-card border border-color rounded-lg p-3 flex flex-col gap-2 max-w-xl mx-auto">
          <textarea
            rows={4}
            className="w-full bg-transparent border-none outline-none resize-none text-sm text-foreground placeholder:text-muted-foreground leading-relaxed"
            placeholder="Describe your symptoms in detail..."
          />

          <div className="flex items-center justify-between">
            {/* <button
              className="w-[34px] h-[34px] flex items-center justify-center rounded-md bg-surface border border-color text-muted-foreground hover:text-foreground transition"
              aria-label="Add attachment"
            >
              <Plus size={18} />
            </button> */}
            <ConsultationAttachment />
            <div className="flex items-center gap-3">
              <button
                className="w-[34px] h-[34px] flex items-center justify-center rounded-md hover:bg-card-hover  text-muted-foreground hover:text-foreground transition"
                aria-label="Add attachment"
              >
                <AudioLines size={18} />
              </button>
              <button
                className="w-[34px] h-[34px] flex items-center justify-center rounded-md bg-[#cf4f22] hover:bg-[#b8431c] text-white transition"
                aria-label="Send"
              >
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
