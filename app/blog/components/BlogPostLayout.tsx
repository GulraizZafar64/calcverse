import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type BlogPostLayoutProps = {
  category: string
  title: string
  date: string
  readTime: string
  image: string
  imageAlt: string
  children: ReactNode
}

const BlogPostLayout = ({
  category,
  title,
  date,
  readTime,
  image,
  imageAlt,
  children,
}: BlogPostLayoutProps) => {
  return (
    <main className='container py-16 lg:py-20'>
      <article className='max-w-4xl mx-auto'>
        <Link
          href='/blog'
          className='inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline mb-8'>
          ← Back to Blog
        </Link>

        <header className='mb-10'>
          <span className='inline-flex rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4'>
            {category}
          </span>
          <h1 className='text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight'>
            {title}
          </h1>
          <p className='mt-4 text-sm text-slate-500 dark:text-slate-400'>
            By <strong>CalcVerse Editorial Team</strong> · {date} · {readTime}
          </p>
        </header>

        <div className='relative aspect-[16/8] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-[0_24px_40px_-28px_rgba(15,23,42,0.65)] mb-12'>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes='(max-width: 1024px) 100vw, 1024px'
            className='object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent' />
        </div>

        <div className='prose prose-lg max-w-none text-slate-600 dark:text-slate-400 dark:prose-invert prose-headings:text-slate-900 dark:prose-headings:text-white prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-slate-900 dark:prose-strong:text-white'>
          {children}
        </div>

        <footer className='mt-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-6 py-5 flex flex-wrap items-center justify-between gap-3'>
          <p className='text-sm text-slate-600 dark:text-slate-400'>
            Enjoyed this article? Explore more practical finance guides or try the calculators.
          </p>
          <div className='flex items-center gap-2'>
            <Link
              href='/blog'
              className='inline-flex items-center rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:text-blue-600 transition-colors'>
              More articles
            </Link>
            <Link
              href='/loan-calculators'
              className='inline-flex items-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors'>
              Try calculators
            </Link>
          </div>
        </footer>
      </article>
    </main>
  )
}

export default BlogPostLayout
