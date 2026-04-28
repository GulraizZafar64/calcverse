'use client'

import { useState } from 'react'
import CalculatorLayout from '@/app/components/CalculatorLayout'
import CalculatorForm from '@/app/components/CalculatorForm'
import ResultCard from '@/app/components/ResultCard'
import FaqAccordion from '@/app/components/FaqAccordion'
import { calculateBMI, parseNumberInput } from '@/app/lib/calculators'
import type { CalculatorField, ResultItem } from '@/app/types/calculator'

const initialFields: CalculatorField[] = [
  {
    name: 'unit',
    label: 'Unit System',
    placeholder: '',
    value: 'metric',
    type: 'select',
    options: [
      { label: 'Metric (kg, cm)', value: 'metric' },
      { label: 'Imperial (lbs, inches)', value: 'imperial' },
    ],
  },
  {
    name: 'weight',
    label: 'Weight',
    placeholder: 'Enter weight',
    value: '',
    type: 'number',
  },
  {
    name: 'height',
    label: 'Height',
    placeholder: 'Enter height',
    value: '',
    type: 'number',
  },
]

const BMICalculatorPage = () => {
  const [fields, setFields] = useState<CalculatorField[]>(initialFields)
  const [results, setResults] = useState<ResultItem[]>([
    { label: 'Your BMI', value: '0.0' },
    { label: 'Category', value: '---' },
  ])
  const [formError, setFormError] = useState('')

  const handleChange = (name: string, value: string) => {
    setFields((current) =>
      current.map((field) => {
        if (name === 'unit') {
          if (field.name === 'weight') {
            return { ...field, placeholder: value === 'metric' ? 'Enter weight in kg' : 'Enter weight in lbs' }
          }
          if (field.name === 'height') {
            return { ...field, placeholder: value === 'metric' ? 'Enter height in cm' : 'Enter height in inches' }
          }
        }
        if (field.name === name) {
          return { ...field, value }
        }
        return field
      })
    )
    setFormError('')
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const unit = fields.find((f) => f.name === 'unit')?.value as 'metric' | 'imperial'
    const weight = parseNumberInput(fields.find((f) => f.name === 'weight')?.value || '')
    const height = parseNumberInput(fields.find((f) => f.name === 'height')?.value || '')

    if (!weight || weight <= 0 || !height || height <= 0) {
      setFormError('Please enter valid positive values for weight and height.')
      return
    }

    const result = calculateBMI(weight, height, unit)
    setResults([
      { label: 'Your BMI', value: result.bmi.toString() },
      { label: 'Category', value: result.category },
    ])
  }

  return (
    <CalculatorLayout
      title='BMI Calculator'
      description='Calculate your Body Mass Index (BMI) to determine if you are at a healthy weight for your height.'
      author='CalcVerse Health Team'
      lastUpdated='April 2026'>
      <div className='grid gap-8 lg:grid-cols-[1.3fr_0.9fr]'>
        <div>
          <CalculatorForm
            fields={fields}
            onChange={handleChange}
            onSubmit={handleSubmit}
            buttonText='Calculate BMI'
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
              What is BMI?
            </h2>
            <p>
              Body Mass Index (BMI) is a simple tool that uses your height and weight to work out if your weight is healthy. It is used as a screening tool to identify possible weight problems for adults.
            </p>
            <p>
              While BMI is a useful indicator for most people, it has limitations as it does not directly measure body fat or account for muscle mass, bone density, and overall body composition.
            </p>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>BMI Categories</h3>
            <div className='overflow-x-auto'>
              <table className='w-full text-left border-collapse'>
                <thead>
                  <tr className='border-b border-slate-200 dark:border-slate-700'>
                    <th className='py-3 font-bold'>BMI Range</th>
                    <th className='py-3 font-bold'>Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-slate-100 dark:border-slate-800'>
                    <td className='py-3'>Below 18.5</td>
                    <td className='py-3 text-blue-600 dark:text-blue-400 font-medium'>Underweight</td>
                  </tr>
                  <tr className='border-b border-slate-100 dark:border-slate-800'>
                    <td className='py-3'>18.5 – 24.9</td>
                    <td className='py-3 text-green-600 dark:text-green-400 font-medium'>Normal weight</td>
                  </tr>
                  <tr className='border-b border-slate-100 dark:border-slate-800'>
                    <td className='py-3'>25.0 – 29.9</td>
                    <td className='py-3 text-yellow-600 dark:text-yellow-400 font-medium'>Overweight</td>
                  </tr>
                  <tr>
                    <td className='py-3'>30.0 and Above</td>
                    <td className='py-3 text-red-600 dark:text-red-400 font-medium'>Obesity</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-20 mb-8'>Frequently Asked Questions</h2>
            <FaqAccordion 
              faqs={[
                {
                  q: "Is BMI accurate for athletes?",
                  a: "BMI can sometimes overestimate body fat in athletes or people with a muscular build because muscle weighs more than fat. Highly muscular individuals may have a high BMI but low body fat."
                },
                {
                  q: "Does BMI apply to children?",
                  a: "While the formula is the same, the interpretation of BMI for children and teens is different and is based on age and sex-specific percentiles."
                },
                {
                  q: "What are the limitations of BMI?",
                  a: "BMI doesn't distinguish between fat, muscle, and bone. It also doesn't consider where fat is distributed (like belly fat, which is more linked to health risks)."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default BMICalculatorPage
