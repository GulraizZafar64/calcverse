import CalculatorCard from '@/app/components/CalculatorCard'
import type { CalculatorCardType } from '@/app/types/calculator'

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
]

const InvestmentCalculatorsPage = () => {
  return (
    <main className='container py-20'>
      <section className='space-y-6'>
        <div>
          <p className='inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400'>
            Growth Tools
          </p>
          <h1 className='mt-6 text-5xl font-bold text-slate-900 dark:text-white tracking-tight'>
            Wealth <span className="text-blue-600">Projection & Growth</span>
          </h1>
          <p className='mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400'>
            Harness the power of compounding with our professional investment tools. At CalcVerse, we provide the calculators you need to visualize your financial independence and build a secure future.
          </p>
        </div>
      </section>
      <section className='mt-14 grid gap-8 md:grid-cols-2'>
        {investmentCalculators.map((calculator) => (
          <CalculatorCard key={calculator.name} calculator={calculator} />
        ))}
      </section>
    </main>
  )
}

export default InvestmentCalculatorsPage
