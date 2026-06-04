import { Plus } from "lucide-react";
import ReminderTab from "../components/ReminderTab";
 const stats = [
    {
      label: "Upcoming",
      value: 24,
    },
    {
      label: "Done",
      value: 12,
    },
    {
      label: "Missed",
      value: 7,
    },
  ];
const page = () => {
  return (
    <div className="lg:max-w-3xl mx-auto lg:mt-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xl font-semibold">Reminder</h3>
          <p className="text-sm text-muted mt-0.5">
            Stay on top of your health routine
          </p>
        </div>
        <button className="text-sm flex gap-1.5 items-center border border-transparent px-2.5 py-1 bg-[#cf4f22] text-white rounded-md hover:bg-[#b8431c] transition">
          <Plus size={16} />
          Add Reminder
        </button>
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-4 rounded-md bg-card border border-app"
          >
            <p className="text-3xl font-bold ">{stat.value}</p>
            <h3 className="text-sm text-muted-foreground mt-2">{stat.label}</h3>

          </div>
        ))}
      </div>
      <ReminderTab/>
    </div>
  );
};

export default page;
