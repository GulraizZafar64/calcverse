'use client'

import { useState } from 'react'
import CalculatorLayout from '@/app/components/CalculatorLayout'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import FaqAccordion from '@/app/components/FaqAccordion'
import { calculateEmi, formatMoney, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'


const initialFields: CalculatorField[] = [
  {
    name: 'loanAmount',
    label: 'Loan amount',
    placeholder: 'Enter loan principal amount',
    value: '',
  },
  {
    name: 'interestRate',
    label: 'Interest rate (%)',
    placeholder: 'Annual interest rate',
    value: '',
  },
  {
    name: 'termYears',
    label: 'Loan term (years)',
    placeholder: 'Total loan duration in years',
    value: '',
  },
]

const LoanEmiCalculatorPage = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Monthly EMI', value: '$0.00' },
    { label: 'Total interest', value: '$0.00' },
    { label: 'Total payment', value: '$0.00' },
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
    const amount = parseNumberInput(fields.find((field) => field.name === 'loanAmount')?.value || '')
    const rate = parseNumberInput(fields.find((field) => field.name === 'interestRate')?.value || '')
    const years = parseNumberInput(fields.find((field) => field.name === 'termYears')?.value || '')

    if (!amount || amount <= 0 || rate < 0 || !years || years <= 0) {
      setFormError('Please enter valid positive numbers for all fields.')
      return
    }

    const result = calculateEmi(amount, rate, years)
    setResults([
      { label: 'Monthly EMI', value: formatMoney(result.monthlyPayment) },
      { label: 'Total interest', value: formatMoney(result.totalInterest) },
      { label: 'Total payment', value: formatMoney(result.totalPayment) },
    ])
  }

  return (
    <CalculatorLayout
      title='Loan EMI Calculator'
      description='Calculate monthly loan payments, total interest cost, and total repayment for any loan term.'
      author='CalcVerse Editorial Team'
      lastUpdated='April 2026'>
      <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
        <div>
          <CalculatorForm
            fields={fields}
            onChange={handleChange}
            onSubmit={handleSubmit}
            buttonText='Calculate EMI'
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
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-6 underline decoration-blue-500 underline-offset-8'>Understanding Your Loan EMI</h2>
            <p>
              An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are applied to both interest and principal each month so that over a specified number of years, the loan is paid off in full. It is more common than variable payment plans, where the borrower can pay higher amounts at their discretion.
            </p>
            <p>
              At <strong>CalcVerse</strong>, our Loan EMI Calculator is designed to provide you with instant, accurate results to help you plan your financial future. Whether you are taking a personal loan, a car loan, or a business loan, knowing your monthly commitment is crucial for maintaining a healthy budget.
            </p>

            <div className='bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl my-10 border border-blue-100 dark:border-blue-800'>
              <h3 className='text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4'>The EMI Mathematical Formula</h3>
              <p className='text-blue-800 dark:text-blue-400'>
                The formula used to calculate EMI is:
              </p>
              <div className='text-center py-6 bg-white dark:bg-slate-800 rounded-2xl my-4 text-2xl font-mono text-slate-900 dark:text-white shadow-sm'>
                EMI = [P x R x (1+R)^N] / [(1+R)^N-1]
              </div>
              <ul className='space-y-2 mt-4'>
                <li><strong>P</strong> = Principal loan amount (The initial amount you borrowed)</li>
                <li><strong>R</strong> = Monthly interest rate (Annual rate / 12 / 100)</li>
                <li><strong>N</strong> = Number of monthly installments (Loan term in years x 12)</li>
              </ul>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Example Calculation</h3>
            <p>
              Let&apos;s say you borrow <strong>$10,000</strong> at an annual interest rate of <strong>10%</strong> for a period of <strong>2 years</strong> (24 months).
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Principal (P): $10,000</li>
              <li>Monthly Interest Rate (R): 10 / 12 / 100 = 0.00833</li>
              <li>Number of Months (N): 24</li>
            </ul>
            <p className='mt-4'>
              Using the formula, your monthly EMI would be approximately <strong>$461.45</strong>. Over the course of 24 months, you would pay a total of $11,074.80, which includes <strong>$1,074.80 in total interest</strong>.
            </p>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Factors That Affect Your EMI</h3>
            <p>
              Several factors can influence the amount you pay each month for your loan:
            </p>
            <div className='grid md:grid-cols-2 gap-6 my-8'>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Principal Amount</h4>
                <p>The higher the amount you borrow, the higher your monthly EMI will be.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Interest Rate</h4>
                <p>Even a small change in the interest rate can significantly impact your total repayment over time.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Loan Tenure</h4>
                <p>A longer tenure reduces your monthly EMI but increases the total interest you pay over the life of the loan.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Repayment Frequency</h4>
                <p>While most loans use monthly installments, some may offer bi-weekly or quarterly options which change the calculation.</p>
              </div>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>How to Use CalcVerse EMI Calculator</h3>
            <ol className='list-decimal pl-6 space-y-4'>
              <li><strong>Enter Loan Amount:</strong> Type in the total amount you plan to borrow.</li>
              <li><strong>Set Interest Rate:</strong> Enter the annual interest rate offered by your bank or lender.</li>
              <li><strong>Choose Tenure:</strong> Select the number of years you want to take the loan for.</li>
              <li><strong>Click Calculate:</strong> Instantly see your monthly EMI, total interest, and total amount payable.</li>
            </ol>
            
            <p className='mt-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border-l-4 border-blue-600 italic'>
              Pro Tip: Try to keep your total EMIs (including home, car, and personal loans) under 40% of your take-home salary to maintain financial stability.
            </p>

            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-20 mb-8'>Frequently Asked Questions</h2>
            <FaqAccordion 
              faqs={[
                {
                  q: "What is the difference between a fixed and floating interest rate?",
                  a: "A fixed interest rate remains the same throughout the loan tenure, providing certainty in your EMI. A floating rate changes based on market conditions, meaning your EMI can go up or down over time."
                },
                {
                  q: "How does a loan prepayment affect my EMI?",
                  a: "When you make a prepayment, you can usually choose to either reduce your monthly EMI amount or shorten your loan tenure. Most financial experts recommend shortening the tenure as it saves you more in total interest."
                },
                {
                  q: "What are 'Processing Fees' in a loan?",
                  a: "Processing fees are one-time charges levied by lenders to process your loan application. These are usually 0.5% to 2% of the loan amount and are either deducted from the loan disbursement or paid upfront."
                },
                {
                  q: "Can I get a loan with a 0% interest rate?",
                  a: "Some retailers offer 'No Cost EMI' which appears to be 0% interest. However, the interest is often built into the product price or the discount you would have received for a cash payment is withheld."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default LoanEmiCalculatorPage
