'use client'

import { useState } from 'react'
import CalculatorLayout from '@/app/components/CalculatorLayout'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import FaqAccordion from '@/app/components/FaqAccordion'
import { calculateHourlyToSalary, formatMoney, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'

const initialFields: CalculatorField[] = [
  {
    name: 'hourlyRate',
    label: 'Hourly rate',
    placeholder: 'Enter hourly pay rate',
    value: '',
  },
  {
    name: 'hoursPerWeek',
    label: 'Hours per week',
    placeholder: 'Number of hours worked weekly',
    value: '',
  },
]

const HourlyToSalaryPage = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Weekly pay', value: '$0.00' },
    { label: 'Monthly pay', value: '$0.00' },
    { label: 'Annual salary', value: '$0.00' },
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
    const hourlyRate = parseNumberInput(fields.find((f) => f.name === 'hourlyRate')?.value || '')
    const hoursPerWeek = parseNumberInput(fields.find((f) => f.name === 'hoursPerWeek')?.value || '')

    if (!hourlyRate || hourlyRate <= 0 || !hoursPerWeek || hoursPerWeek <= 0 || hoursPerWeek > 168) {
      setFormError('Please enter a valid hourly rate and hours per week (1–168).')
      return
    }

    const result = calculateHourlyToSalary(hourlyRate, hoursPerWeek)
    setResults([
      { label: 'Weekly pay', value: formatMoney(result.weeklyPay) },
      { label: 'Monthly pay', value: formatMoney(result.monthlyPay) },
      { label: 'Annual salary', value: formatMoney(result.annualPay) },
    ])
  }

  return (
    <CalculatorLayout
      title='Hourly to Annual Salary Calculator'
      description='Convert your hourly wage into weekly, monthly, and annual salary figures instantly.'
      author='CalcVerse Editorial Team'
      lastUpdated='April 2026'>
      <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
        <div>
          <CalculatorForm
            fields={fields}
            onChange={handleChange}
            onSubmit={handleSubmit}
            buttonText='Calculate Salary'
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
              Converting Hourly Wage to Annual Salary
            </h2>
            <p>
              Whether you are a freelancer, contractor, or hourly employee, understanding how your hourly rate translates into an annual salary helps you compare job offers, negotiate pay, and plan your budget. CalcVerse&apos;s Hourly to Annual Salary Calculator makes the conversion instant and accurate.
            </p>

            <div className='bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl my-10 border border-blue-100 dark:border-blue-800'>
              <h3 className='text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4'>The Calculation</h3>
              <ul className='space-y-3'>
                <li><strong>Weekly Pay</strong> = Hourly Rate × Hours per Week</li>
                <li><strong>Monthly Pay</strong> = Weekly Pay × (52 ÷ 12)</li>
                <li><strong>Annual Salary</strong> = Weekly Pay × 52</li>
              </ul>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Quick Reference: Common Hourly Rates</h3>
            <div className='overflow-x-auto my-8'>
              <table className='w-full text-left border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden'>
                <thead className='bg-slate-50 dark:bg-slate-800'>
                  <tr>
                    <th className='px-4 py-3 font-semibold text-slate-900 dark:text-white'>Hourly Rate</th>
                    <th className='px-4 py-3 font-semibold text-slate-900 dark:text-white'>Weekly (40h)</th>
                    <th className='px-4 py-3 font-semibold text-slate-900 dark:text-white'>Monthly</th>
                    <th className='px-4 py-3 font-semibold text-slate-900 dark:text-white'>Annual</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-slate-100 dark:divide-slate-700'>
                  {[15, 20, 25, 30, 40, 50, 75, 100].map((rate) => (
                    <tr key={rate} className='hover:bg-slate-50 dark:hover:bg-slate-800/50'>
                      <td className='px-4 py-3'>${rate}/hr</td>
                      <td className='px-4 py-3'>${(rate * 40).toLocaleString()}</td>
                      <td className='px-4 py-3'>${Math.round(rate * 40 * 52 / 12).toLocaleString()}</td>
                      <td className='px-4 py-3'>${(rate * 40 * 52).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>What About Overtime?</h3>
            <p>
              If you regularly work overtime (more than 40 hours per week in the US), your actual annual earnings may be higher. Federal law requires non-exempt employees to be paid 1.5× their regular rate for hours over 40 per week. Freelancers and contractors should also factor in unpaid downtime between projects when estimating effective annual income.
            </p>

            <p className='mt-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border-l-4 border-blue-600 italic'>
              Pro Tip: When comparing a salaried job offer to an hourly rate, divide the annual salary by 2,080 (52 weeks × 40 hours) to get the equivalent hourly rate.
            </p>

            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-20 mb-8'>Frequently Asked Questions</h2>
            <FaqAccordion 
              faqs={[
                {
                  q: "How many working hours are in a year?",
                  a: "A standard full-time work year consists of 2,080 hours. This is calculated by multiplying 40 hours per week by 52 weeks in a year. Some years have 2,088 or 2,096 hours depending on how the weekends fall."
                },
                {
                  q: "Is this annual salary before or after taxes?",
                  a: "The calculations provided by this tool are 'gross' figures, meaning they are before any federal, state, or local income taxes, Social Security, or Medicare deductions are taken out."
                },
                {
                  q: "How do I factor in paid time off (PTO)?",
                  a: "If your employer provides paid vacation and holidays, your annual salary remains the same. If you are a freelancer without PTO, you should subtract the weeks you plan to take off from the 52-week multiplier to get a more accurate annual estimate."
                },
                {
                  q: "How can I calculate my daily pay rate?",
                  a: "To find your daily pay, simply multiply your hourly rate by the number of hours you work per day. For example, $25/hr × 8 hours = $200 per day."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default HourlyToSalaryPage
