import { useEffect, type ReactNode } from "react";
import { HiXCircle } from "react-icons/hi2";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Dialog = ({ open, onClose, title, children }: DialogProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-10 flex justify-center bg-black/10 p-15" onClick={onClose}>
      {/* Dialog */}
      <div
        className="relative w-[464px] h-auto max-h-[90vh] rounded-lg overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-[inherit] p-6">
          <div className="flex items-center justify-between mb-8">
            <p className="font-bold text-2xl text-black">{title}</p>
            <button onClick={onClose}>
              <HiXCircle size={26} color="#FD5725" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

Dialog.displayName = "Dialog";
