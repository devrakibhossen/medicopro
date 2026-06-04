import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Medicopro | Health Records",
  description:
    "Your Doctor, Zero Distance Healthcare for Everyone, Everywhere Zero Wait. Zero Cost. Zero Worry.",
};
const Page = () => {
  const stats = [
    {
      label: "Total Records",
      value: 24,
    },
    {
      label: "All Consultations",
      value: 12,
    },
    {
      label: "Uploaded Reports",
      value: 7,
    },
    {
      label: "Prescriptions",
      value: 5,
    },
  ];

  const records = [
    {
      id: 1,
      recordName: "Blood Test Report",
      doctor: "Dr. Fahad",
      date: "2026-05-12",
      type: "Report",
      severity: "Moderate",
      summary: "Routine blood analysis report",
    },
    {
      id: 2,
      recordName: "AI Consultation — Fever",
      doctor: "AI Care Assistant",
      date: "2026-05-10",
      type: "AI Chat",
      severity: "Mild",
      summary: "Consultation regarding fever symptoms",
    },
    {
      id: 3,
      recordName: "Prescription — Dr. Karim",
      doctor: "Dr. Karim",
      date: "2026-05-09",
      type: "Prescription",
      severity: "Routine",
      summary: "Medicine prescription for headache",
    },
    {
      id: 4,
      recordName: "Chest X-Ray",
      doctor: "Radiology Department",
      date: "2026-04-28",
      type: "Report",
      severity: "Normal",
      summary: "Chest X-ray examination",
    },
    {
      id: 5,
      recordName: "AI Consultation — Eye Problem",
      doctor: "AI Care Assistant",
      date: "2026-04-22",
      type: "AI Chat",
      severity: "Moderate",
      summary: "Consultation regarding eye irritation",
    },
  ];
  return (
    <div className="lg:m-4 space-y-7">
      <div>
        <h2 className="text-2xl font-bold">Health Records</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your medical reports, consultations, and prescriptions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="p-4 rounded-md bg-card border border-app"
          >
            <h3 className="text-sm text-muted-foreground">{stat.label}</h3>

            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto bg-card border border-app rounded-md">
        <table className="w-full text-sm">
          <thead className="border-b border-app bg-muted/40">
            <tr>
              <th className="text-left px-5 py-4 font-semibold text-app">
                Record
              </th>

              <th className="text-left px-5 py-4 font-semibold text-app">
                Type
              </th>

              <th className="text-left px-5 py-4 font-semibold text-app">
                Doctor
              </th>

              <th className="text-left px-5 py-4 font-semibold text-app">
                Date
              </th>

              <th className="text-left px-5 py-4 font-semibold text-app">
                Severity
              </th>
            </tr>
          </thead>

          <tbody>
            {records.map((record) => (
              <tr
                key={record.id}
                className="border-b border-app hover:bg-muted/30 transition"
              >
                <td className="px-5 py-4 min-w-[250px]">
                  <div>
                    <h3 className="font-medium text-app">
                      {record.recordName}
                    </h3>

                    <p className="text-xs text-muted-foreground mt-1">
                      {record.summary}
                    </p>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {record.type}
                  </span>
                </td>

                <td className="px-5 py-4 text-muted-foreground">
                  {record.doctor}
                </td>

                <td className="px-5 py-4 text-muted-foreground">
                  {record.date}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium
              ${
                record.severity === "Moderate"
                  ? "bg-yellow-100 text-yellow-700"
                  : record.severity === "Mild"
                    ? "bg-blue-100 text-blue-700"
                    : record.severity === "Normal"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
              }`}
                  >
                    {record.severity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
