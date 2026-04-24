'use client'

import { useState } from 'react'
import CalculatorLayout from '@/app/components/CalculatorLayout'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import FaqAccordion from '@/app/components/FaqAccordion'
import { calculateROI, formatMoney, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'

const initialFields: CalculatorField[] = [
  {
    name: 'initialInvestment',
    label: 'Initial investment',
    placeholder: 'Amount invested',
    value: '',
  },
  {
    name: 'finalValue',
    label: 'Final value',
    placeholder: 'Value after investment period',
    value: '',
  },
]

const ROICalculatorPage = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Net profit / loss', value: '$0.00' },
    { label: 'Return on investment (ROI)', value: '0.00%' },
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
    const initialInvestment = parseNumberInput(fields.find((f) => f.name === 'initialInvestment')?.value || '')
    const finalValue = parseNumberInput(fields.find((f) => f.name === 'finalValue')?.value || '')

    if (initialInvestment <= 0) {
      setFormError('Initial investment must be a positive number.')
      return
    }
    if (finalValue < 0) {
      setFormError('Final value cannot be negative.')
      return
    }

    const result = calculateROI(initialInvestment, finalValue)
    setResults([
      { label: 'Net profit / loss', value: formatMoney(result.netProfit) },
      { label: 'Return on investment (ROI)', value: `${result.roiPercent}%` },
    ])
  }

  return (
    <CalculatorLayout
      title='ROI Calculator'
      description='Measure the return on any investment by calculating your net profit and ROI percentage instantly.'
      author='CalcVerse Editorial Team'
      lastUpdated='April 2026'>
      <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
        <div>
          <CalculatorForm
            fields={fields}
            onChange={handleChange}
            onSubmit={handleSubmit}
            buttonText='Calculate ROI'
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
              What Is Return on Investment (ROI)?
            </h2>
            <p>
              Return on Investment (ROI) is a performance metric used to evaluate the efficiency or profitability of an investment. It compares the gain or loss from an investment relative to its cost, expressed as a percentage.
            </p>
            <p>
              ROI is one of the most widely used financial metrics because it is simple, versatile, and works for evaluating stocks, real estate, business ventures, and even marketing campaigns.
            </p>

            <div className='bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl my-10 border border-blue-100 dark:border-blue-800'>
              <h3 className='text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4'>The ROI Formula</h3>
              <div className='text-center py-6 bg-white dark:bg-slate-800 rounded-2xl my-4 text-2xl font-mono text-slate-900 dark:text-white shadow-sm'>
                ROI = (Net Profit / Cost of Investment) × 100
              </div>
              <p className='text-blue-800 dark:text-blue-400'>Where Net Profit = Final Value − Initial Investment</p>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Interpreting Your ROI</h3>
            <div className='grid md:grid-cols-3 gap-6 my-8'>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl text-center'>
                <h4 className='font-bold text-green-600 dark:text-green-400 text-xl mb-2'>Positive ROI</h4>
                <p>The investment generated more value than it cost — a profitable outcome.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl text-center'>
                <h4 className='font-bold text-slate-500 text-xl mb-2'>Zero ROI</h4>
                <p>The investment returned exactly what was put in — break-even with no profit or loss.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl text-center'>
                <h4 className='font-bold text-red-600 dark:text-red-400 text-xl mb-2'>Negative ROI</h4>
                <p>The investment lost value — you recovered less than the original cost.</p>
              </div>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Limitations of ROI</h3>
            <p>
              While ROI is a powerful tool, it has limitations: it does not account for the time value of money or the duration of the investment. For comparing investments of different lengths, consider using the annualized ROI or metrics like NPV (Net Present Value) or IRR (Internal Rate of Return).
            </p>

            <p className='mt-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border-l-4 border-blue-600 italic'>
              Pro Tip: Compare ROI across different investments over the same time period to make meaningful apples-to-apples comparisons.
            </p>

            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-20 mb-8'>Frequently Asked Questions</h2>
            <FaqAccordion 
              faqs={[
                {
                  q: "What is considered a 'good' ROI?",
                  a: "A 'good' ROI depends on the asset class and your risk tolerance. For example, 7-10% is often considered good for the stock market, while a business venture might require 20% or more to justify the risk."
                },
                {
                  q: "How does ROI differ from profit?",
                  a: "Profit is an absolute dollar amount (e.g., $500), while ROI is a relative percentage (e.g., 50%). Profit tells you how much you made, but ROI tells you how efficiently you used your capital to make that money."
                },
                {
                  q: "Does the basic ROI formula account for time?",
                  a: "No. A 50% ROI over 1 year is much better than a 50% ROI over 10 years. To account for time, you should calculate the 'Annualized ROI' which shows the geometric mean return per year."
                },
                {
                  q: "What should I include in 'Initial Investment'?",
                  a: "You should include all costs associated with the investment, including the purchase price, taxes, commissions, maintenance costs, and any other fees incurred to acquire or hold the asset."
                }
              ]}
+            />
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default ROICalculatorPage
