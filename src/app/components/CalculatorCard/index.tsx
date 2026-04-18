import Link from 'next/link'
import type { CalculatorCardType } from '@/app/types/calculator'

const CalculatorCard: React.FC<{ calculator: CalculatorCardType }> = ({ calculator }) => {
  return (
    <div className='rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/80'>
      <div className='mb-4'>
        <span className='inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary'>
          {calculator.category.replace('-', ' ')}
        </span>
      </div>
      <h3 className='text-2xl font-semibold text-darkblue dark:text-white'>{calculator.name}</h3>
      <p className='mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300'>
        {calculator.description}
      </p>
      <Link
        href={calculator.href}
        className='mt-8 inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg outline-none hover:bg-transparent hover:text-primary border border-primary duration-500 text-base font-semibold'>
        Open Calculator
      </Link>
    </div>
  )
}

export default CalculatorCard
