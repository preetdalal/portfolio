'use client';

import React, { useState } from 'react';
import { X, Copy, Check, FileCode2 } from 'lucide-react';

interface ManifestModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  code?: string;
}

export default function ManifestModal({
  isOpen,
  onClose,
  title = 'Kubernetes Deployment Manifest',
  code = '',
}: ManifestModalProps) {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0a0e17] border border-brand-ice/40 rounded-xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-5 py-3.5 bg-[#0f1523] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2 font-heading font-bold text-sm text-brand-ice">
            <FileCode2 className="w-4 h-4 text-brand-ice" />
            <span>{title}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="font-mono text-xs text-slate-300 hover:text-white px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-telemetry-green" />
                  <span className="text-telemetry-green">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/[0.1] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Code Viewer */}
        <div className="p-6 overflow-y-auto font-mono text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#06080d] whitespace-pre">
          {code}
        </div>
      </div>
    </div>
  );
}
