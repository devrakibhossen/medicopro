"use client";

import { Phone, ChevronLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────
type TabKey = "details" | "appointment" | "insurance" | "chat" | "notes" | "attachments";

type Patient = {
  id: string;
  photo?: string;
  firstName: string;
  lastName: string;
  fatherName: string;
  age: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  dob: string;
  bloodGroup: string;
  maritalStatus: string;
  status: "Active" | "Inactive";
  // Medical
  primaryPhysician: string;
  knownAllergies: string;
  chronicConditions: string;
  currentMedications: string;
  previousSurgeries: string;
  insuranceProvider: string;
  insuranceId: string;
  emergencyContact: string;
};

// ─── Mock data ────────────────────────────────────────────────────────────────
const patient: Patient = {
  id: "#5233",
  firstName: "Henry",
  lastName: "Wilson",
  fatherName: "Denim Wilson",
  age: "32Y 2M",
  gender: "Male",
  phone: "+123 456 7890",
  email: "henny@gmail.com",
  address: "123 Main St, New York",
  dob: "30/06/1996",
  bloodGroup: "O+",
  maritalStatus: "Married",
  status: "Active",
  primaryPhysician: "Dr. Emily Davies",
  knownAllergies: "Penicillin",
  chronicConditions: "Hypertension (Diagnosed: 01/10/2022)",
  currentMedications: "Atenolol 50mg",
  previousSurgeries: "Appendectomy (2020)",
  insuranceProvider: "BlueCross BlueShield",
  insuranceId: "BCB-9912-XY",
  emergencyContact: "+123 456 0000",
};

const tabs: { key: TabKey; label: string; count?: number }[] = [
  { key: "details",     label: "Details" },
  { key: "appointment", label: "Appointment", count: 2 },
  { key: "insurance",   label: "Insurance" },
  { key: "chat",        label: "Chat",        count: 7 },
  { key: "notes",       label: "Notes",       count: 10 },
  { key: "attachments", label: "Attachments", count: 8 },
];

// ─── Info field ───────────────────────────────────────────────────────────────
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-muted mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-app">{value}</p>
    </div>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────────
function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-base font-bold text-app mb-4 mt-6 first:mt-0">{title}</h2>
  );
}

// ─── Details tab content ──────────────────────────────────────────────────────
function DetailsTab({ p }: { p: Patient }) {
  return (
    <div>
      {/* Personal Information */}
      <SectionTitle title="Personal Information" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
        <Field label="First Name"    value={p.firstName} />
        <Field label="Last Name"     value={p.lastName} />
        <Field label="Father Name"   value={p.fatherName} />
        <Field label="Age"           value={p.age} />
        <Field label="Gender"        value={p.gender} />
        <Field label="Phone Number"  value={p.phone} />
        <Field label="Email Id"      value={p.email} />
        <Field label="Address"       value={p.address} />
        <Field label="Date of Birth" value={p.dob} />
        <Field label="Blood Group"   value={p.bloodGroup} />
        <Field label="Marital Status" value={p.maritalStatus} />
      </div>

      <div className="h-px bg-color my-6" />

      {/* Medical Information */}
      <SectionTitle title="Medical Information" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
        <Field label="Primary Physician"   value={p.primaryPhysician} />
        <Field label="Known Allergies"     value={p.knownAllergies} />
        <Field label="Chronic Conditions"  value={p.chronicConditions} />
        <Field label="Current Medications" value={p.currentMedications} />
        <Field label="Previous Surgeries"  value={p.previousSurgeries} />
        <Field label="Emergency Contact"   value={p.emergencyContact} />
      </div>

      <div className="h-px bg-color my-6" />

      {/* Insurance Information */}
      <SectionTitle title="Insurance Information" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
        <Field label="Insurance Provider" value={p.insuranceProvider} />
        <Field label="Insurance ID"       value={p.insuranceId} />
      </div>
    </div>
  );
}

// ─── Placeholder tabs ─────────────────────────────────────────────────────────
function PlaceholderTab({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="w-12 h-12 rounded-2xl bg-surface border border-color flex items-center justify-center mb-3">
        <span className="text-xl">📄</span>
      </div>
      <p className="text-sm font-medium text-app">{label}</p>
      <p className="text-xs text-muted mt-1">No data available yet</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
const PatientProfilePage = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("details");

  return (
    <div className="lg:max-w-5xl mx-auto px-4 py-6 lg:py-10">

      

      {/* Patient header */}
      <div className="flex items-start gap-4 mb-6">

        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 overflow-hidden border-2 border-color">
          {patient.firstName[0]}{patient.lastName[0]}
        </div>

        {/* Name + meta */}
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-lg font-bold text-app">
              {patient.firstName} D. {patient.lastName}
            </h1>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40">
              {patient.status}
            </span>
          </div>
          <div className="flex items-center gap-3 mt-1 flex-wrap">
            <span className="text-xs text-muted">ID: {patient.id}</span>
            <span className="text-muted text-xs">•</span>
            <span className="flex items-center gap-1 text-xs text-muted">
              <Phone size={11} />
              {patient.phone}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-color mb-6">
        <nav className="flex gap-0 overflow-x-auto scrollbar-hide -mb-px">
          {tabs.map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === key
                  ? "border-[#cf4f22] text-[#cf4f22] "
                  : "border-transparent text-muted hover:text-app"
              }`}
            >
              {label}
              {count !== undefined && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none ${
                    activeTab === key
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                      : "bg-app border border-color text-muted"
                  }`}
                >
                  {String(count).padStart(2, "0")}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab content */}
      <div>
        {activeTab === "details"     && <DetailsTab p={patient} />}
        {activeTab === "appointment" && <PlaceholderTab label="Appointments" />}
        {activeTab === "insurance"   && <PlaceholderTab label="Insurance Details" />}
        {activeTab === "chat"        && <PlaceholderTab label="Chat History" />}
        {activeTab === "notes"       && <PlaceholderTab label="Notes" />}
        {activeTab === "attachments" && <PlaceholderTab label="Attachments" />}
      </div>
    </div>
  );
};

export default PatientProfilePage;