'use client'

import { useState } from 'react'
import CalculatorLayout from '@/app/components/CalculatorLayout'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import FaqAccordion from '@/app/components/FaqAccordion'
import { calculateInflation, formatMoney, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'

const initialFields: CalculatorField[] = [
  {
    name: 'presentValue',
    label: 'Present value',
    placeholder: 'Current amount or price',
    value: '',
  },
  {
    name: 'annualRate',
    label: 'Annual inflation rate (%)',
    placeholder: 'Expected inflation rate',
    value: '',
  },
  {
    name: 'years',
    label: 'Time period (years)',
    placeholder: 'Number of years ahead',
    value: '',
  },
]

const InflationCalculatorPage = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Future equivalent value', value: '$0.00' },
    { label: 'Purchasing power lost', value: '$0.00' },
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
    const presentValue = parseNumberInput(fields.find((f) => f.name === 'presentValue')?.value || '')
    const annualRate = parseNumberInput(fields.find((f) => f.name === 'annualRate')?.value || '')
    const years = parseNumberInput(fields.find((f) => f.name === 'years')?.value || '')

    if (!presentValue || presentValue <= 0 || annualRate < 0 || !years || years <= 0) {
      setFormError('Please enter valid positive values for all fields.')
      return
    }

    const result = calculateInflation(presentValue, annualRate, years)
    setResults([
      { label: 'Future equivalent value', value: formatMoney(result.futureValue) },
      { label: 'Purchasing power lost', value: formatMoney(result.purchasingPowerLoss) },
    ])
  }

  return (
    <CalculatorLayout
      title='Inflation Calculator'
      description="See how inflation erodes the purchasing power of money over time, and how much today&apos;s dollars will be worth in the future."
      author='CalcVerse Editorial Team'
      lastUpdated='April 2026'>
      <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
        <div>
          <CalculatorForm
            fields={fields}
            onChange={handleChange}
            onSubmit={handleSubmit}
            buttonText='Calculate Inflation Impact'
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
              Understanding Inflation and Purchasing Power
            </h2>
            <p>
              Inflation is the rate at which the general level of prices for goods and services rises over time, which in turn decreases the purchasing power of money. Even a modest annual inflation rate of 3% can significantly erode savings if not accounted for in financial planning.
            </p>

            <div className='bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl my-10 border border-blue-100 dark:border-blue-800'>
              <h3 className='text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4'>The Inflation Formula</h3>
              <div className='text-center py-6 bg-white dark:bg-slate-800 rounded-2xl my-4 text-2xl font-mono text-slate-900 dark:text-white shadow-sm'>
                Future Value = PV × (1 + r)^n
              </div>
              <ul className='space-y-2 mt-4'>
                <li><strong>PV</strong> = Present value (today&apos;s amount)</li>
                <li><strong>r</strong> = Annual inflation rate (as a decimal)</li>
                <li><strong>n</strong> = Number of years</li>
              </ul>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Real-World Example</h3>
            <p>
              If a basket of groceries costs <strong>$200 today</strong> and inflation averages <strong>4% per year</strong>, in <strong>10 years</strong> the same basket will cost approximately <strong>$296</strong>. That means you need $96 more just to buy the same things.
            </p>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>How to Protect Against Inflation</h3>
            <div className='grid md:grid-cols-2 gap-6 my-8'>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Invest in Equities</h4>
                <p>Historically, stock market returns have outpaced inflation over the long term, preserving and growing purchasing power.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Treasury Inflation-Protected Securities (TIPS)</h4>
                <p>Government bonds that automatically adjust their principal in line with inflation, offering built-in protection.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Real Estate</h4>
                <p>Property values and rental income tend to rise with or above inflation, making real estate a solid inflation hedge.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>I-Bonds</h4>
                <p>US savings bonds with yields tied to inflation. Low-risk and tax-advantaged for conservative savers.</p>
              </div>
            </div>

            <p className='mt-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border-l-4 border-blue-600 italic'>
              Pro Tip: Always calculate your investment returns in "real" (inflation-adjusted) terms. A 6% nominal return during 4% inflation is only a 2% real gain.
            </p>

            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-20 mb-8'>Frequently Asked Questions</h2>
            <FaqAccordion 
              faqs={[
                {
                  q: "What is the Consumer Price Index (CPI)?",
                  a: "The Consumer Price Index is the most common measure of inflation. It tracks the average change over time in the prices paid by urban consumers for a 'market basket' of consumer goods and services."
                },
                {
                  q: "Why is a little bit of inflation considered good?",
                  a: "Central banks (like the Federal Reserve) usually target 2% inflation because it encourages people to spend and invest money rather than hoarding it. This circulation of money keeps the economy growing."
                },
                {
                  q: "What is hyperinflation?",
                  a: "Hyperinflation is extremely rapid or out-of-control inflation, usually defined as prices rising by more than 50% per month. It typically happens during major political instability or excessive money printing."
                },
                {
                  q: "Does inflation affect debt?",
                  a: "Inflation can actually be good for borrowers with fixed-rate debt. As prices and wages rise, the 'real' value of the money you owe decreases, making it easier to pay back with future, less valuable dollars."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default InflationCalculatorPage
