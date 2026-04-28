'use client'

import { useState } from 'react'
import CalculatorLayout from '@/app/components/CalculatorLayout'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import FaqAccordion from '@/app/components/FaqAccordion'
import { calculateTip, formatMoney, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'

const initialFields: CalculatorField[] = [
  {
    name: 'billAmount',
    label: 'Bill Amount',
    placeholder: 'Enter total bill amount',
    value: '',
    type: 'number',
  },
  {
    name: 'tipPercentage',
    label: 'Tip Percentage (%)',
    placeholder: 'Enter tip percentage',
    value: '15',
    type: 'number',
  },
  {
    name: 'numberOfPeople',
    label: 'Number of People',
    placeholder: 'Split among how many people?',
    value: '1',
    type: 'number',
  },
]

const TipCalculatorPage = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Total Tip', value: '$0.00' },
    { label: 'Total Bill', value: '$0.00' },
    { label: 'Tip per Person', value: '$0.00' },
    { label: 'Total per Person', value: '$0.00' },
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
    const billAmount = parseNumberInput(fields.find((f) => f.name === 'billAmount')?.value || '')
    const tipPercentage = parseNumberInput(fields.find((f) => f.name === 'tipPercentage')?.value || '')
    const numberOfPeople = parseNumberInput(fields.find((f) => f.name === 'numberOfPeople')?.value || '')

    if (!billAmount || billAmount <= 0 || tipPercentage < 0 || !numberOfPeople || numberOfPeople <= 0) {
      setFormError('Please enter valid positive values for all fields.')
      return
    }

    const result = calculateTip(billAmount, tipPercentage, numberOfPeople)
    setResults([
      { label: 'Total Tip', value: formatMoney(result.totalTip) },
      { label: 'Total Bill', value: formatMoney(result.totalBill) },
      { label: 'Tip per Person', value: formatMoney(result.tipPerPerson) },
      { label: 'Total per Person', value: formatMoney(result.totalPerPerson) },
    ])
  }

  return (
    <CalculatorLayout
      title='Tip Calculator'
      description='Calculate the tip and split the bill easily among multiple people. Perfect for restaurants, cafes, and group outings.'
      author='CalcVerse Lifestyle Team'
      lastUpdated='April 2026'>
      <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
        <div>
          <CalculatorForm
            fields={fields}
            onChange={handleChange}
            onSubmit={handleSubmit}
            buttonText='Calculate Tip'
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
              Tipping Etiquette
            </h2>
            <p>
              While tipping varies by culture and country, in many places, it is standard to tip between 15% and 20% for good service at sit-down restaurants.
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li><strong>15%</strong>: Standard service</li>
              <li><strong>18%</strong>: Good service</li>
              <li><strong>20%+</strong>: Excellent service</li>
            </ul>

            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-20 mb-8'>Frequently Asked Questions</h2>
            <FaqAccordion 
              faqs={[
                {
                  q: "Should I tip on the pre-tax or post-tax amount?",
                  a: "Common practice is to tip on the pre-tax amount of the bill, though many people simply tip on the final total for simplicity."
                },
                {
                  q: "How do I split a bill evenly?",
                  a: "Our calculator does this for you! Just enter the number of people in your party, and it will tell you exactly what each person owes, including their share of the tip."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default TipCalculatorPage
