import type { ReactNode } from 'react'

type CalculatorLayoutProps = {
  title: string
  description: string
  children: ReactNode
  aside?: ReactNode
  author?: string
  lastUpdated?: string
}

const CalculatorLayout: React.FC<CalculatorLayoutProps> = ({
  title,
  description,
  children,
  aside,
  author,
  lastUpdated,
}) => {
  return (
    <main className='container py-20'>
      <section className='grid gap-14 lg:grid-cols-[1.7fr_1fr] lg:items-start'>
        <div>
          <p className='mb-4 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary'>
            Finance Tools
          </p>
          <h1 className='text-4xl font-bold text-darkblue dark:text-white sm:text-5xl'>
            {title}
          </h1>
          <p className='mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300'>
            {description}
          </p>
          {(author || lastUpdated) && (
            <p className='mt-4 text-sm text-slate-500 dark:text-slate-400'>
              {author && <span>Reviewed by <strong>{author}</strong></span>}
              {author && lastUpdated && <span className='mx-2'>·</span>}
              {lastUpdated && <span>Last updated: {lastUpdated}</span>}
            </p>
          )}
        </div>
        {aside && <div>{aside}</div>}
      </section>
      <section className='mt-14'>{children}</section>
    </main>
  )
}

export default CalculatorLayout
