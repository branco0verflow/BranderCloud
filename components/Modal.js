"use client";
import { motion, AnimatePresence } from "motion/react";

export default function Modal({ open, onClose, children }) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              absolute top-0 left-0 right-0
              mx-auto
              w-full max-w-2xl
              bg-white dark:bg-neutral-900
              rounded-b-3xl
              shadow-2xl
              p-6 sm:p-10
              max-h-[100svh] overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 dark:hover:text-white"
            >
              ✕
            </button>

            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
