'use client'

import { useState } from 'react'
import CalculatorLayout from '@/app/components/CalculatorLayout'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import FaqAccordion from '@/app/components/FaqAccordion'
import { calculateCarLoan, formatMoney, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'

const initialFields: CalculatorField[] = [
  {
    name: 'vehiclePrice',
    label: 'Vehicle price',
    placeholder: 'Enter total vehicle price',
    value: '',
  },
  {
    name: 'downPayment',
    label: 'Down payment',
    placeholder: 'Amount paid upfront',
    value: '',
  },
  {
    name: 'interestRate',
    label: 'Annual interest rate (%)',
    placeholder: 'Enter annual rate',
    value: '',
  },
  {
    name: 'loanTerm',
    label: 'Loan term (years)',
    placeholder: 'Total loan duration in years',
    value: '',
  },
]

const CarLoanPage = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Monthly payment', value: '$0.00' },
    { label: 'Total interest', value: '$0.00' },
    { label: 'Total payment', value: '$0.00' },
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
    const vehiclePrice = parseNumberInput(fields.find((f) => f.name === 'vehiclePrice')?.value || '')
    const downPayment = parseNumberInput(fields.find((f) => f.name === 'downPayment')?.value || '')
    const rate = parseNumberInput(fields.find((f) => f.name === 'interestRate')?.value || '')
    const years = parseNumberInput(fields.find((f) => f.name === 'loanTerm')?.value || '')

    if (!vehiclePrice || vehiclePrice <= 0 || downPayment < 0 || rate < 0 || !years || years <= 0) {
      setFormError('Please enter valid positive values for all fields.')
      return
    }
    if (downPayment >= vehiclePrice) {
      setFormError('Down payment cannot be greater than or equal to the vehicle price.')
      return
    }

    const result = calculateCarLoan(vehiclePrice, downPayment, rate, years)
    setResults([
      { label: 'Monthly payment', value: formatMoney(result.monthlyPayment) },
      { label: 'Total interest', value: formatMoney(result.totalInterest) },
      { label: 'Total payment', value: formatMoney(result.totalPayment) },
    ])
  }

  return (
    <CalculatorLayout
      title='Car Loan Calculator'
      description='Estimate your monthly car loan payment, total interest paid, and the full cost of financing your vehicle.'
      author='CalcVerse Editorial Team'
      lastUpdated='April 2026'>
      <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
        <div>
          <CalculatorForm
            fields={fields}
            onChange={handleChange}
            onSubmit={handleSubmit}
            buttonText='Calculate Car Loan'
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
              Understanding Your Car Loan
            </h2>
            <p>
              A car loan (auto loan) is an installment loan used to finance a vehicle purchase. The lender provides the funds and the borrower repays the principal plus interest in fixed monthly payments over a set term — typically 24 to 84 months.
            </p>
            <p>
              Using CalcVerse&apos;s Car Loan Calculator helps you understand the true cost of financing before you walk into the dealership, giving you the confidence to negotiate smarter.
            </p>

            <div className='bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl my-10 border border-blue-100 dark:border-blue-800'>
              <h3 className='text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4'>Key Terms Explained</h3>
              <ul className='space-y-3'>
                <li><strong>Vehicle Price:</strong> The total out-the-door cost of the car including taxes and fees.</li>
                <li><strong>Down Payment:</strong> The amount you pay upfront, which reduces the amount you need to borrow.</li>
                <li><strong>APR (Annual Percentage Rate):</strong> The yearly cost of your loan as a percentage.</li>
                <li><strong>Loan Term:</strong> The number of years (or months) over which you repay the loan.</li>
              </ul>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Tips to Lower Your Monthly Car Payment</h3>
            <div className='grid md:grid-cols-2 gap-6 my-8'>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Increase Your Down Payment</h4>
                <p>A larger down payment reduces the loan principal, directly lowering monthly payments and total interest.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Improve Your Credit Score</h4>
                <p>Lenders offer lower APRs to borrowers with good credit. Even a 1% rate reduction can save hundreds over the loan life.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Choose a Shorter Term Carefully</h4>
                <p>Shorter terms mean higher monthly payments but significantly less total interest paid.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Shop Multiple Lenders</h4>
                <p>Compare rates from banks, credit unions, and online lenders before accepting dealer financing.</p>
              </div>
            </div>

            <p className='mt-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border-l-4 border-blue-600 italic'>
              Pro Tip: Aim to keep your monthly car payment below 15% of your take-home pay to maintain a healthy financial balance.
            </p>

            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-20 mb-8'>Frequently Asked Questions</h2>
            <FaqAccordion 
              faqs={[
                {
                  q: "How much down payment should I put on a car?",
                  a: "Financial experts typically recommend a down payment of 20% for new cars and 10% for used cars. A larger down payment reduces your loan amount, monthly payments, and the total interest paid over the life of the loan."
                },
                {
                  q: "Should I choose a longer or shorter loan term?",
                  a: "A shorter term (e.g., 36-48 months) means higher monthly payments but lower total interest. A longer term (e.g., 60-84 months) lowers your monthly payment but significantly increases the total interest you'll pay and increases the risk of being 'upside-down' on your loan."
                },
                {
                  q: "Can I pay off my car loan early?",
                  a: "Most modern car loans allow for early repayment without penalty, but you should check your specific loan agreement for 'prepayment penalties'. Paying extra toward your principal each month can save you hundreds in interest."
                },
                {
                  q: "Does my credit score affect my car loan rate?",
                  a: "Yes, significantly. Borrowers with 'Excellent' credit (750+) typically qualify for the lowest rates, while those with 'Subprime' credit may pay double or triple the interest rate, adding thousands to the total cost of the vehicle."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default CarLoanPage
