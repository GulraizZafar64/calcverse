'use client'

import { useState } from 'react'
import CalculatorLayout from '@/app/components/CalculatorLayout'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import FaqAccordion from '@/app/components/FaqAccordion'
import { calculateSimpleInterest, formatMoney, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'

const initialFields: CalculatorField[] = [
  {
    name: 'principal',
    label: 'Principal amount',
    placeholder: 'Enter loan or deposit amount',
    value: '',
  },
  {
    name: 'rate',
    label: 'Annual interest rate (%)',
    placeholder: 'Enter annual rate',
    value: '',
  },
  {
    name: 'years',
    label: 'Time period (years)',
    placeholder: 'Enter duration in years',
    value: '',
  },
]

const SimpleInterestPage = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Simple interest', value: '$0.00' },
    { label: 'Total amount', value: '$0.00' },
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
    const principal = parseNumberInput(fields.find((f) => f.name === 'principal')?.value || '')
    const rate = parseNumberInput(fields.find((f) => f.name === 'rate')?.value || '')
    const years = parseNumberInput(fields.find((f) => f.name === 'years')?.value || '')

    if (!principal || principal <= 0 || rate < 0 || !years || years <= 0) {
      setFormError('Please enter valid positive values for all fields.')
      return
    }

    const result = calculateSimpleInterest(principal, rate, years)
    setResults([
      { label: 'Simple interest', value: formatMoney(result.simpleInterest) },
      { label: 'Total amount', value: formatMoney(result.totalAmount) },
    ])
  }

  return (
    <CalculatorLayout
      title='Simple Interest Calculator'
      description='Quickly calculate the interest earned or owed on a principal amount using the straightforward simple interest formula.'
      author='CalcVerse Editorial Team'
      lastUpdated='April 2026'>
      <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
        <div>
          <CalculatorForm
            fields={fields}
            onChange={handleChange}
            onSubmit={handleSubmit}
            buttonText='Calculate Interest'
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
              What Is Simple Interest?
            </h2>
            <p>
              Simple interest is a method of calculating interest where the interest charge is always based on the original principal amount. Unlike compound interest, it does not earn interest on previously accumulated interest, making it straightforward and easy to predict.
            </p>
            <p>
              Simple interest is commonly used for short-term loans, auto loans, savings bonds, and some personal loans.
            </p>

            <div className='bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl my-10 border border-blue-100 dark:border-blue-800'>
              <h3 className='text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4'>The Simple Interest Formula</h3>
              <div className='text-center py-6 bg-white dark:bg-slate-800 rounded-2xl my-4 text-2xl font-mono text-slate-900 dark:text-white shadow-sm'>
                SI = P × R × T / 100
              </div>
              <ul className='space-y-2 mt-4'>
                <li><strong>P</strong> = Principal amount</li>
                <li><strong>R</strong> = Annual interest rate (%)</li>
                <li><strong>T</strong> = Time period in years</li>
              </ul>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Example Calculation</h3>
            <p>
              Suppose you deposit <strong>$5,000</strong> at an annual interest rate of <strong>6%</strong> for <strong>3 years</strong>.
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>SI = 5,000 × 6 × 3 / 100 = <strong>$900</strong></li>
              <li>Total Amount = 5,000 + 900 = <strong>$5,900</strong></li>
            </ul>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Simple Interest vs. Compound Interest</h3>
            <div className='grid md:grid-cols-2 gap-6 my-8'>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Simple Interest</h4>
                <p>Interest is calculated only on the original principal. Predictable and easy to compute — ideal for short-term borrowing.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Compound Interest</h4>
                <p>Interest accrues on both principal and accumulated interest. Grows faster over time — better for long-term investments.</p>
              </div>
            </div>

            <p className='mt-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border-l-4 border-blue-600 italic'>
              Pro Tip: Always check whether your loan uses simple or compound interest. For the same rate and period, compound interest results in a higher total cost.
            </p>

            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-20 mb-8'>Frequently Asked Questions</h2>
            <FaqAccordion 
              faqs={[
                {
                  q: "When is simple interest most commonly used?",
                  a: "Simple interest is typically used for short-term financial transactions, such as car loans, personal loans between friends or family, and certain types of savings bonds or certificates of deposit (CDs)."
                },
                {
                  q: "How do I calculate simple interest for a period of months?",
                  a: "Since the interest rate is usually annual, you must convert the months into years by dividing by 12. For example, for 6 months, you would use T = 0.5 in the formula."
                },
                {
                  q: "Is simple interest better for a borrower?",
                  a: "Yes, generally. Because simple interest only calculates interest on the principal, the total amount owed will be less than a compound interest loan at the same rate and over the same period."
                },
                {
                  q: "What is the 'Principal' in simple interest?",
                  a: "The principal is the original amount of money borrowed or invested. It remains the baseline for all interest calculations throughout the life of the simple interest arrangement, regardless of how much interest has accrued."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default SimpleInterestPage
