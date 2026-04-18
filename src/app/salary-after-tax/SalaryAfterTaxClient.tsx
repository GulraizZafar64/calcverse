'use client'

import { useState } from 'react'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import { calculateSalaryAfterTax, formatMoney, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'

const initialFields: CalculatorField[] = [
  {
    name: 'annualSalary',
    label: 'Annual salary',
    placeholder: 'Enter annual income',
    value: '',
  },
  {
    name: 'taxPercentage',
    label: 'Tax percentage (%)',
    placeholder: 'Enter income tax rate',
    value: '',
  },
]

const SalaryAfterTaxClient = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Monthly net salary', value: '$0.00' },
    { label: 'Annual net salary', value: '$0.00' },
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
    const annualSalary = parseNumberInput(fields.find((field) => field.name === 'annualSalary')?.value || '')
    const taxPercentage = parseNumberInput(fields.find((field) => field.name === 'taxPercentage')?.value || '')

    if (annualSalary <= 0 || taxPercentage < 0 || taxPercentage > 100) {
      setFormError('Please enter a valid salary amount and tax rate between 0 and 100.')
      return
    }

    const result = calculateSalaryAfterTax(annualSalary, taxPercentage)
    setResults([
      { label: 'Monthly net salary', value: formatMoney(result.monthlyNetSalary) },
      { label: 'Annual net salary', value: formatMoney(result.annualNetSalary) },
    ])
  }

  return (
    <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
      <div>
        <CalculatorForm
          fields={fields}
          onChange={handleChange}
          onSubmit={handleSubmit}
          buttonText='Calculate Net Salary'
        />
        {formError && (
          <p className='mt-4 rounded-2xl bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950/70 dark:text-red-300'>
            {formError}
          </p>
        )}
      </div>
      <ResultCard results={results} />
    </div>
  )
}

export default SalaryAfterTaxClient
