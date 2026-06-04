import { Clock, Search, Ellipsis } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Medicopro | Recents chats",
  description:
    "Your Doctor, Zero Distance Healthcare for Everyone, Everywhere Zero Wait. Zero Cost. Zero Worry.",
};
const page = () => {
  const histories = [
    { name: "I have a fever", time: "2m ago" },
    { name: "Healthcare for everyone", time: "1h ago" },
    { name: "Symptom understanding", time: "5h ago" },
    { name: "eyes problem", time: "Yesterday" },
  ];

  return (
    <div className="lg:max-w-3xl mx-auto lg:mt-10">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold">Recents</h3>
        <div className="flex items-center gap-5">
          <button className="text-sm flex gap-1.5 items-center border-app p-1 rounded-lg  transition">
            Delete all
          </button>
          <button className="text-sm flex gap-1.5 items-center border border-transparent px-2.5 py-1 bg-[#cf4f22] text-white rounded-full hover:bg-[#b8431c] transition">
            New Consultation
          </button>
        </div>
      </div>
      <div className="relative w-full mb-8">
        <Search
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          size={16}
        />
        <input
          type="text"
          placeholder="Search your recent history"
          className="w-full pl-10 pr-9 py-2 text-sm border border-color rounded-full bg-background placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-[#323230] transition-all"
        />
      </div>

      <ul className="flex flex-col gap-0.5">
        {histories.map(({ name, time }) => (
          <li
            key={name}
            className="flex justify-between items-center px-2.5 py-2 hover:bg-card-hover rounded-lg"
          >
            <Link
              href="/"
              className="group flex items-start gap-2.5   text-sm transition-all duration-150 "
            >
              <span className="w-7 h-7 rounded-full bg-app flex items-center justify-center shrink-0 transition-all">
                <Clock size={13} className="text-gray-400" />
              </span>
              <span className="flex flex-col min-w-0">
                <span className="text-muted  text-sm font-medium truncate leading-tight transition-colors">
                  {name}
                </span>
                <span className="text-[10px] text-muted mt-0.5">{time}</span>
              </span>
            </Link>
            <Ellipsis className="w-6 h-6 text-app" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
