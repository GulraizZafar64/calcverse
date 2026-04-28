import Link from 'next/link'
import type { CalculatorCardType } from '@/app/types/calculator'
import { Icon } from '@iconify/react'

const CalculatorCard: React.FC<{ calculator: CalculatorCardType }> = ({ calculator }) => {
  return (
    <Link
      href={calculator.href}
      className='group relative flex flex-col h-full rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-blue-400/30'
    >
      <div className='flex items-start justify-between mb-5'>
        <span className='rounded-lg bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'>
          {calculator.category.replace('-', ' ')}
        </span>
        <div className='text-slate-300 transition-colors duration-300 group-hover:text-blue-600 dark:text-slate-600 dark:group-hover:text-blue-400'>
          <Icon icon="lucide:arrow-up-right" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
      
      <h3 className='text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug'>
        {calculator.name}
      </h3>
      
      <p className='mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-2'>
        {calculator.description}
      </p>
      
      <div className='mt-8 pt-4 border-t border-slate-50 dark:border-slate-800/50 flex items-center text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
        <span>Open Calculator</span>
        <Icon icon="lucide:chevron-right" className="ml-1 w-3.5 h-3.5" />
      </div>
    </Link>
  )
}

export default CalculatorCard

