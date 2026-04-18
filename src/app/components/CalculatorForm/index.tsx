'use client'

import type { CalculatorField } from '@/app/types/calculator'

type CalculatorFormProps = {
  fields: CalculatorField[]
  onChange: (name: string, value: string) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  buttonText: string
  disabled?: boolean
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({
  fields,
  onChange,
  onSubmit,
  buttonText,
  disabled = false,
}) => {
  return (
    <form onSubmit={onSubmit} className='rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900/80'>
      <div className='grid gap-5'>
        {fields.map((field) => (
          <label key={field.name} className='space-y-2'>
            <span className='block text-sm font-semibold text-darkblue dark:text-white'>
              {field.label}
            </span>
            <div className='rounded-2xl border border-slate-300 bg-slate-50 px-4 py-2 dark:border-slate-700 dark:bg-slate-950'>
              <input
                inputMode='decimal'
                type='text'
                value={field.value}
                onChange={(event) => onChange(field.name, event.target.value)}
                placeholder={field.placeholder}
                className='w-full border-0 bg-transparent text-lg font-medium text-darkblue outline-none placeholder:text-slate-400 dark:text-white'
              />
            </div>
            {field.error && (
              <p className='text-sm text-red-600 dark:text-red-400'>{field.error}</p>
            )}
          </label>
        ))}
      </div>
      <button
        type='submit'
        disabled={disabled}
        className='mt-6 inline-flex w-full items-center justify-center px-4 py-2 bg-primary text-white rounded-lg outline-none hover:bg-transparent hover:text-primary border border-primary duration-500 text-base font-semibold disabled:cursor-not-allowed disabled:bg-slate-300'>
        {buttonText}
      </button>
    </form>
  )
}

export default CalculatorForm
