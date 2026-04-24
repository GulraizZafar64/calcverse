'use client'

import { useState } from 'react'
import CalculatorLayout from '@/app/components/CalculatorLayout'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import FaqAccordion from '@/app/components/FaqAccordion'
import { calculateRetirementSavings, formatMoney, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'

const initialFields: CalculatorField[] = [
  {
    name: 'currentAge',
    label: 'Current age',
    placeholder: 'Enter your current age',
    value: '',
  },
  {
    name: 'retirementAge',
    label: 'Retirement age',
    placeholder: 'Age you plan to retire',
    value: '',
  },
  {
    name: 'currentSavings',
    label: 'Current retirement savings',
    placeholder: 'Amount already saved',
    value: '',
  },
  {
    name: 'monthlyContribution',
    label: 'Monthly contribution',
    placeholder: 'Amount added each month',
    value: '',
  },
  {
    name: 'annualRate',
    label: 'Expected annual return (%)',
    placeholder: 'Average investment return',
    value: '',
  },
]

const RetirementSavingsPage = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Projected retirement balance', value: '$0.00' },
    { label: 'Total contributions', value: '$0.00' },
    { label: 'Total investment growth', value: '$0.00' },
  ])
  const [formError, setFormError] = useState('')

  const handleChange = (name: string, value: string) => {
    setFields((current) =>
      current.map((field) => (field.name === name ? { ...field, value } : field))
    )
    setFormError('')
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const currentAge = parseNumberInput(fields.find((f) => f.name === 'currentAge')?.value || '')
    const retirementAge = parseNumberInput(fields.find((f) => f.name === 'retirementAge')?.value || '')
    const currentSavings = parseNumberInput(fields.find((f) => f.name === 'currentSavings')?.value || '')
    const monthlyContribution = parseNumberInput(fields.find((f) => f.name === 'monthlyContribution')?.value || '')
    const annualRate = parseNumberInput(fields.find((f) => f.name === 'annualRate')?.value || '')

    if (currentAge <= 0 || retirementAge <= currentAge || currentSavings < 0 || monthlyContribution < 0 || annualRate < 0) {
      setFormError('Please enter valid values. Retirement age must be greater than current age.')
      return
    }

    const result = calculateRetirementSavings(currentAge, retirementAge, currentSavings, monthlyContribution, annualRate)
    setResults([
      { label: 'Projected retirement balance', value: formatMoney(result.futureValue) },
      { label: 'Total contributions', value: formatMoney(result.totalContributions) },
      { label: 'Total investment growth', value: formatMoney(result.totalGrowth) },
    ])
  }

  return (
    <CalculatorLayout
      title='Retirement Savings Calculator'
      description='Project your retirement nest egg based on your current savings, monthly contributions, and expected investment returns.'
      author='CalcVerse Editorial Team'
      lastUpdated='April 2026'>
      <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
        <div>
          <CalculatorForm
            fields={fields}
            onChange={handleChange}
            onSubmit={handleSubmit}
            buttonText='Calculate Retirement Savings'
            disabled={false}
          />
          {formError && (
            <p className='mt-4 rounded-2xl bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950/70 dark:text-red-300'>
              {formError}
            </p>
          )}
        </div>
        <ResultCard results={results} />
      </div>

      <section className='mt-20 border-t border-slate-100 dark:border-slate-800 pt-16'>
        <div className='max-w-4xl mx-auto'>
          <div className='prose prose-lg max-w-none text-slate-600 dark:text-slate-400 dark:prose-invert'>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-6 underline decoration-blue-500 underline-offset-8'>
              Planning for a Secure Retirement
            </h2>
            <p>
              Retirement planning is one of the most important financial steps you can take. The earlier you start, the more time compound interest has to multiply your savings. Even small monthly contributions made consistently over decades can grow into a substantial nest egg.
            </p>

            <div className='bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl my-10 border border-blue-100 dark:border-blue-800'>
              <h3 className='text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4'>The Power of Starting Early</h3>
              <p className='text-blue-800 dark:text-blue-400'>
                Consider two investors: Alex starts at 25 contributing $200/month, while Jordan starts at 35. Assuming a 7% annual return, by age 65:
              </p>
              <ul className='space-y-2 mt-4'>
                <li><strong>Alex (40 years):</strong> Approximately $525,000</li>
                <li><strong>Jordan (30 years):</strong> Approximately $243,000</li>
              </ul>
              <p className='mt-4 text-blue-800 dark:text-blue-400'>Starting just 10 years earlier more than doubles the final balance.</p>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Retirement Planning Strategies</h3>
            <div className='grid md:grid-cols-2 gap-6 my-8'>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Maximize Tax-Advantaged Accounts</h4>
                <p>Contribute the maximum to 401(k), IRA, or Roth IRA accounts to benefit from tax savings and employer matching.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Diversify Your Investments</h4>
                <p>Spread investments across stocks, bonds, and real estate to balance growth and risk as you approach retirement.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Increase Contributions Over Time</h4>
                <p>Each time you receive a raise, increase your retirement contribution percentage to accelerate growth.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Plan Your Withdrawal Rate</h4>
                <p>The 4% rule suggests withdrawing 4% of your balance per year in retirement to make your savings last 30+ years.</p>
              </div>
            </div>

            <p className='mt-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border-l-4 border-blue-600 italic'>
              Pro Tip: Aim to save at least 15% of your pre-tax income for retirement. If you&apos;re starting late, consider saving 20–25% to catch up.
            </p>

            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-20 mb-8'>Frequently Asked Questions</h2>
            <FaqAccordion 
              faqs={[
                {
                  q: "What is the '4% Rule'?",
                  a: "The 4% rule is a common guideline for retirement withdrawals. It suggests that you can safely withdraw 4% of your total savings in the first year of retirement, and then adjust that amount for inflation each year, with a high probability of your money lasting 30 years."
                },
                {
                  q: "Should I choose a Roth or Traditional IRA/401(k)?",
                  a: "A Traditional plan gives you a tax break today (contributions are pre-tax), but you pay taxes when you withdraw. A Roth plan uses after-tax dollars today, but your withdrawals in retirement are completely tax-free. Generally, Roth is better if you expect to be in a higher tax bracket in the future."
                },
                {
                  q: "What is an 'Employer Match'?",
                  a: "Many employers offer to match your 401(k) contributions up to a certain percentage (e.g., matching 50% of your contributions up to 6% of your salary). This is essentially 'free money' and should be your first priority in retirement saving."
                },
                {
                  q: "How does inflation affect my retirement savings?",
                  a: "Inflation reduces the purchasing power of your money over time. While $1 million sounds like a lot today, in 30 years it may only buy half as much. It's important to use an 'inflation-adjusted' return or target a higher final balance to account for rising prices."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default RetirementSavingsPage
