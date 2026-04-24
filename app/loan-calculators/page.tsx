import CalculatorCard from '@/app/components/CalculatorCard'
import type { CalculatorCardType } from '@/app/types/calculator'

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

const LoanCalculatorsPage = () => {
  return (
    <main className='container py-20'>
      <section className='space-y-6'>
        <div>
          <p className='inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400'>
            Loan Tools
          </p>
          <h1 className='mt-6 text-5xl font-bold text-slate-900 dark:text-white tracking-tight'>
            Precision <span className="text-blue-600">Loan Planning</span>
          </h1>
          <p className='mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400'>
            Empower your borrowing decisions with our collection of professional loan calculators. Whether you're planning for a new car, a home, or a personal expense, CalcVerse provides the clarity you need to manage your debt effectively.
          </p>
        </div>
      </section>
      <section className='mt-14 grid gap-8 md:grid-cols-2'>
        {loanCalculators.map((calculator) => (
          <CalculatorCard key={calculator.name} calculator={calculator} />
        ))}
      </section>
    </main>
  )
}

export default LoanCalculatorsPage
