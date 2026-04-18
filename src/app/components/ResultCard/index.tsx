import type { ResultItem } from '@/app/types/calculator'

const ResultCard: React.FC<{ results: ResultItem[] }> = ({ results }) => {
  return (
    <div className='rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950'>
      <h2 className='text-2xl font-semibold text-darkblue dark:text-white'>Calculator Results</h2>
      <div className='mt-6 space-y-4'>
        {results.map((result) => (
          <div key={result.label} className='rounded-3xl bg-white p-5 shadow-sm dark:bg-slate-900'>
            <p className='text-sm uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400'>
              {result.label}
            </p>
            <p className='mt-2 text-3xl font-semibold text-darkblue dark:text-white'>
              {result.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultCard
