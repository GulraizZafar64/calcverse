import CalculatorCard from '@/app/components/CalculatorCard'
import type { CalculatorCardType } from '@/app/types/calculator'
import FaqAccordion from '@/app/components/FaqAccordion'
import Link from 'next/link'

export const metadata = {
  title: 'Loan Calculators | CalcVerse Financial Tools',
  description: 'Explore professional loan calculators for EMI, mortgages, and personal financing. Plan your repayments with precision using CalcVerse.',
}

const loanCalculators: CalculatorCardType[] = [
  {
    name: 'Loan EMI Calculator',
    description: 'Calculate monthly installments and total interest for personal, auto, or business loans.',
    href: '/loan-emi',
    category: 'loan',
  },
  {
    name: 'Mortgage Calculator',
    description: 'Estimate monthly mortgage payments, including total interest and principal for your home purchase.',
    href: '/mortgage',
    category: 'loan',
  },
  {
    name: 'Simple Interest Calculator',
    description: 'Calculate simple interest earned or owed using the classic P×R×T formula.',
    href: '/simple-interest',
    category: 'loan',
  },
  {
    name: 'Car Loan Calculator',
    description: 'Estimate monthly auto loan payments and the total financing cost for your next vehicle.',
    href: '/car-loan',
    category: 'loan',
  },
  {
    name: 'Debt Payoff Calculator',
    description: 'Find out how long it will take to eliminate any debt and how much interest you will pay.',
    href: '/debt-payoff',
    category: 'loan',
  },
]

const loanFaqs = [
  {
    q: 'What is an EMI?',
    a: 'EMI stands for Equated Monthly Installment. It is a fixed amount of money that a borrower pays to a lender at a specified date each calendar month.',
  },
  {
    q: 'How is loan interest calculated?',
    a: 'Most loans use either simple interest or reducing balance interest. Our EMI calculator uses the reducing balance method, which is standard for most bank loans.',
  },
  {
    q: 'Can I use these for business loans?',
    a: 'Yes, our Loan EMI calculator is versatile enough to handle personal, auto, home, and business loans as long as you have the principal amount, interest rate, and tenure.',
  },
  {
    q: 'Is my data safe?',
    a: 'Absolutely. CalcVerse performs all calculations locally in your browser. We never see, store, or transmit any of the financial data you enter.',
  },
]

const LoanCalculatorsPage = () => {
  return (
    <main className='relative overflow-hidden'>
      {/* Background Blobs */}
      <div className='absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:bg-blue-600 dark:opacity-10' />
      <div className='absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:bg-purple-600 dark:opacity-10' />

      <section className='container pt-32 pb-16 relative z-10'>
        <div className='max-w-4xl'>
          <p className='inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400'>
            Financial Empowerment
          </p>
          <h1 className='mt-6 text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight'>
            Precision <span className="text-blue-600">Loan Planning</span> <br />
            Made Simple.
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400 font-medium'>
            Empower your borrowing decisions with our collection of professional loan calculators. Whether you&apos;re planning for a new car, a home, or a personal expense, CalcVerse provides the clarity you need to manage your debt effectively.
          </p>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className='container pb-20'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {loanCalculators.map((calculator) => (
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
                Why Use Our Loan Calculators?
              </h2>
              <div className='space-y-8'>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/30'>
                    📊
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>Amortization Breakdown</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Get a detailed monthly or yearly breakdown of your principal and interest payments.</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-500/30'>
                    ⚡
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>Instant Scenarios</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Adjust interest rates and tenures to see instant changes in your monthly commitments.</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-cyan-600 flex items-center justify-center text-white text-xl shadow-lg shadow-cyan-500/30'>
                    🛡️
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>100% Client-Side</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Your sensitive financial data never leaves your device. No cookies, no trackers, no storage.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='absolute inset-0 bg-blue-500/10 blur-3xl rounded-full' />
              <div className='relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl'>
                 <div className='space-y-6'>
                    <div className='flex items-center justify-between'>
                      <div className='text-sm font-bold text-slate-900 dark:text-white'>Loan Breakdown</div>
                      <div className='text-xs font-bold text-blue-600'>Monthly View</div>
                    </div>
                    <div className='space-y-4'>
                      {[
                        { label: 'Principal', amount: '$18,500', color: 'bg-blue-600' },
                        { label: 'Interest', amount: '$1,240', color: 'bg-indigo-600' },
                      ].map((item, i) => (
                        <div key={i} className='space-y-2'>
                          <div className='flex justify-between text-[11px] font-bold uppercase text-slate-400 tracking-wider'>
                            <span>{item.label}</span>
                            <span>{item.amount}</span>
                          </div>
                          <div className='h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden'>
                            <div className={`h-full ${item.color} w-3/4`} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className='mt-8 pt-6 border-t border-slate-100 dark:border-slate-800'>
                      <div className='flex items-end justify-between'>
                        <div className='space-y-1'>
                           <div className='text-[10px] font-bold text-slate-400 uppercase tracking-widest'>Total Monthly EMI</div>
                           <div className='text-2xl font-black text-slate-900 dark:text-white'>$425.50</div>
                        </div>
                        <div className='h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7"/></svg>
                        </div>
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
            Common Loan Questions
          </h2>
          <p className='text-slate-600 dark:text-slate-400'>
            Everything you need to know about loan calculations and our tools.
          </p>
        </div>
        <div className='max-w-3xl mx-auto'>
          <FaqAccordion faqs={loanFaqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className='container pb-20'>
        <div className='bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden'>
           <div className='absolute top-0 left-0 w-full h-full bg-[url("https://www.transparenttextures.com/patterns/cubes.png")] opacity-10' />
           <div className='relative z-10'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                Need help with other calculations?
              </h2>
              <p className='text-blue-100 mb-10 max-w-xl mx-auto text-lg'>
                Explore our full suite of financial tools, from investment growth to tax planning.
              </p>
              <Link 
                href="/#calculators" 
                className='inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-700 hover:bg-blue-50 transition-all shadow-xl shadow-black/10'
              >
                View All Tools
              </Link>
           </div>
        </div>
      </section>
    </main>
  )
}

export default LoanCalculatorsPage
