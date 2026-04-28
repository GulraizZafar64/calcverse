import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Financial Tips & Guides | CalcVerse Blog',
  description: 'Practical financial guides on loans, compound interest, mortgages, retirement, and budgeting from the CalcVerse team.',
}

const articles = [
  {
    slug: 'how-to-reduce-your-loan-emi',
    title: 'How to Reduce Your Loan EMI: 7 Proven Strategies',
    excerpt:
      'A high EMI can strain your monthly budget. Learn actionable strategies — from negotiating a lower rate to making part-prepayments — that can meaningfully reduce what you pay each month.',
    date: 'April 10, 2026',
    readTime: '6 min read',
    category: 'Loans',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    imageAlt: 'Calculator and documents representing loan planning',
  },
  {
    slug: 'compound-interest-explained',
    title: 'Compound Interest Explained: The Eighth Wonder of the World',
    excerpt:
      'Einstein reportedly called compound interest the eighth wonder of the world. We break down exactly how it works, why starting early matters so much, and how to harness it for your own wealth.',
    date: 'April 8, 2026',
    readTime: '7 min read',
    category: 'Investing',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    imageAlt: 'Financial charts showing compound growth',
  },
  {
    slug: 'first-time-mortgage-guide',
    title: 'First-Time Homebuyer Mortgage Guide: What You Need to Know',
    excerpt:
      'Buying your first home is exciting and overwhelming. This guide walks you through pre-approval, down payments, rate types, closing costs, and how to use a mortgage calculator to shop smarter.',
    date: 'April 6, 2026',
    readTime: '9 min read',
    category: 'Mortgages',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    imageAlt: 'House keys representing a first-time mortgage',
  },
  {
    slug: 'retirement-savings-by-age',
    title: 'How Much Should You Have Saved for Retirement by Age?',
    excerpt:
      "General benchmarks — like having 1× your salary saved by 30 and 10× by 67 — give you a target to work toward. Here's how to assess where you stand and what to do if you're behind.",
    date: 'April 4, 2026',
    readTime: '8 min read',
    category: 'Retirement',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80',
    imageAlt: 'Piggy bank representing retirement savings',
  },
  {
    slug: 'tax-efficient-salary-planning',
    title: 'Tax-Efficient Salary Planning: Keep More of What You Earn',
    excerpt:
      "Your gross salary and your take-home pay can be very different numbers. Learn which deductions, contributions, and benefits can legally reduce your taxable income and increase your net pay.",
    date: 'April 2, 2026',
    readTime: '7 min read',
    category: 'Tax & Salary',
    image: "https://plus.unsplash.com/premium_photo-1679923906285-386991e8d862?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGF4fGVufDB8fDB8fHww",
    imageAlt: 'Documents and calculator for tax planning',
  },
  {
    slug: 'debt-avalanche-vs-snowball',
    title: 'Debt Avalanche vs Snowball: Which Payoff Method Is Right for You?',
    excerpt:
      'Both strategies can help you become debt-free — they just take different paths. We compare the math, the psychology, and the best situations for each method so you can choose with confidence.',
    date: 'March 30, 2026',
    readTime: '6 min read',
    category: 'Debt',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    imageAlt: 'Credit cards representing debt management',
  },
]

const BlogPage = () => {
  return (
    <main className='container py-20'>
      <section className='space-y-6 mb-14'>
        <div>
          <p className='inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400'>
            Financial Guides
          </p>
          <h1 className='mt-6 text-5xl font-bold text-slate-900 dark:text-white tracking-tight'>
            Tips, Guides & <span className='text-blue-600'>Financial Insights</span>
          </h1>
          <p className='mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400'>
            Practical articles written by the CalcVerse team to help you make smarter decisions about loans, investments, taxes, and retirement planning.
          </p>
        </div>
      </section>

      <section className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className='group flex flex-col rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-xl transition-all duration-300'>
            <div className='relative h-52 w-full overflow-hidden'>
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent' />
              <div className='absolute top-4 left-4'>
                <span className='inline-flex rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 shadow-sm'>
                  {article.category}
                </span>
              </div>
            </div>

            <div className='p-6 flex flex-col flex-1'>
              <h2 className='text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 leading-snug'>
                {article.title}
              </h2>
              <p className='text-slate-600 dark:text-slate-400 text-sm leading-7 flex-1'>
                {article.excerpt}
              </p>
              <div className='mt-6 flex items-center gap-3 text-xs font-medium text-slate-400 dark:text-slate-500'>
                <span>{article.date}</span>
                <span className='h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700' />
                <span>{article.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default BlogPage
