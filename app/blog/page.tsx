import Link from 'next/link'

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
  },
  {
    slug: 'compound-interest-explained',
    title: 'Compound Interest Explained: The Eighth Wonder of the World',
    excerpt:
      'Einstein reportedly called compound interest the eighth wonder of the world. We break down exactly how it works, why starting early matters so much, and how to harness it for your own wealth.',
    date: 'April 8, 2026',
    readTime: '7 min read',
    category: 'Investing',
  },
  {
    slug: 'first-time-mortgage-guide',
    title: 'First-Time Homebuyer Mortgage Guide: What You Need to Know',
    excerpt:
      'Buying your first home is exciting and overwhelming. This guide walks you through pre-approval, down payments, rate types, closing costs, and how to use a mortgage calculator to shop smarter.',
    date: 'April 6, 2026',
    readTime: '9 min read',
    category: 'Mortgages',
  },
  {
    slug: 'retirement-savings-by-age',
    title: 'How Much Should You Have Saved for Retirement by Age?',
    excerpt:
      "General benchmarks — like having 1× your salary saved by 30 and 10× by 67 — give you a target to work toward. Here's how to assess where you stand and what to do if you're behind.",
    date: 'April 4, 2026',
    readTime: '8 min read',
    category: 'Retirement',
  },
  {
    slug: 'tax-efficient-salary-planning',
    title: 'Tax-Efficient Salary Planning: Keep More of What You Earn',
    excerpt:
      "Your gross salary and your take-home pay can be very different numbers. Learn which deductions, contributions, and benefits can legally reduce your taxable income and increase your net pay.",
    date: 'April 2, 2026',
    readTime: '7 min read',
    category: 'Tax & Salary',
  },
  {
    slug: 'debt-avalanche-vs-snowball',
    title: 'Debt Avalanche vs Snowball: Which Payoff Method Is Right for You?',
    excerpt:
      'Both strategies can help you become debt-free — they just take different paths. We compare the math, the psychology, and the best situations for each method so you can choose with confidence.',
    date: 'March 30, 2026',
    readTime: '6 min read',
    category: 'Debt',
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
            className='group flex flex-col rounded-2xl border border-slate-100 dark:border-slate-800 p-6 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all duration-200'>
            <span className='inline-flex self-start rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4'>
              {article.category}
            </span>
            <h2 className='text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3 leading-snug'>
              {article.title}
            </h2>
            <p className='text-slate-600 dark:text-slate-400 text-sm leading-7 flex-1'>
              {article.excerpt}
            </p>
            <div className='mt-6 flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500'>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default BlogPage
