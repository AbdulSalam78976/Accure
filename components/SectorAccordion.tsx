'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface SectorAccordionProps {
  items: string[];
  descriptions: string[];
  accent: string;
}

export default function SectorAccordion({ items, descriptions, accent }: SectorAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#141c0d]/8 border-t border-[#141c0d]/8">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-5 text-left group"
            >
              <div className="flex items-center gap-5 min-w-0">
                {/* number */}
                <span
                  className="font-poppins font-bold text-xs shrink-0"
                  style={{ color: isOpen ? accent : accent + '50' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {/* title */}
                <span
                  className={`font-poppins font-semibold text-lg transition-colors duration-200 ${
                    isOpen ? 'text-[#141c0d]' : 'text-[#4f564b] group-hover:text-[#141c0d]'
                  }`}
                >
                  {item}
                </span>
              </div>

              {/* icon */}
              <div
                className="shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-200"
                style={{
                  borderColor: isOpen ? accent : '#141c0d20',
                  background: isOpen ? accent : 'transparent',
                }}
              >
                {isOpen
                  ? <Minus className="w-3.5 h-3.5 text-white" />
                  : <Plus className="w-3.5 h-3.5 text-[#141c0d]/40 group-hover:text-[#141c0d]/70" />
                }
              </div>
            </button>

            {/* Expandable body */}
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? '200px' : '0px' }}
            >
              <p className="pl-10 pb-6 text-[15px] leading-7 text-[#4f564b] max-w-2xl">
                {descriptions[i]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
