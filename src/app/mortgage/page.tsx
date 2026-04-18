'use client'

import { useState } from 'react'
import CalculatorLayout from '@/app/components/CalculatorLayout'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import { calculateMortgage, formatMoney, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'

export const metadata = {
  title: 'Mortgage Calculator | Financial Tools',
  description: 'Calculate monthly mortgage payments, total interest, and final payment for home financing.',
}

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

const MortgagePage = () => {
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
    <CalculatorLayout
      title='Mortgage Calculator'
      description='Estimate mortgage payments, total interest cost, and your home loan payment schedule.'>
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
      <section className='mt-20 border-t border-slate-100 dark:border-slate-800 pt-16'>
        <div className='max-w-4xl mx-auto'>
          <div className='prose prose-lg max-w-none text-slate-600 dark:text-slate-400 dark:prose-invert'>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-6 underline decoration-blue-500 underline-offset-8'>Planning Your Dream Home Purchase</h2>
            <p>
              Buying a home is one of the most significant financial decisions you will ever make. A mortgage is a long-term commitment, often spanning 15 to 30 years. Understanding the true cost of your mortgage—not just the home price—is essential for long-term financial health.
            </p>
            <p>
              At <strong>CalcVerse</strong>, our Mortgage Calculator goes beyond simple math. We help you understand how your down payment, interest rate, and loan term work together to determine your monthly payment and the total cost of ownership.
            </p>

            <div className='bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-3xl my-10 border border-emerald-100 dark:border-emerald-800'>
              <h3 className='text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-4'>What's in a Mortgage Payment?</h3>
              <p className='text-emerald-800 dark:text-emerald-400'>
                A standard mortgage payment is often referred to as <strong>PITI</strong>:
              </p>
              <ul className='space-y-2 mt-4'>
                <li><strong>Principal:</strong> The amount that goes toward paying off the loan balance.</li>
                <li><strong>Interest:</strong> The cost of borrowing the money from the lender.</li>
                <li><strong>Taxes:</strong> Property taxes collected by your local government.</li>
                <li><strong>Insurance:</strong> Homeowners insurance and potentially Private Mortgage Insurance (PMI).</li>
              </ul>
              <p className='mt-4 text-sm italic text-emerald-700 dark:text-emerald-500'>Note: Our calculator currently focuses on Principal and Interest to provide a clear baseline for your loan comparison.</p>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>The Importance of the Down Payment</h3>
            <p>
              The down payment is the cash you pay upfront for your home. While many people strive for the traditional 20% down payment to avoid PMI, there are many loan programs that allow for much lower down payments.
            </p>
            <div className='grid md:grid-cols-2 gap-6 my-8'>
              <div className='p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Higher Down Payment</h4>
                <p>Reduces your loan amount, lowers your monthly payment, and can often get you a better interest rate from lenders.</p>
              </div>
              <div className='p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Lower Down Payment</h4>
                <p>Allows you to buy a home sooner and keep more cash in reserve for repairs or emergencies, but results in higher monthly costs.</p>
              </div>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Choosing Your Loan Term</h3>
            <p>
              The length of your mortgage significantly impacts your total interest paid.
            </p>
            <ul className='list-disc pl-6 space-y-4'>
              <li><strong>30-Year Mortgage:</strong> Offers the lowest monthly payment, making homeownership more affordable on a monthly basis. However, you will pay significantly more in interest over the life of the loan.</li>
              <li><strong>15-Year Mortgage:</strong> Higher monthly payments, but you pay off the house in half the time and save tens of thousands of dollars in interest. Lenders also typically offer lower interest rates for 15-year terms.</li>
            </ul>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Tips for Mortgage Success</h3>
            <ul className='list-decimal pl-6 space-y-4'>
              <li><strong>Check Your Credit Score:</strong> A higher credit score can save you thousands of dollars through a lower interest rate.</li>
              <li><strong>Get Pre-Approved:</strong> Before house hunting, get a pre-approval letter from a lender to know exactly what you can afford.</li>
              <li><strong>Don't Forget Closing Costs:</strong> Budget an additional 2-5% of the home price for taxes, lender fees, and title insurance.</li>
              <li><strong>Maintain an Emergency Fund:</strong> Homeownership comes with unexpected repairs. Ensure you have cash set aside after your down payment.</li>
            </ul>
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default MortgagePage
