'use client'

import { useState } from 'react'
import CalculatorLayout from '@/app/components/CalculatorLayout'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import { calculateCompoundInterest, formatMoney, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'


const initialFields: CalculatorField[] = [
  {
    name: 'initialInvestment',
    label: 'Initial investment',
    placeholder: 'Enter starting balance',
    value: '',
  },
  {
    name: 'annualRate',
    label: 'Annual interest rate (%)',
    placeholder: 'Enter annual rate',
    value: '',
  },
  {
    name: 'years',
    label: 'Number of years',
    placeholder: 'Total investment period',
    value: '',
  },
  {
    name: 'monthlyContribution',
    label: 'Monthly contribution',
    placeholder: 'Enter amount added each month',
    value: '',
  },
]

const CompoundInterestPage = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Final amount', value: '$0.00' },
    { label: 'Total interest earned', value: '$0.00' },
  ])
  const [formError, setFormError] = useState('')

  const handleChange = (name: string, value: string) => {
    setFields((current) =>
      current.map((field) =>
        field.name === name ? { ...field, value } : field
      )
    )
    setFormError('')
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const initialInvestment = parseNumberInput(fields.find((field) => field.name === 'initialInvestment')?.value || '')
    const annualRate = parseNumberInput(fields.find((field) => field.name === 'annualRate')?.value || '')
    const years = parseNumberInput(fields.find((field) => field.name === 'years')?.value || '')
    const monthlyContribution = parseNumberInput(fields.find((field) => field.name === 'monthlyContribution')?.value || '')

    if (initialInvestment < 0 || annualRate < 0 || years <= 0 || monthlyContribution < 0) {
      setFormError('Please enter valid non-negative values and a positive investment period.')
      return
    }

    const result = calculateCompoundInterest(initialInvestment, annualRate, years, monthlyContribution)
    setResults([
      { label: 'Final amount', value: formatMoney(result.finalAmount) },
      { label: 'Total interest earned', value: formatMoney(result.totalInterest) },
    ])
  }

  return (
    <CalculatorLayout
      title='Compound Interest Calculator'
      description='See how your investment balance grows over time with regular contributions and compound interest.'>
      <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
        <div>
          <CalculatorForm
            fields={fields}
            onChange={handleChange}
            onSubmit={handleSubmit}
            buttonText='Calculate Value'
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
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-6 underline decoration-blue-500 underline-offset-8'>The Power of Compound Interest</h2>
            <p>
              Albert Einstein reportedly called compound interest the "eighth wonder of the world." Those who understand it, earn it; those who don't, pay it. Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods.
            </p>
            <p>
              At <strong>CalcVerse</strong>, our Compound Interest Calculator helps you visualize how small, consistent contributions can grow into a substantial nest egg over time. By reinvesting your earnings, your money starts to work for you, creating a snowball effect that accelerates wealth creation.
            </p>

            <div className='bg-purple-50 dark:bg-purple-900/20 p-8 rounded-3xl my-10 border border-purple-100 dark:border-purple-800'>
              <h3 className='text-2xl font-bold text-purple-900 dark:text-purple-300 mb-4'>The Compound Interest Formula</h3>
              <p className='text-purple-800 dark:text-purple-400'>
                For an initial investment without additional contributions, the formula is:
              </p>
              <div className='text-center py-6 bg-white dark:bg-slate-800 rounded-2xl my-4 text-2xl font-mono text-slate-900 dark:text-white shadow-sm'>
                A = P(1 + r/n)^(nt)
              </div>
              <ul className='space-y-2 mt-4'>
                <li><strong>A</strong> = Final Amount</li>
                <li><strong>P</strong> = Initial Principal</li>
                <li><strong>r</strong> = Annual Interest Rate (decimal)</li>
                <li><strong>n</strong> = Number of times interest compounds per year</li>
                <li><strong>t</strong> = Number of years</li>
              </ul>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Why Start Saving Early?</h3>
            <p>
              The most critical factor in compound interest isn't the interest rate or the amount of money—it's <strong>time</strong>. The longer your money has to compound, the more dramatic the results will be.
            </p>
            <div className='grid md:grid-cols-2 gap-6 my-8'>
              <div className='p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>The Early Starter</h4>
                <p>Starting at age 25 and saving $200/month for 10 years, then stopping, will often result in more money at retirement than someone who starts at 35 and saves $200/month for 30 years.</p>
              </div>
              <div className='p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>The Consistency Factor</h4>
                <p>Regular monthly contributions, even small ones, significantly increase the principal on which interest is calculated, further accelerating the compounding effect.</p>
              </div>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Example: The Snowball Effect</h3>
            <p>
              Imagine you start with <strong>$1,000</strong> and add <strong>$100</strong> every month at an <strong>8%</strong> annual return.
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>After 10 Years: You'll have ~$19,000</li>
              <li>After 20 Years: You'll have ~$60,000</li>
              <li>After 30 Years: You'll have ~$150,000</li>
            </ul>
            <p className='mt-4'>
              Notice how the growth between year 20 and 30 ($90,000) is much larger than the growth between year 0 and 10 ($18,000). That is the power of compounding in action!
            </p>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Tips for Maximizing Growth</h3>
            <ul className='list-decimal pl-6 space-y-4'>
              <li><strong>Automate Your Savings:</strong> Set up a direct transfer to your investment account so you never "forget" to contribute.</li>
              <li><strong>Reinvest Dividends:</strong> Instead of taking cash payouts, reinvest them to increase your compounding principal.</li>
              <li><strong>Minimize Fees:</strong> High management fees can eat away at your compounding returns over decades.</li>
              <li><strong>Increase Contributions:</strong> As your income grows, try to increase your monthly contribution by even a small percentage.</li>
            </ul>
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default CompoundInterestPage
