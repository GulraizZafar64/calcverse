import CalculatorCard from '@/app/components/CalculatorCard'
import type { CalculatorCardType } from '@/app/types/calculator'
import FaqAccordion from '@/app/components/FaqAccordion'
import Link from 'next/link'

export const metadata = {
  title: 'Investment Calculators | CalcVerse Financial Tools',
  description: 'Plan your long-term wealth with professional investment calculators. Project compound interest and savings growth with CalcVerse.',
}

const investmentCalculators: CalculatorCardType[] = [
  {
    name: 'Compound Interest Calculator',
    description: 'Project your investment balance with monthly contributions and professional compound interest models.',
    href: '/compound-interest',
    category: 'investment',
  },
  {
    name: 'Retirement Savings Calculator',
    description: 'Project your retirement nest egg based on current savings, monthly contributions, and expected returns.',
    href: '/retirement-savings',
    category: 'investment',
  },
  {
    name: 'ROI Calculator',
    description: 'Measure the return on any investment by calculating net profit and ROI percentage instantly.',
    href: '/roi-calculator',
    category: 'investment',
  },
  {
    name: 'Inflation Calculator',
    description: "See how inflation erodes purchasing power and what today's dollars will be worth in the future.",
    href: '/inflation-calculator',
    category: 'investment',
  },
]

const investmentFaqs = [
  {
    q: 'What is Compound Interest?',
    a: 'Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods.',
  },
  {
    q: 'Why should I calculate ROI?',
    a: 'Return on Investment (ROI) helps you understand the efficiency of an investment or compare the efficiencies of several different investments.',
  },
  {
    q: 'How does inflation affect my savings?',
    a: 'Inflation reduces the purchasing power of money over time, meaning you can buy fewer goods or services with the same amount of money in the future.',
  },
]

const InvestmentCalculatorsPage = () => {
  return (
    <main className='relative overflow-hidden'>
      {/* Background Blobs */}
      <div className='absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:bg-blue-600 dark:opacity-10' />
      <div className='absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:bg-purple-600 dark:opacity-10' />

      <section className='container pt-32 pb-16 relative z-10'>
        <div className='max-w-4xl'>
          <p className='inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400'>
            Growth Tools
          </p>
          <h1 className='mt-6 text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight'>
            Wealth <span className="text-blue-600">Projection & Growth</span> <br />
            Optimized for You.
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400 font-medium'>
            Harness the power of compounding with our professional investment tools. At CalcVerse, we provide the calculators you need to visualize your financial independence and build a secure future.
          </p>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className='container pb-20'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {investmentCalculators.map((calculator) => (
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
                Maximize Your Financial Growth
              </h2>
              <div className='space-y-8'>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/30'>
                    📈
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>Accurate Projections</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Our models account for regular contributions and varying interest rates to give you a realistic outlook.</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-500/30'>
                    🏛️
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>Retirement Readiness</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Evaluate if your current savings strategy is sufficient for your retirement goals.</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-cyan-600 flex items-center justify-center text-white text-xl shadow-lg shadow-cyan-500/30'>
                    🔒
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>Private & Secure</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Your investment strategies and numbers are your business. We keep it that way by processing everything locally.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full' />
              <div className='relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl'>
                 <div className='space-y-6'>
                    <div className='flex items-center justify-between'>
                      <div className='text-sm font-bold text-slate-900 dark:text-white'>Growth Projection</div>
                      <div className='flex gap-1'>
                        <div className='h-1.5 w-1.5 rounded-full bg-blue-600' />
                        <div className='h-1.5 w-1.5 rounded-full bg-indigo-600' />
                      </div>
                    </div>
                    <div className='relative h-40 w-full overflow-hidden'>
                       <div className='absolute bottom-0 left-0 w-full h-full flex items-end gap-2 px-2'>
                          {[40, 55, 45, 70, 60, 85, 75, 100].map((h, i) => (
                            <div key={i} className='flex-1 group relative'>
                               <div 
                                 className='w-full bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t-md opacity-20 group-hover:opacity-100 transition-all duration-500' 
                                 style={{ height: `${h}%` }} 
                               />
                               {i === 7 && (
                                 <div className='absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-600 text-[10px] text-white px-2 py-1 rounded font-bold whitespace-nowrap shadow-xl'>
                                   $2.4M Goal
                                 </div>
                               )}
                            </div>
                          ))}
                       </div>
                    </div>
                    <div className='flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800'>
                       <div className='flex items-center gap-3'>
                          <div className='h-8 w-8 rounded-lg bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-600 text-xs font-bold'>+24%</div>
                          <div className='text-[10px] font-bold text-slate-400 uppercase tracking-widest'>Net ROI</div>
                       </div>
                       <div className='text-xl font-black text-slate-900 dark:text-white'>$840,000</div>
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
            Investment Insights
          </h2>
          <p className='text-slate-600 dark:text-slate-400'>
            Understand the fundamentals of wealth building with our quick FAQ.
          </p>
        </div>
        <div className='max-w-3xl mx-auto'>
          <FaqAccordion faqs={investmentFaqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className='container pb-20'>
        <div className='bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden'>
           <div className='absolute top-0 left-0 w-full h-full bg-[url("https://www.transparenttextures.com/patterns/carbon-fibre.png")] opacity-10' />
           <div className='relative z-10'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                Ready to take control of your future?
              </h2>
              <p className='text-indigo-100 mb-10 max-w-xl mx-auto text-lg'>
                Try our compound interest calculator today and see the potential of your investments.
              </p>
              <Link 
                href="/compound-interest" 
                className='inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-indigo-700 hover:bg-indigo-50 transition-all shadow-xl shadow-black/10'
              >
                Start Calculating
              </Link>
           </div>
        </div>
      </section>
    </main>
  )
}

export default InvestmentCalculatorsPage
