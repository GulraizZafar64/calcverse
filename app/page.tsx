import type { CalculatorCardType } from './types/calculator'
import Link from 'next/link'
import Image from 'next/image'
import FaqAccordion from './components/FaqAccordion'

export const metadata = {
  title: 'Financial Calculators & Money Planning Tools | CalcVerse',
  description:
    'Free, accurate financial calculators for loan EMI, mortgages, compound interest, and salary after tax. Plan your financial future with CalcVerse.',
  keywords: ['financial calculators', 'loan emi calculator', 'mortgage payment calculator', 'investment growth calculator', 'salary tax calculator'],
}

const calculators: CalculatorCardType[] = [
  {
    name: 'Loan EMI Calculator',
    description: 'Find monthly loan payments, total interest, and repayment amount for any loan.',
    href: '/loan-emi',
    category: 'loan',
  },
  {
    name: 'Compound Interest',
    description: 'Estimate investment growth with monthly contributions and compound interest.',
    href: '/compound-interest',
    category: 'investment',
  },
  {
    name: 'Mortgage Calculator',
    description: 'Calculate monthly mortgage payments and total loan cost for your home purchase.',
    href: '/mortgage',
    category: 'loan',
  },
  {
    name: 'Salary After Tax',
    description: 'Discover your net monthly and annual salary after tax for confident budgeting.',
    href: '/salary-after-tax',
    category: 'salary',
  },
  {
    name: 'Simple Interest',
    description: 'Quickly compute simple interest and total repayment on any principal amount.',
    href: '/simple-interest',
    category: 'loan',
  },
  {
    name: 'ROI Calculator',
    description: 'Measure the return on investment for any asset or business decision instantly.',
    href: '/roi-calculator',
    category: 'investment',
  },
  {
    name: 'Retirement Savings',
    description: 'Project your retirement nest egg based on contributions and growth rate.',
    href: '/retirement-savings',
    category: 'investment',
  },
  {
    name: 'Inflation Calculator',
    description: 'See how inflation erodes purchasing power over time and plan accordingly.',
    href: '/inflation-calculator',
    category: 'investment',
  },
]

const categories = [
  { href: '/loan-calculators', label: 'Loans' },
  { href: '/investment-calculators', label: 'Investments' },
  { href: '/mortgage', label: 'Mortgages' },
  { href: '/salary-calculators', label: 'Salary' },
]

const faqs = [
  {
    q: 'Are these calculators free?',
    a: 'Yes, all CalcVerse calculators are 100% free. No sign-up required.',
  },
  {
    q: 'How accurate are the results?',
    a: 'We use industry-standard financial formulas. Results are highly accurate for planning — consult a financial advisor for major decisions.',
  },
  {
    q: 'Is my financial data stored?',
    a: 'No. All calculations happen locally in your browser. We never store or see any numbers you enter.',
  },
  {
    q: 'Does CalcVerse work on mobile?',
    a: 'Yes. CalcVerse is fully responsive and works on phones, tablets, and desktops.',
  },
]

const blogPosts = [
  {
    title: 'Compound Interest Explained',
    excerpt: 'Learn how compounding works and why starting early can dramatically increase long-term returns.',
    href: '/blog/compound-interest-explained',
    tag: 'Investing',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    imageAlt: 'Stock market charts showing investment growth',
  },
  {
    title: 'Debt Avalanche vs Snowball',
    excerpt: 'Compare two popular debt payoff strategies and choose the one that matches your psychology and goals.',
    href: '/blog/debt-avalanche-vs-snowball',
    tag: 'Debt',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    imageAlt: 'Credit cards representing debt management',
  },
  {
    title: 'First-Time Mortgage Guide',
    excerpt: 'A practical guide for home buyers: down payment, monthly costs, and mistakes to avoid.',
    href: '/blog/first-time-mortgage-guide',
    tag: 'Mortgage',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    imageAlt: 'House keys on a wooden table for mortgage guide',
  },
  {
    title: 'Retirement Savings by Age',
    excerpt: 'Use benchmark milestones by age to track if your retirement savings are on the right path.',
    href: '/blog/retirement-savings-by-age',
    tag: 'Retirement',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80',
    imageAlt: 'Piggy bank and coins representing retirement savings',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className='py-0 bg-white dark:bg-slate-950'>
        <div className='container py-12 lg:py-20'>
          <div className='max-w-2xl'>
            <span className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 mb-5'>
              <span className='w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse' />
              Free · No sign-up required
            </span>
            <h1 className='text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight'>
              Smart financial<br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>calculators for everyone</span>
            </h1>
            <p className='text-base text-slate-500 dark:text-slate-400 mb-7 max-w-lg leading-relaxed'>
              Loans, mortgages, investments, salary — get instant accurate results without any account or fees.
            </p>
            <div className='flex flex-wrap gap-3'>
              <a href='#calculators' className='px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm'>
                Explore Calculators
              </a>
              <a href='/about' className='px-5 py-2.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors font-semibold text-sm'>
                About CalcVerse
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className='py-0 relative overflow-hidden border-y border-slate-100 dark:border-slate-800 bg-gradient-to-r from-slate-50 via-white to-blue-50/60 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30'>
        <div className='pointer-events-none absolute -top-20 -left-20 h-52 w-52 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-700/20' />
        <div className='pointer-events-none absolute -bottom-24 -right-12 h-56 w-56 rounded-full bg-cyan-200/30 blur-3xl dark:bg-cyan-700/20' />
        <div className='container py-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4'>
            {[
              { value: '10+', label: 'Free Calculators', hint: 'Ready to use now' },
              { value: '100%', label: 'Browser-based', hint: 'Works on any device' },
              { value: '0', label: 'Data Stored', hint: 'Private by design' },
              { value: 'Free', label: 'Forever', hint: 'No account needed' },
            ].map((s) => (
              <div
                key={s.label}
                className='rounded-2xl border border-slate-200/80 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/70 backdrop-blur px-4 py-4 md:py-5 text-center shadow-[0_6px_18px_-12px_rgba(15,23,42,0.45)] hover:shadow-[0_12px_24px_-14px_rgba(37,99,235,0.55)] hover:-translate-y-0.5 transition-all duration-300'>
                <div className='text-2xl md:text-3xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400'>
                  {s.value}
                </div>
                <div className='text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1'>
                  {s.label}
                </div>
                <div className='text-[11px] md:text-xs text-slate-500 dark:text-slate-400 mt-1'>
                  {s.hint}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculators grid */}
      <section
        id='calculators'
        className='py-0 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.1),transparent_38%)] bg-white dark:bg-slate-950'>
        <div className='container py-14'>
          <div className='flex flex-wrap items-end justify-between gap-4 mb-8'>
            <div>
              <span className='inline-flex items-center rounded-full border border-blue-200/80 dark:border-blue-700/80 bg-blue-50/70 dark:bg-blue-900/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-3'>
                Instant Tools
              </span>
              <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white'>All Calculators</h2>
              <p className='text-slate-600 dark:text-slate-400 text-sm md:text-base mt-1'>
                Pick a tool and get started in seconds.
              </p>
            </div>
            <Link
              href='/loan-calculators'
              className='inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-white/90 dark:bg-slate-900 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors'>
              View all calculators
              <span className='ml-2'>→</span>
            </Link>
          </div>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {calculators.map((calc, index) => (
              <Link
                key={calc.name}
                href={calc.href}
                className='group relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 p-5 shadow-[0_12px_30px_-20px_rgba(15,23,42,0.65)] hover:shadow-[0_20px_36px_-20px_rgba(37,99,235,0.45)] hover:-translate-y-1 transition-all duration-300'>
                <div className='absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <div className='flex items-start justify-between gap-2 mb-3'>
                  <span className='inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/35 rounded-full'>
                    {calc.category}
                  </span>
                  <span
                    aria-hidden='true'
                    className='text-slate-300 dark:text-slate-600 group-hover:text-blue-500 transition-colors duration-300'>
                    0{index + 1}
                  </span>
                </div>
                <h3 className='text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors mb-2'>
                  {calc.name}
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400 leading-relaxed'>
                  {calc.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by category */}
      <div className='bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800'>
        <div className='container py-5'>
          <div className='flex flex-wrap items-center gap-3'>
            <span className='text-xs font-semibold text-slate-400 uppercase tracking-wider'>Browse by:</span>
            {categories.map((cat) => (
              <Link
                key={cat.label}
                href={cat.href}
                className='px-4 py-1.5 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-all'>
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Blogs & articles */}
      <section className='py-0 relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.1),transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.08),transparent_38%)] bg-white dark:bg-slate-950'>
        <div className='container py-14'>
          <div className='flex flex-wrap items-end justify-between gap-4 mb-8'>
            <div>
              <span className='inline-flex items-center rounded-full border border-cyan-200 dark:border-cyan-800 bg-cyan-50/70 dark:bg-cyan-950/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 mb-3'>
                Learn & Improve
              </span>
              <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white'>Blogs & Articles</h2>
              <p className='text-sm md:text-base text-slate-600 dark:text-slate-400 mt-1'>
                Practical money guides to help you make better financial decisions.
              </p>
            </div>
            <Link
              href='/blog'
              className='inline-flex items-center rounded-full border border-cyan-200 dark:border-cyan-800 bg-white/90 dark:bg-slate-900 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 transition-colors'>
              Visit blog
              <span className='ml-2'>→</span>
            </Link>
          </div>

          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {blogPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className='group rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 overflow-hidden shadow-[0_12px_30px_-20px_rgba(15,23,42,0.65)] hover:-translate-y-1 hover:shadow-[0_20px_36px_-20px_rgba(14,116,144,0.5)] transition-all duration-300'>
                <div className='relative w-full h-40 overflow-hidden'>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent' />
                  <span className='absolute bottom-3 left-3 inline-block rounded-full bg-white/90 dark:bg-slate-900/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-cyan-700 dark:text-cyan-300 backdrop-blur-sm'>
                    {post.tag}
                  </span>
                </div>
                <div className='p-4'>
                  <h3 className='text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors mb-1.5 leading-snug'>
                    {post.title}
                  </h3>
                  <p className='text-sm text-slate-600 dark:text-slate-400 leading-relaxed'>
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-0 relative overflow-hidden bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800'>
        <div className='pointer-events-none absolute -top-16 right-0 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-900/30' />
        <div className='container py-14'>
          <div className='max-w-3xl'>
            <span className='inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50/70 dark:bg-blue-900/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-3'>
              Support Center
            </span>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2'>Frequently Asked Questions</h2>
            <p className='text-sm md:text-base text-slate-600 dark:text-slate-400 mb-7'>
              Quick answers to the most common questions about calculator accuracy, privacy, and usage.
            </p>

            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-0 bg-white dark:bg-slate-950'>
        <div className='container py-12'>
          <div className='relative overflow-hidden rounded-3xl border border-blue-200/70 dark:border-blue-800 bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-600 px-6 py-10 md:px-10 md:py-12'>
            <div className='pointer-events-none absolute -top-20 -right-12 h-56 w-56 rounded-full bg-white/20 blur-3xl' />
            <div className='pointer-events-none absolute -bottom-24 -left-10 h-52 w-52 rounded-full bg-cyan-200/35 blur-3xl' />
            <div className='relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
              <div className='max-w-2xl'>
                <p className='text-xs md:text-sm uppercase tracking-[0.2em] text-blue-100 font-semibold mb-3'>
                  Ready to plan smarter?
                </p>
                <h3 className='text-2xl md:text-4xl font-bold text-white mb-3 leading-tight'>
                  Run your first financial scenario in under 60 seconds.
                </h3>
                <p className='text-blue-100 text-sm md:text-base leading-relaxed'>
                  Use our free calculators to compare loans, estimate returns, and build your money plan with confidence.
                </p>
              </div>
              <div className='flex flex-wrap gap-3'>
                <Link
                  href='/loan-emi'
                  className='inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-blue-700 hover:bg-blue-50 transition-colors'>
                  Start with EMI Calculator
                </Link>
                <Link
                  href='/contact'
                  className='inline-flex items-center justify-center rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors'>
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
