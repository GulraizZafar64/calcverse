import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg'>
        <svg className='h-6 w-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' />
        </svg>
      </div>
      <div className='flex flex-col'>
        <span className='text-xl font-bold text-darkblue dark:text-white'>CalcVerse</span>
        <span className='text-xs text-slate-500 dark:text-slate-400'>Smart Financial Solutions</span>
      </div>
    </Link>
  )
}

export default Logo
