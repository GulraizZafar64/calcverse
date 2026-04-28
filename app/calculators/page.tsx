'use client'

import CalculatorCard from '@/app/components/CalculatorCard'
import type { CalculatorCardType } from '@/app/types/calculator'
import FaqAccordion from '@/app/components/FaqAccordion'
import Link from 'next/link'

const allCalculators: CalculatorCardType[] = [
  // Loans
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
  // Investments
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
  // Salary
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
  // Health & Lifestyle
  {
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index (BMI) and understand your health category.',
    href: '/bmi-calculator',
    category: 'health',
  },
  {
    name: 'Tip Calculator',
    description: 'Easily calculate tips and split bills among friends for dining and services.',
    href: '/tip-calculator',
    category: 'lifestyle',
  },
  {
    name: 'Age Calculator',
    description: 'Find your exact age in years, months, and days from your birth date.',
    href: '/age-calculator',
    category: 'tools',
  },
  // Math
  {
    name: 'Percentage Calculator',
    description: 'Quickly calculate percentages, discounts, and ratio increases instantly.',
    href: '/percentage-calculator',
    category: 'math',
  },
]

const generalFaqs = [
  {
    q: 'How accurate are these calculators?',
    a: 'We use industry-standard formulas for all our tools. However, results should be used for informational purposes only. Consult with a professional for major financial or medical decisions.',
  },
  {
    q: 'Is my data stored anywhere?',
    a: 'No. All calculations are performed directly in your browser. We never transmit or store your inputs on any server.',
  },
  {
    q: 'Are these tools really free?',
    a: 'Yes, 100% free. No subscriptions, no sign-ups, and no hidden fees.',
  },
]

const AllCalculatorsPage = () => {
  return (
    <main className='relative overflow-hidden'>
      {/* Dynamic Background */}
      <div className='absolute top-0 -left-4 w-[500px] h-[500px] bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-blue-600/10' />
      <div className='absolute bottom-0 -right-4 w-[500px] h-[500px] bg-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:bg-purple-600/10' />

      <section className='container pt-32 pb-16 relative z-10'>
        <div className='text-center max-w-3xl mx-auto'>
          <p className='inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400 mb-6'>
            The Full Suite
          </p>
          <h1 className='text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight'>
            All Your <span className="text-blue-600">Calculators</span> <br />
            In One Place.
          </h1>
          <p className='mt-8 text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed'>
            From financial planning to health tracking, CalcVerse offers a comprehensive set of tools to help you navigate life's numbers with confidence and precision.
          </p>
        </div>
      </section>

      {/* Categories Navigation (Quick jump) */}
      <div className='sticky top-20 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-y border-slate-100 dark:border-slate-800 hidden md:block'>
        <div className='container py-4'>
           <div className='flex justify-center gap-8'>
              {['Loan', 'Investment', 'Salary', 'Health', 'Math'].map((cat) => (
                <button 
                  key={cat}
                  className='text-sm font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors'
                  onClick={() => {
                    const el = document.getElementById(cat.toLowerCase());
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                >
                  {cat}s
                </button>
              ))}
           </div>
        </div>
      </div>

      {/* Calculators Sections */}
      <section className='container py-20 space-y-32'>
        {/* Loans */}
        <div id='loan'>
            <div className='flex items-center gap-4 mb-10'>
                <h2 className='text-3xl font-bold text-slate-900 dark:text-white'>Loan Calculators</h2>
                <div className='h-px flex-1 bg-slate-100 dark:bg-slate-800' />
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {allCalculators.filter(c => c.category === 'loan').map(c => <CalculatorCard key={c.name} calculator={c} />)}
            </div>
        </div>

        {/* Investment */}
        <div id='investment'>
            <div className='flex items-center gap-4 mb-10'>
                <h2 className='text-3xl font-bold text-slate-900 dark:text-white'>Investment & Growth</h2>
                <div className='h-px flex-1 bg-slate-100 dark:bg-slate-800' />
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {allCalculators.filter(c => c.category === 'investment').map(c => <CalculatorCard key={c.name} calculator={c} />)}
            </div>
        </div>

        {/* Salary */}
        <div id='salary'>
            <div className='flex items-center gap-4 mb-10'>
                <h2 className='text-3xl font-bold text-slate-900 dark:text-white'>Salary & Income</h2>
                <div className='h-px flex-1 bg-slate-100 dark:bg-slate-800' />
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {allCalculators.filter(c => c.category === 'salary').map(c => <CalculatorCard key={c.name} calculator={c} />)}
            </div>
        </div>

        {/* Health */}
        <div id='health'>
            <div className='flex items-center gap-4 mb-10'>
                <h2 className='text-3xl font-bold text-slate-900 dark:text-white'>Health & Lifestyle</h2>
                <div className='h-px flex-1 bg-slate-100 dark:bg-slate-800' />
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {allCalculators.filter(c => ['health', 'lifestyle', 'tools'].includes(c.category)).map(c => <CalculatorCard key={c.name} calculator={c} />)}
            </div>
        </div>

        {/* Math */}
        <div id='math'>
            <div className='flex items-center gap-4 mb-10'>
                <h2 className='text-3xl font-bold text-slate-900 dark:text-white'>Math Utilities</h2>
                <div className='h-px flex-1 bg-slate-100 dark:bg-slate-800' />
            </div>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                {allCalculators.filter(c => c.category === 'math').map(c => <CalculatorCard key={c.name} calculator={c} />)}
            </div>
        </div>
      </section>

      {/* Universal Features */}
      <section className='bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-100 dark:border-slate-800'>
        <div className='container text-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-16'>Built with Precision & Privacy</h2>
            <div className='grid md:grid-cols-3 gap-12'>
                <div className='space-y-4'>
                    <div className='text-4xl'>🛡️</div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white'>100% Private</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Your numbers are yours alone. No data ever leaves your browser.</p>
                </div>
                <div className='space-y-4'>
                    <div className='text-4xl'>📊</div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white'>Standardized Math</h3>
                    <p className='text-slate-600 dark:text-slate-400'>We use industry-standard formulas to ensure maximum accuracy.</p>
                </div>
                <div className='space-y-4'>
                    <div className='text-4xl'>📱</div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white'>Cross-Device</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Access professional-grade tools from your phone, tablet, or desktop.</p>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='container py-20'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center'>General Questions</h2>
          <FaqAccordion faqs={generalFaqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className='container pb-20'>
        <div className='bg-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32' />
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>Missing a tool?</h2>
            <p className='text-blue-100 text-lg mb-10 max-w-xl mx-auto'>
                We are constantly adding new calculators. If there's something you'd like to see, let us know!
            </p>
            <Link href='/contact' className='inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-600 hover:bg-blue-50 transition-all'>
                Suggest a Calculator
            </Link>
        </div>
      </section>
    </main>
  )
}

export default AllCalculatorsPage
