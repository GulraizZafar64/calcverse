'use client'

import { useState } from 'react'
import CalculatorLayout from '@/app/components/CalculatorLayout'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import FaqAccordion from '@/app/components/FaqAccordion'
import { calculateAge } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'

const initialFields: CalculatorField[] = [
  {
    name: 'birthDate',
    label: 'Date of Birth',
    placeholder: '',
    value: '',
    type: 'date',
  },
]

const AgeCalculatorPage = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Years', value: '0' },
    { label: 'Months', value: '0' },
    { label: 'Days', value: '0' },
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
    const birthDate = fields.find((f) => f.name === 'birthDate')?.value || ''

    if (!birthDate) {
      setFormError('Please select a valid birth date.')
      return
    }

    const birth = new Date(birthDate)
    const today = new Date()
    if (birth > today) {
      setFormError('Birth date cannot be in the future.')
      return
    }

    const result = calculateAge(birthDate)
    setResults([
      { label: 'Years', value: result.years.toString() },
      { label: 'Months', value: result.months.toString() },
      { label: 'Days', value: result.days.toString() },
    ])
  }

  return (
    <CalculatorLayout
      title='Age Calculator'
      description='Calculate your exact age in years, months, and days. Perfect for filling out forms or just knowing your exact age!'
      author='CalcVerse Tools Team'
      lastUpdated='April 2026'>
      <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
        <div>
          <CalculatorForm
            fields={fields}
            onChange={handleChange}
            onSubmit={handleSubmit}
            buttonText='Calculate Age'
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
              How Age is Calculated
            </h2>
            <p>
              This calculator determines your age based on the Gregorian calendar. It accounts for the varying number of days in months and leap years to provide a precise breakdown of your age in years, months, and days.
            </p>

            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-20 mb-8'>Frequently Asked Questions</h2>
            <FaqAccordion 
              faqs={[
                {
                  q: "Does this account for leap years?",
                  a: "Yes, our age calculator fully accounts for leap years by using standard JavaScript Date functions which follow the Gregorian calendar."
                },
                {
                  q: "What is the 'chronological age'?",
                  a: "Chronological age is the amount of time that has passed from your birth to a given date. It is the primary way we measure age in most societies."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default AgeCalculatorPage
