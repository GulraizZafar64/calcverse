import CalculatorCard from '@/app/components/CalculatorCard'
import type { CalculatorCardType } from '@/app/types/calculator'
import FaqAccordion from '@/app/components/FaqAccordion'
import Link from 'next/link'

export const metadata = {
  title: 'Math & Math Tools | CalcVerse Utilities',
  description: 'Quick math tools for everyday calculations. From percentages to ratios, simplify your math with CalcVerse.',
}

const mathCalculators: CalculatorCardType[] = [
  {
    name: 'Percentage Calculator',
    description: 'Quickly calculate percentages, discounts, and ratio increases instantly.',
    href: '/percentage-calculator',
    category: 'math',
  },
  {
    name: 'Simple Interest Calculator',
    description: 'Calculate simple interest earned or owed using the classic P×R×T formula.',
    href: '/simple-interest',
    category: 'loan',
  },
]

const mathFaqs = [
  {
    q: 'How do I calculate a percentage increase?',
    a: 'To calculate a percentage increase, subtract the original value from the new value, divide by the original value, and then multiply by 100.',
  },
  {
    q: 'What is the simple interest formula?',
    a: 'The simple interest formula is I = P × R × T, where I is interest, P is principal, R is the interest rate, and T is the time period.',
  },
]

const MathToolsPage = () => {
  return (
    <main className='relative overflow-hidden'>
      {/* Background Blobs */}
      <div className='absolute top-0 -left-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:bg-indigo-600 dark:opacity-10' />
      <div className='absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:bg-cyan-600 dark:opacity-10' />

      <section className='container pt-32 pb-16 relative z-10'>
        <div className='max-w-4xl'>
          <p className='inline-flex rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-400'>
            Math Utilities
          </p>
          <h1 className='mt-6 text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight'>
            Everyday <span className="text-indigo-600">Math Simplified</span> <br />
            & Precise.
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400 font-medium'>
            Simplify your daily math tasks with our quick utility tools. From financial ratios to simple percentages, we provide the precision you need without the complexity.
          </p>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className='container pb-20'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {mathCalculators.map((calculator) => (
            <CalculatorCard key={calculator.name} calculator={calculator} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className='bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-100 dark:border-slate-800'>
        <div className='container'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6'>
                Effortless Calculations
              </h2>
              <div className='space-y-8'>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-500/30'>
                    🔢
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>Instant Results</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Get your answers as you type. No need to click "calculate" for every small change.</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-cyan-600 flex items-center justify-center text-white text-xl shadow-lg shadow-cyan-500/30'>
                    🎯
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>High Precision</h3>
                    <p className='text-slate-600 dark:text-slate-400'>We use accurate mathematical functions to ensure your results are correct to the last decimal.</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/30'>
                    🚀
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>Zero Friction</h3>
                    <p className='text-slate-600 dark:text-slate-400'>No sign-ups, no ads, just the tools you need to get your work done quickly.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
               <div className='absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full' />
               <div className='relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl'>
                  <div className='space-y-6'>
                    <div className='flex items-center justify-between'>
                      <div className='text-sm font-bold text-slate-900 dark:text-white'>Percentage Tool</div>
                      <div className='h-8 w-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="16" r="3"/><line x1="16" y1="8" x2="8" y2="16"/></svg>
                      </div>
                    </div>
                    <div className='p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 space-y-4'>
                       <div className='flex items-center gap-4'>
                          <div className='text-xs font-bold text-slate-400'>Input</div>
                          <div className='flex-1 h-1 bg-slate-200 dark:bg-slate-700 rounded-full' />
                          <div className='text-sm font-black text-slate-900 dark:text-white'>500</div>
                       </div>
                       <div className='flex items-center gap-4'>
                          <div className='text-xs font-bold text-slate-400'>Percent</div>
                          <div className='flex-1 h-1 bg-slate-200 dark:bg-slate-700 rounded-full' />
                          <div className='text-sm font-black text-indigo-600'>20%</div>
                       </div>
                    </div>
                    <div className='flex justify-between items-end pt-4 border-t border-slate-100 dark:border-slate-800'>
                       <div className='space-y-1'>
                          <div className='text-[10px] font-bold text-slate-400 uppercase tracking-widest'>Final Result</div>
                          <div className='text-3xl font-black text-slate-900 dark:text-white'>100.00</div>
                       </div>
                       <div className='px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-lg shadow-lg shadow-indigo-500/30'>
                          Copy Value
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='container py-20'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            Math Insights
          </h2>
          <p className='text-slate-600 dark:text-slate-400'>
            Quick answers to common mathematical questions.
          </p>
        </div>
        <div className='max-w-3xl mx-auto'>
          <FaqAccordion faqs={mathFaqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className='container pb-20'>
        <div className='bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden'>
           <div className='absolute top-0 left-0 w-full h-full bg-[url("https://www.transparenttextures.com/patterns/graphy.png")] opacity-10' />
           <div className='relative z-10'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                Need more complex tools?
              </h2>
              <p className='text-indigo-100 mb-10 max-w-xl mx-auto text-lg'>
                Check out our financial suite for loans, investments, and more.
              </p>
              <Link 
                href="/loan-calculators" 
                className='inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-indigo-700 hover:bg-indigo-50 transition-all shadow-xl shadow-black/10'
              >
                Explore Loan Tools
              </Link>
           </div>
        </div>
      </section>
    </main>
  )
}

export default MathToolsPage
