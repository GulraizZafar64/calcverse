'use client'

import { useState } from 'react'
import CalculatorLayout from '@/app/components/CalculatorLayout'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import FaqAccordion from '@/app/components/FaqAccordion'
import { calculateDebtPayoff, formatMoney, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'

const initialFields: CalculatorField[] = [
  {
    name: 'balance',
    label: 'Current balance',
    placeholder: 'Outstanding debt amount',
    value: '',
  },
  {
    name: 'annualRate',
    label: 'Annual interest rate (%)',
    placeholder: 'Interest rate on the debt',
    value: '',
  },
  {
    name: 'monthlyPayment',
    label: 'Monthly payment',
    placeholder: 'Amount you pay each month',
    value: '',
  },
]

const DebtPayoffPage = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Months to pay off', value: '0 months' },
    { label: 'Total interest paid', value: '$0.00' },
    { label: 'Total amount paid', value: '$0.00' },
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
    const balance = parseNumberInput(fields.find((f) => f.name === 'balance')?.value || '')
    const annualRate = parseNumberInput(fields.find((f) => f.name === 'annualRate')?.value || '')
    const monthlyPayment = parseNumberInput(fields.find((f) => f.name === 'monthlyPayment')?.value || '')

    if (!balance || balance <= 0 || annualRate < 0 || !monthlyPayment || monthlyPayment <= 0) {
      setFormError('Please enter valid positive values for all fields.')
      return
    }

    const result = calculateDebtPayoff(balance, annualRate, monthlyPayment)

    if (result.months === null) {
      setFormError('Your monthly payment is too low to cover the interest. Please increase your payment amount.')
      return
    }

    const years = Math.floor(result.months / 12)
    const months = result.months % 12
    const durationLabel =
      years > 0 && months > 0
        ? `${years} yr ${months} mo`
        : years > 0
        ? `${years} years`
        : `${months} months`

    setResults([
      { label: 'Time to pay off', value: durationLabel },
      { label: 'Total interest paid', value: formatMoney(result.totalInterest!) },
      { label: 'Total amount paid', value: formatMoney(result.totalPaid!) },
    ])
  }

  return (
    <CalculatorLayout
      title='Debt Payoff Calculator'
      description='Find out exactly how long it will take to pay off any debt and how much total interest you will pay.'
      author='CalcVerse Editorial Team'
      lastUpdated='April 2026'>
      <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
        <div>
          <CalculatorForm
            fields={fields}
            onChange={handleChange}
            onSubmit={handleSubmit}
            buttonText='Calculate Payoff'
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
              Take Control of Your Debt
            </h2>
            <p>
              Whether it is credit card debt, a personal loan, or a student loan, knowing exactly when you will be debt-free — and how much interest you will pay along the way — is an essential part of building a solid financial plan.
            </p>
            <p>
              CalcVerse&apos;s Debt Payoff Calculator uses your current balance, interest rate, and monthly payment to give you a clear timeline and total cost breakdown.
            </p>

            <div className='bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl my-10 border border-blue-100 dark:border-blue-800'>
              <h3 className='text-2xl font-bold text-blue-900 dark:text-blue-300 mb-4'>The Impact of Paying More</h3>
              <p className='text-blue-800 dark:text-blue-400'>
                On a $5,000 credit card debt at 20% APR, with a minimum payment of $100/month:
              </p>
              <ul className='space-y-2 mt-4'>
                <li>Payoff time: <strong>~94 months</strong> (over 7 years)</li>
                <li>Total interest: <strong>~$4,311</strong></li>
              </ul>
              <p className='mt-4 text-blue-800 dark:text-blue-400'>
                Increase payment to $200/month and payoff drops to <strong>~30 months</strong>, saving over <strong>$2,800 in interest</strong>.
              </p>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Debt Payoff Strategies</h3>
            <div className='grid md:grid-cols-2 gap-6 my-8'>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Avalanche Method</h4>
                <p>Pay minimum on all debts, then put every extra dollar toward the highest-interest debt first. Minimizes total interest paid.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Snowball Method</h4>
                <p>Pay minimum on all debts, then attack the smallest balance first. Provides quick wins that keep you motivated.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Balance Transfer</h4>
                <p>Move high-interest debt to a 0% intro APR credit card to pause interest and pay down principal faster.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Debt Consolidation</h4>
                <p>Combine multiple debts into a single loan with a lower interest rate to simplify payments and reduce costs.</p>
              </div>
            </div>

            <p className='mt-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border-l-4 border-blue-600 italic'>
              Pro Tip: Apply any windfalls — tax refunds, bonuses, or side income — directly to your highest-interest debt to dramatically accelerate your payoff timeline.
            </p>

            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-20 mb-8'>Frequently Asked Questions</h2>
            <FaqAccordion 
              faqs={[
                {
                  q: "Should I pay off debt or invest my extra money?",
                  a: "A general rule of thumb is to pay off debt if the interest rate is higher than what you could earn by investing. For example, paying off a credit card at 20% is a guaranteed 20% return. If your debt is at 3-4% (like some mortgages), you might earn more by investing in the stock market."
                },
                {
                  q: "What is the fastest way to pay off debt?",
                  a: "The 'Debt Avalanche' method is mathematically the fastest because it minimizes interest. You pay off the debt with the highest interest rate first while making minimum payments on others. However, some prefer the 'Debt Snowball' for the psychological boost of paying off small balances quickly."
                },
                {
                  q: "Will paying off my debt early hurt my credit score?",
                  a: "Generally, no. Reducing your total debt improves your 'credit utilization ratio,' which is a major factor in your credit score. However, closing an old account once it's paid off might slightly lower your score by reducing your average credit age."
                },
                {
                  q: "How can I lower the interest rate on my current debt?",
                  a: "You can call your credit card company and ask for a lower rate, transfer balances to a 0% intro APR card, or take out a lower-interest personal consolidation loan to pay off high-interest cards."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default DebtPayoffPage
