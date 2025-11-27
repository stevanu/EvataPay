import React from "react";

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Blur + Fade */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="relative bg-white w-11/12 max-w-md p-6 rounded-2xl shadow-2xl border border-gray-200 animate-scaleIn">
        {/* Tombol Close */}
        <button
          className="absolute top-4 right-5 text-gray-500 hover:text-gray-700 transition cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Konten modal */}
        {children}
      </div>

      {/* Animasi CSS */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default Modal;
