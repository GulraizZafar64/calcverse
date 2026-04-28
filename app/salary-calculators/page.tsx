import CalculatorCard from '@/app/components/CalculatorCard'
import type { CalculatorCardType } from '@/app/types/calculator'
import FaqAccordion from '@/app/components/FaqAccordion'
import Link from 'next/link'

export const metadata = {
  title: 'Salary Calculators | CalcVerse Financial Tools',
  description: 'Calculate your true take-home pay with our professional salary calculators. Plan your budget with accurate net income estimates.',
}

const salaryCalculators: CalculatorCardType[] = [
  {
    name: 'Salary After Tax Calculator',
    description: 'Estimate your monthly and yearly net salary after income tax deductions with precision.',
    href: '/salary-after-tax',
    category: 'salary',
  },
  {
    name: 'Hourly to Annual Salary Calculator',
    description: 'Convert your hourly wage into weekly, monthly, and annual salary figures instantly.',
    href: '/hourly-to-salary',
    category: 'salary',
  },
]

const salaryFaqs = [
  {
    q: 'What is net vs gross salary?',
    a: 'Gross salary is the total amount an employer pays you before any deductions. Net salary (take-home pay) is what you actually receive in your bank account after taxes and other deductions.',
  },
  {
    q: 'How are taxes calculated?',
    a: 'Taxes are typically calculated based on your total income and the specific tax brackets of your country or region. Our calculators use standardized models for common scenarios.',
  },
  {
    q: 'Can I calculate hourly rates?',
    a: 'Yes, our Hourly to Annual calculator allows you to convert between different time frames, helping you understand your earnings regardless of how you are paid.',
  },
]

const SalaryCalculatorsPage = () => {
  return (
    <main className='relative overflow-hidden'>
      {/* Background Blobs */}
      <div className='absolute top-0 -left-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:bg-emerald-600 dark:opacity-10' />
      <div className='absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:bg-blue-600 dark:opacity-10' />

      <section className='container pt-32 pb-16 relative z-10'>
        <div className='max-w-4xl'>
          <p className='inline-flex rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-400'>
            Income Transparency
          </p>
          <h1 className='mt-6 text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight'>
            Net Salary <span className="text-emerald-600">& Budget</span> <br />
            Planning Tools.
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400 font-medium'>
            Understanding your take-home pay is the foundation of any solid financial plan. At CalcVerse, our salary tools help you peel back the layers of gross income to see exactly what you have available for your life and goals.
          </p>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className='container pb-20'>
        <div className='grid gap-8 md:grid-cols-2'>
          {salaryCalculators.map((calculator) => (
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
                Financial Clarity Starts Here
              </h2>
              <div className='space-y-8'>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white text-xl shadow-lg shadow-emerald-500/30'>
                    💵
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>Accurate Tax Estimates</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Calculate your net income with consideration for standard tax brackets and deductions.</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/30'>
                    🕒
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>Flexible Timeframes</h3>
                    <p className='text-slate-600 dark:text-slate-400'>See your earnings broken down by hour, week, month, and year for total transparency.</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-teal-600 flex items-center justify-center text-white text-xl shadow-lg shadow-teal-500/30'>
                    🔒
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>Private Calculations</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Your income details never leave your browser. We prioritize your privacy above all else.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full' />
              <div className='relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl'>
                 <div className='space-y-6'>
                    <div className='flex items-center justify-between'>
                      <div className='text-sm font-bold text-slate-900 dark:text-white'>Take-Home Pay</div>
                      <div className='px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-[10px] font-bold text-emerald-600 rounded-md uppercase tracking-wider'>Calculated</div>
                    </div>
                    <div className='space-y-4'>
                      {[
                        { label: 'Gross Salary', amount: '$6,500', color: 'bg-emerald-500' },
                        { label: 'Total Deductions', amount: '-$1,420', color: 'bg-red-500' },
                      ].map((item, i) => (
                        <div key={i} className='flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700'>
                           <div className='flex items-center gap-3'>
                              <div className={`h-2 w-2 rounded-full ${item.color}`} />
                              <div className='text-xs font-bold text-slate-600 dark:text-slate-300'>{item.label}</div>
                           </div>
                           <div className={`text-sm font-black ${item.color === 'bg-red-500' ? 'text-red-500' : 'text-slate-900 dark:text-white'}`}>{item.amount}</div>
                        </div>
                      ))}
                    </div>
                    <div className='mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-end'>
                        <div className='space-y-1'>
                           <div className='text-[10px] font-bold text-slate-400 uppercase tracking-widest'>Net Monthly Pay</div>
                           <div className='text-3xl font-black text-emerald-600'>$5,080</div>
                        </div>
                        <div className='h-12 w-12 rounded-2xl bg-emerald-600 shadow-lg shadow-emerald-500/30 flex items-center justify-center text-white'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
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
            Income & Tax FAQs
          </h2>
          <p className='text-slate-600 dark:text-slate-400'>
            Common questions about salary calculations and budgeting.
          </p>
        </div>
        <div className='max-w-3xl mx-auto'>
          <FaqAccordion faqs={salaryFaqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className='container pb-20'>
        <div className='bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden'>
           <div className='absolute top-0 left-0 w-full h-full bg-[url("https://www.transparenttextures.com/patterns/diagmonds-light.png")] opacity-10' />
           <div className='relative z-10'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                Better budgeting starts with knowing your numbers.
              </h2>
              <p className='text-emerald-100 mb-10 max-w-xl mx-auto text-lg'>
                Use our Salary After Tax calculator to get a realistic view of your monthly disposable income.
              </p>
              <Link 
                href="/salary-after-tax" 
                className='inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-700 hover:bg-emerald-50 transition-all shadow-xl shadow-black/10'
              >
                Go to Salary Calculator
              </Link>
           </div>
        </div>
      </section>
    </main>
  )
}

export default SalaryCalculatorsPage
