'use client'

import { useState } from 'react'
import CalculatorLayout from '@/app/components/CalculatorLayout'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import FaqAccordion from '@/app/components/FaqAccordion'
import { calculatePercentage, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'

const initialFields: CalculatorField[] = [
  {
    name: 'value',
    label: 'Value',
    placeholder: 'Enter the part value',
    value: '',
    type: 'number',
  },
  {
    name: 'total',
    label: 'Total Value',
    placeholder: 'Enter the total value',
    value: '',
    type: 'number',
  },
]

const PercentageCalculatorPage = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Percentage', value: '0%' },
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
    const value = parseNumberInput(fields.find((f) => f.name === 'value')?.value || '')
    const total = parseNumberInput(fields.find((f) => f.name === 'total')?.value || '')

    if (total === 0) {
      setFormError('Total value cannot be zero.')
      return
    }

    const result = calculatePercentage(value, total)
    setResults([
      { label: 'Percentage', value: `${result.percentage}%` },
    ])
  }

  return (
    <CalculatorLayout
      title='Percentage Calculator'
      description='Quickly find out what percentage one number is of another. Useful for calculating discounts, sales tax, and performance metrics.'
      author='CalcVerse Math Team'
      lastUpdated='April 2026'>
      <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
        <div>
          <CalculatorForm
            fields={fields}
            onChange={handleChange}
            onSubmit={handleSubmit}
            buttonText='Calculate Percentage'
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
              How to Calculate Percentage
            </h2>
            <p>
              To find what percentage one number (X) is of another number (Y), you simply divide X by Y and then multiply the result by 100.
            </p>
            <div className='bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl my-10 border border-blue-100 dark:border-blue-800'>
              <h3 className='text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4'>The Formula</h3>
              <div className='text-center py-6 bg-white dark:bg-slate-800 rounded-2xl my-4 text-2xl font-mono text-slate-900 dark:text-white shadow-sm'>
                Percentage = (Value / Total) × 100
              </div>
            </div>

            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-20 mb-8'>Frequently Asked Questions</h2>
            <FaqAccordion 
              faqs={[
                {
                  q: "Can a percentage be greater than 100?",
                  a: "Yes! If the 'Value' is larger than the 'Total', the result will be greater than 100%. This is common in growth metrics or price increases."
                },
                {
                  q: "What is 0% of a number?",
                  a: "Zero percent of any number is always zero."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default PercentageCalculatorPage
