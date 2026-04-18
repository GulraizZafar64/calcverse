'use client'

import { useState } from 'react'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import { calculateMortgage, formatMoney, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'

const initialFields: CalculatorField[] = [
  {
    name: 'homePrice',
    label: 'Home price',
    placeholder: 'Enter property price',
    value: '',
  },
  {
    name: 'downPayment',
    label: 'Down payment',
    placeholder: 'Enter upfront down payment',
    value: '',
  },
  {
    name: 'interestRate',
    label: 'Interest rate (%)',
    placeholder: 'Annual mortgage rate',
    value: '',
  },
  {
    name: 'termYears',
    label: 'Loan term (years)',
    placeholder: 'Mortgage length in years',
    value: '',
  },
]

const MortgageClient = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Monthly mortgage payment', value: '$0.00' },
    { label: 'Total payment', value: '$0.00' },
    { label: 'Total interest', value: '$0.00' },
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
    const homePrice = parseNumberInput(fields.find((field) => field.name === 'homePrice')?.value || '')
    const downPayment = parseNumberInput(fields.find((field) => field.name === 'downPayment')?.value || '')
    const interestRate = parseNumberInput(fields.find((field) => field.name === 'interestRate')?.value || '')
    const years = parseNumberInput(fields.find((field) => field.name === 'termYears')?.value || '')

    if (homePrice <= 0 || downPayment < 0 || interestRate < 0 || years <= 0 || downPayment >= homePrice) {
      setFormError('Please enter valid values and ensure the down payment is less than the home price.')
      return
    }

    const result = calculateMortgage(homePrice, downPayment, interestRate, years)
    setResults([
      { label: 'Monthly mortgage payment', value: formatMoney(result.monthlyPayment) },
      { label: 'Total payment', value: formatMoney(result.totalPayment) },
      { label: 'Total interest', value: formatMoney(result.totalInterest) },
    ])
  }

  return (
    <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
      <div>
        <CalculatorForm
          fields={fields}
          onChange={handleChange}
          onSubmit={handleSubmit}
          buttonText='Calculate Mortgage'
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

export default MortgageClient
