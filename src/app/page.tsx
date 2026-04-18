import CalculatorCard from './components/CalculatorCard'
import type { CalculatorCardType } from './types/calculator'
import Link from 'next/link'

export const metadata = {
  title: 'Financial Calculators & Money Tools',
  description:
    'Easy financial calculators for loans, mortgages, investments and salary after tax. Get accurate results, formulas, and guidance.',
}

const calculators: CalculatorCardType[] = [
  {
    name: 'Loan EMI Calculator',
    description:
      'Find monthly loan payments, total interest, and total repayment amount for any loan plan.',
    href: '/loan-emi',
    category: 'loan',
  },
  {
    name: 'Compound Interest Calculator',
    description:
      'Estimate how much your investment grows with monthly contributions and compound interest.',
    href: '/compound-interest',
    category: 'investment',
  },
  {
    name: 'Mortgage Calculator',
    description:
      'Calculate monthly mortgage payments, overall interest, and total loan cost for your home purchase.',
    href: '/mortgage',
    category: 'loan',
  },
  {
    name: 'Salary After Tax Calculator',
    description:
      'Discover your monthly and annual net salary after tax so you can budget with confidence.',
    href: '/salary-after-tax',
    category: 'salary',
  },
]

const sections = [
  {
    title: 'Popular Calculators',
    items: calculators,
  },
  {
    title: 'Loan Calculators',
    items: calculators.filter((item) => item.category === 'loan'),
  },
  {
    title: 'Investment Calculators',
    items: calculators.filter((item) => item.category === 'investment'),
  },
  {
    title: 'Salary Calculators',
    items: calculators.filter((item) => item.category === 'salary'),
  },
]

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <section className='bg-white dark:bg-slate-950 relative overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle at top right,rgba(59,130,246,0.05),transparent)] pointer-events-none'></div>
        <div className='container py-20 lg:py-32 relative'>
          <div className='max-w-4xl mx-auto text-center space-y-8'>
            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800'>
              <span className='w-2 h-2 rounded-full bg-blue-500 animate-pulse'></span>
              Professional Financial Tools
            </div>
            <h1 className='text-4xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white'>
              Empower Your Finances with
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>CalcVerse Tools</span>
            </h1>
            <p className='text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed'>
              Get precise calculations for loans, investments, mortgages, and salary planning. 
              Our professional-grade calculators help you make informed financial decisions with ease.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
              <a href='#popular' className='inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none font-semibold text-lg'>
                Explore Calculators
              </a>
              <a href='/about' className='inline-flex items-center justify-center px-8 py-4 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-all font-semibold text-lg'>
                About CalcVerse
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-slate-50 dark:bg-slate-900/50 py-24'>
        <div className='container'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6'>
                Why Choose
                <span className='text-blue-600'> CalcVerse?</span>
              </h2>
              <p className='text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto'>
                We provide the most accurate and easy-to-use financial tools designed for clarity and precision.
              </p>
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
              <div className='group p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300'>
                <div className='w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                  <svg className='w-7 h-7 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-3'>Instant Results</h3>
                <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>Get real-time financial projections as you type, no waiting for page reloads or complex processing.</p>
              </div>
              <div className='group p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300'>
                <div className='w-14 h-14 bg-purple-50 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                  <svg className='w-7 h-7 text-purple-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-3'>High Accuracy</h3>
                <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>Our tools use industry-standard financial formulas to ensure you get the most reliable estimates for your planning.</p>
              </div>
              <div className='group p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300'>
                <div className='w-14 h-14 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                  <svg className='w-7 h-7 text-emerald-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-3'>Privacy First</h3>
                <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>We don't store your personal financial data. All calculations are performed locally in your browser for maximum security.</p>
              </div>
              <div className='group p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300'>
                <div className='w-14 h-14 bg-orange-50 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                  <svg className='w-7 h-7 text-orange-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                  </svg>
                </div>
                <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-3'>Fully Responsive</h3>
                <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>Access your favorite financial tools on any device. CalcVerse works perfectly on mobile, tablet, and desktop.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white dark:bg-slate-950 py-24'>
        <div className='container'>
          <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6'>
                Explore by
                <span className='text-blue-600'> Category</span>
              </h2>
              <p className='text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto'>
                Find the right tool for your specific financial needs.
              </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
              <Link href='/loan-calculators' className='group p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-blue-600 transition-all duration-300 text-center'>
                <div className='w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors'>
                  <svg className='w-6 h-6 text-blue-600 group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white group-hover:text-white transition-colors'>Loans</h3>
              </Link>
              <Link href='/investment-calculators' className='group p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-blue-600 transition-all duration-300 text-center'>
                <div className='w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors'>
                  <svg className='w-6 h-6 text-blue-600 group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
                  </svg>
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white group-hover:text-white transition-colors'>Investments</h3>
              </Link>
              <Link href='/mortgage' className='group p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-blue-600 transition-all duration-300 text-center'>
                <div className='w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors'>
                  <svg className='w-6 h-6 text-blue-600 group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
                  </svg>
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white group-hover:text-white transition-colors'>Mortgages</h3>
              </Link>
              <Link href='/salary-calculators' className='group p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl hover:bg-blue-600 transition-all duration-300 text-center'>
                <div className='w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors'>
                  <svg className='w-6 h-6 text-blue-600 group-hover:text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' />
                  </svg>
                </div>
                <h3 className='font-bold text-slate-900 dark:text-white group-hover:text-white transition-colors'>Salary</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-slate-900 py-24 text-white overflow-hidden relative'>
        <div className='absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none'>
          <svg width='100%' height='100%' viewBox='0 0 100 100' preserveAspectRatio='none'>
            <path d='M0 100 C 20 0 50 0 100 100 Z' fill='url(#grad)' />
            <defs>
              <linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop offset='0%' style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                <stop offset='100%' style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='container relative z-10'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl lg:text-5xl font-bold mb-6 italic'>
                How CalcVerse Works
              </h2>
              <p className='text-xl text-slate-400'>
                Three simple steps to financial clarity and planning.
              </p>
            </div>
            <div className='grid md:grid-cols-3 gap-12'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-blue-500/50'>
                  1
                </div>
                <h3 className='text-xl font-bold mb-3'>Select Your Tool</h3>
                <p className='text-slate-400'>Choose from our wide range of calculators tailored for your needs.</p>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-purple-500/50'>
                  2
                </div>
                <h3 className='text-xl font-bold mb-3'>Input Details</h3>
                <p className='text-slate-400'>Enter your financial parameters into our easy-to-use interface.</p>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-emerald-500/50'>
                  3
                </div>
                <h3 className='text-xl font-bold mb-3'>Get Analysis</h3>
                <p className='text-slate-400'>Receive instant, accurate results and detailed breakdowns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='popular' className='bg-slate-50 dark:bg-slate-900/50 py-24'>
        <div className='container'>
          <div className='max-w-6xl mx-auto'>
            {sections.map((section, index) => (
              <div key={section.title} className={index > 0 ? 'mt-24' : ''}>
                <div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
                  <div>
                    <h2 className='text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
                      {section.title}
                    </h2>
                    <p className='text-lg text-slate-600 dark:text-slate-400 max-w-2xl'>
                      Professional tools for accurate {section.title.toLowerCase()} and analysis.
                    </p>
                  </div>
                  {index === 0 && (
                    <Link href='/loan-calculators' className='text-blue-600 font-semibold flex items-center hover:underline'>
                      View All Tools
                      <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7-7 7' />
                      </svg>
                    </Link>
                  )}
                </div>
                <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
                  {section.items.map((calculator) => (
                    <div key={calculator.name} className='group bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'>
                      <div className='mb-6'>
                        <span className='inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-900/30 rounded-full'>
                          {calculator.category.replace('-', ' ')}
                        </span>
                      </div>
                      <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors'>
                        {calculator.name}
                      </h3>
                      <p className='text-slate-600 dark:text-slate-400 mb-6 leading-relaxed'>
                        {calculator.description}
                      </p>
                      <Link
                        href={calculator.href}
                        className='inline-flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform'>
                        Try Calculator
                        <svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-white dark:bg-slate-950 py-24'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6'>
                Frequently Asked
                <span className='text-blue-600'> Questions</span>
              </h2>
              <p className='text-xl text-slate-600 dark:text-slate-400'>
                Everything you need to know about CalcVerse and our financial tools.
              </p>
            </div>
            <div className='space-y-6'>
              {[
                {
                  q: 'Are these calculators really free?',
                  a: 'Yes, all CalcVerse calculators are 100% free to use. We believe in providing accessible financial tools to help everyone make better money decisions.'
                },
                {
                  q: 'How accurate are the results?',
                  a: 'Our calculators use industry-standard mathematical formulas for financial calculations. While highly accurate for planning, they should be used as estimates. Always consult with a certified financial advisor for major life decisions.'
                },
                {
                  q: 'Is my financial data stored?',
                  a: 'No. Privacy is a core value at CalcVerse. All calculations happen locally in your browser. We do not store or see any of the numbers you enter into our tools.'
                },
                {
                  q: 'Can I use CalcVerse on my phone?',
                  a: 'Absolutely! CalcVerse is designed with a mobile-first approach. It works seamlessly on all smartphones, tablets, and desktop computers.'
                }
              ].map((faq, i) => (
                <div key={i} className='p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/20 transition-colors'>
                  <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>
                    {faq.q}
                  </h3>
                  <p className='text-lg text-slate-600 dark:text-slate-400 leading-relaxed'>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white dark:bg-slate-950 py-24'>
        <div className='container'>
          <div className='max-w-4xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-3xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6'>
                Frequently Asked
                <span className='text-blue-600'> Questions</span>
              </h2>
              <p className='text-xl text-slate-600 dark:text-slate-400'>
                Everything you need to know about CalcVerse and our financial tools.
              </p>
            </div>
            <div className='space-y-6'>
              {[
                {
                  q: 'Are these calculators really free?',
                  a: 'Yes, all CalcVerse calculators are 100% free to use. We believe in providing accessible financial tools to help everyone make better money decisions.'
                },
                {
                  q: 'How accurate are the results?',
                  a: 'Our calculators use industry-standard mathematical formulas for financial calculations. While highly accurate for planning, they should be used as estimates. Always consult with a certified financial advisor for major life decisions.'
                },
                {
                  q: 'Is my financial data stored?',
                  a: 'No. Privacy is a core value at CalcVerse. All calculations happen locally in your browser. We do not store or see any of the numbers you enter into our tools.'
                },
                {
                  q: 'Can I use CalcVerse on my phone?',
                  a: 'Absolutely! CalcVerse is designed with a mobile-first approach. It works seamlessly on all smartphones, tablets, and desktop computers.'
                }
              ].map((faq, i) => (
                <div key={i} className='p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-blue-500/20 transition-colors'>
                  <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>
                    {faq.q}
                  </h3>
                  <p className='text-lg text-slate-600 dark:text-slate-400 leading-relaxed'>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
            <div className='text-center mt-12'>
              <a href='/contact' className='inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium'>
                Still have questions?
                <svg className='w-4 h-4 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
