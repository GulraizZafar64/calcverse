import CalculatorCard from '@/app/components/CalculatorCard'
import type { CalculatorCardType } from '@/app/types/calculator'

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

const SalaryCalculatorsPage = () => {
  return (
    <main className='container py-20'>
      <section className='space-y-6'>
        <div>
          <p className='inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400'>
            Income Tools
          </p>
          <h1 className='mt-6 text-5xl font-bold text-slate-900 dark:text-white tracking-tight'>
            Net Salary <span className="text-blue-600">& Budget Planning</span>
          </h1>
          <p className='mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400'>
            Understanding your take-home pay is the foundation of any solid financial plan. At CalcVerse, our salary tools help you peel back the layers of gross income to see exactly what you have available for your life and goals.
          </p>
        </div>
      </section>
      <section className='mt-14 grid gap-8 md:grid-cols-2'>
        {salaryCalculators.map((calculator) => (
          <CalculatorCard key={calculator.name} calculator={calculator} />
        ))}
      </section>
    </main>
  )
}

export default SalaryCalculatorsPage
