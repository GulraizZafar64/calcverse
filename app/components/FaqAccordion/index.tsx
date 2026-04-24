'use client'

import { useState } from 'react'
import Link from 'next/link'

type FaqItem = { q: string; a: string }

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div>
      <div className='divide-y divide-slate-100 dark:divide-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden'>
        {faqs.map((faq, i) => {
          const isOpen = open === i
          return (
            <div key={i} className='bg-white/90 dark:bg-slate-950/70'>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className='w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-colors duration-200'>
                <div className='flex items-center gap-3'>
                  <span className='inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-[11px] font-bold'>
                    {i + 1}
                  </span>
                  <span className='text-base font-semibold text-slate-900 dark:text-white'>
                    {faq.q}
                  </span>
                </div>
                <span
                  aria-hidden='true'
                  className={`shrink-0 text-blue-600 dark:text-blue-400 text-lg font-light transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                  +
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className='overflow-hidden'>
                  <p className='px-5 pb-4 pl-14 text-sm text-slate-600 dark:text-slate-400 leading-relaxed'>
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <Link
        href='/contact'
        className='inline-flex items-center mt-6 rounded-full border border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors'>
        Have more questions? Contact us
        <span className='ml-2'>→</span>
      </Link>
    </div>
  )
}
