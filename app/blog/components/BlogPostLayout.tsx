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
  relatedPosts?: {
    title: string
    slug: string
    image: string
  }[]
}

const BlogPostLayout = ({
  category,
  title,
  date,
  readTime,
  image,
  imageAlt,
  children,
  relatedPosts = [],
}: BlogPostLayoutProps) => {
  return (
    <main className='relative min-h-screen bg-white dark:bg-slate-950 overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 pointer-events-none' />
      <div className='absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 dark:bg-blue-600/5 rounded-full blur-3xl -mr-80 -mt-80 pointer-events-none' />
      
      {/* Reading Progress Bar (Fixed top) */}
      <div className='fixed top-0 left-0 w-full h-1 z-50 bg-slate-100 dark:bg-slate-800'>
        <div className='h-full bg-blue-600 w-1/3' />
      </div>

      <div className='container relative z-10 pt-24 pb-20'>
        <article className='max-w-4xl mx-auto'>
          {/* Breadcrumbs / Back */}
          <nav className='mb-12'>
            <Link
              href='/blog'
              className='group inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'>
              <span className='flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-600 group-hover:text-white transition-all'>
                ←
              </span>
              Back to financial guides
            </Link>
          </nav>

          <header className='mb-12'>
            <div className='flex items-center gap-3 mb-6'>
              <span className='inline-flex rounded-full bg-blue-600 px-4 py-1 text-[11px] font-black uppercase tracking-widest text-white shadow-lg shadow-blue-500/25'>
                {category}
              </span>
              <span className='h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700' />
              <span className='text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase'>{readTime}</span>
            </div>
            
            <h1 className='text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-8'>
              {title}
            </h1>
            
            <div className='flex items-center gap-4 p-1 rounded-full bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 w-fit pr-6'>
              <div className='h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-sm'>
                CV
              </div>
              <div>
                <p className='text-xs font-bold text-slate-900 dark:text-white'>CalcVerse Editorial</p>
                <p className='text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-tight'>Updated on {date}</p>
              </div>
            </div>
          </header>

          <div className='relative aspect-[16/9] rounded-[2rem] overflow-hidden border border-slate-200/50 dark:border-slate-800 shadow-2xl mb-16 group'>
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes='(max-width: 1024px) 100vw, 1024px'
              className='object-cover transition-transform duration-700 group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent' />
          </div>

          <div className='flex flex-col lg:flex-row gap-12'>
            {/* Sidebar for social/toc (simulated) */}
            <aside className='hidden lg:block w-12 flex-shrink-0'>
              <div className='sticky top-32 flex flex-col gap-4'>
                 {['tw', 'fb', 'li'].map((s) => (
                   <div key={s} className='h-10 w-10 rounded-full border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all cursor-pointer bg-white dark:bg-slate-950 shadow-sm'>
                     {s === 'tw' && '𝕏'}
                     {s === 'fb' && 'f'}
                     {s === 'li' && 'in'}
                   </div>
                 ))}
              </div>
            </aside>

            {/* Content */}
            <div className='flex-1 max-w-none'>
              <div className='prose prose-lg md:prose-xl text-slate-600 dark:text-slate-400 dark:prose-invert 
                prose-headings:text-slate-900 dark:prose-headings:text-white 
                prose-headings:font-black prose-headings:tracking-tight
                prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-slate-900 dark:prose-strong:text-white
                prose-img:rounded-3xl prose-img:shadow-xl
                prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50/50 dark:prose-blockquote:bg-blue-900/10 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl
                '>
                {children}
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className='mt-20'>
                  <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-8'>Related Reading</h3>
                  <div className='grid sm:grid-cols-2 gap-6'>
                    {relatedPosts.map((post) => (
                      <Link 
                        key={post.slug} 
                        href={`/blog/${post.slug}`}
                        className='group p-4 rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-200 dark:hover:border-blue-800 transition-all shadow-sm hover:shadow-md'
                      >
                        <div className='relative aspect-video rounded-2xl overflow-hidden mb-4'>
                          <Image src={post.image} alt={post.title} fill className='object-cover transition-transform group-hover:scale-105' />
                        </div>
                        <h4 className='font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors'>
                          {post.title}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Actions */}
              <footer className='mt-20 pt-12 border-t border-slate-100 dark:border-slate-800'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-8 p-10 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 relative overflow-hidden'>
                  <div className='absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16' />
                  
                  <div className='relative z-10 max-w-md'>
                    <h4 className='text-2xl font-bold text-slate-900 dark:text-white mb-3'>Was this helpful?</h4>
                    <p className='text-slate-600 dark:text-slate-400'>
                      Our goal is to provide clear, actionable financial advice. Explore more guides or try our interactive calculators.
                    </p>
                  </div>
                  
                  <div className='relative z-10 flex flex-wrap gap-4'>
                    <Link
                      href='/blog'
                      className='inline-flex items-center justify-center rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-3 text-sm font-bold text-slate-900 dark:text-white hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm'>
                      More Guides
                    </Link>
                    <Link
                      href='/loan-calculators'
                      className='inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25'>
                      Try Calculators
                    </Link>
                  </div>
                </div>
                
                <div className='mt-12 flex items-center justify-center gap-8 text-slate-400 dark:text-slate-600'>
                   <Link href='/privacy-policy' className='text-xs font-bold uppercase tracking-widest hover:text-blue-600'>Privacy</Link>
                   <Link href='/terms-of-service' className='text-xs font-bold uppercase tracking-widest hover:text-blue-600'>Terms</Link>
                   <Link href='/contact' className='text-xs font-bold uppercase tracking-widest hover:text-blue-600'>Feedback</Link>
                </div>
              </footer>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}

export default BlogPostLayout
