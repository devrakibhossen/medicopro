"use client";
import { Plus, ImageDown ,Pill,FileText,Activity,Heart } from "lucide-react";
import { useState,useRef, useEffect} from "react";
const ConsultationAttachment = () => {

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-[34px] h-[34px] flex items-center justify-center rounded-md bg-surface border border-color text-muted-foreground hover:text-foreground transition"
        aria-label="Add attachment"
      >
        <Plus size={18} />
      </button>

      {open && (
        <div className="absolute bottom-12 left-1 w-52 rounded-md bg-card border border-gray-200 dark:border-[#ffffff1a] p-1 z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <ul className="flex flex-col gap-0.5">
            <li className="group flex items-center gap-1.5 p-1.5 rounded-md hover:bg-card-hover transition-all cursor-pointer">
                <ImageDown className="w-4 h-4 text-muted transition-colors" />
             
              <span className="text-sm text-muted font-medium flex-1">
                Add files or image
              </span>
            </li>
            <li className="group flex items-center gap-1.5 p-1.5 rounded-md hover:bg-card-hover transition-all cursor-pointer">
                <Pill  className="w-4 h-4 text-muted transition-colors" />
             
              <span className="text-sm text-muted font-medium flex-1">
                Medicine
              </span>
            </li>
            {/* Divider */}
            <li className="my-1 ">
              <div className="h-px bg-[#e5e4df] dark:bg-[#2e2e2c]" />
            </li>

            <li className="group flex items-center gap-1.5 p-1.5 rounded-md hover:bg-card-hover transition-all cursor-pointer">
                <FileText  className="w-4 h-4 text-muted transition-colors" />
             
              <span className="text-sm text-muted font-medium flex-1">
                Prescription
              </span>
            </li>
            
            <li className="group flex items-center gap-1.5 p-1.5 rounded-md hover:bg-card-hover transition-all cursor-pointer">
                <Activity  className="w-4 h-4 text-muted transition-colors" />
             
              <span className="text-sm text-muted font-medium flex-1">
               Lab Report
              </span>
            </li>
             {/* Divider */}
            <li className="my-1 ">
              <div className="h-px bg-[#e5e4df] dark:bg-[#2e2e2c]" />
            </li>
            <li className="group flex items-center gap-1.5 p-1.5 rounded-md hover:bg-card-hover transition-all cursor-pointer">
                <Heart  className="w-4 h-4 text-muted transition-colors" />
             
              <span className="text-sm text-muted font-medium flex-1">
               Vitals 
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ConsultationAttachment;
