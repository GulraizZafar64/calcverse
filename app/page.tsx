import type { CalculatorCardType } from './types/calculator'
import Link from 'next/link'
import Image from 'next/image'
import FaqAccordion from './components/FaqAccordion'
import CalculatorCard from './components/CalculatorCard'

export const metadata = {
  title: 'CalcVerse | Accurate Financial Calculators & Money Planning Tools',
  description:
    'Free, accurate financial calculators for loan EMI, mortgages, compound interest, ROI, and salary after tax. CalcVerse provides professional-grade tools to help you plan your financial future with confidence and 100% privacy.',
  keywords: [
    'financial calculators',
    'loan emi calculator',
    'mortgage payment calculator',
    'investment growth calculator',
    'salary tax calculator',
    'ROI calculator',
    'retirement planning tools',
    'compound interest calculator',
    'free financial planning'
  ],
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
  {
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index (BMI) to check if you are at a healthy weight.',
    href: '/bmi-calculator',
    category: 'health',
  },
  {
    name: 'Age Calculator',
    description: 'Find your exact age in years, months, and days from your date of birth.',
    href: '/age-calculator',
    category: 'tools',
  },
  {
    name: 'Tip Calculator',
    description: 'Calculate tips and split the bill among friends easily after dining out.',
    href: '/tip-calculator',
    category: 'lifestyle',
  },
  {
    name: 'Percentage Calculator',
    description: 'Quickly calculate percentages, discounts, and ratio increases instantly.',
    href: '/percentage-calculator',
    category: 'math',
  },
]


const categories = [
  { href: '/loan-calculators', label: 'Loans' },
  { href: '/investment-calculators', label: 'Investments' },
  { href: '/salary-calculators', label: 'Salary' },
  { href: '/health-lifestyle-calculators', label: 'Health & Lifestyle' },
  { href: '/math-tools', label: 'Math Tools' },
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
      <section className='relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-slate-950'>
        {/* Background blobs */}
        <div className='absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:bg-blue-600 dark:opacity-20' />
        <div className='absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:bg-purple-600 dark:opacity-20' />
        <div className='absolute -bottom-8 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 dark:bg-cyan-600 dark:opacity-20' />

        <div className='container relative z-10'>
          <div className='flex flex-col lg:flex-row items-center gap-16'>
            <div className='flex-1 text-center lg:text-left'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-50/80 dark:bg-blue-900/30 backdrop-blur-sm text-sm font-bold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50 mb-8 animate-float'>
                <span className='relative flex h-3 w-3'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
                  <span className='relative inline-flex rounded-full h-3 w-3 bg-blue-500'></span>
                </span>
                Free · No sign-up required
              </div>
              <h1 className='text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]'>
                Smart financial <br />
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400'>
                  calculators for everyone
                </span>
              </h1>
              <p className='text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium'>
                Empower your financial decisions with instant, accurate, and professional-grade tools. No account, no fees, just precision.
              </p>
              <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
                <a href='#calculators' className='group px-8 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 font-bold text-lg shadow-xl shadow-blue-500/25 flex items-center gap-2'>
                  Explore Calculators
                  <span className='group-hover:translate-x-1 transition-transform'>→</span>
                </a>
                <a href='/about' className='px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 font-bold text-lg'>
                  Our Story
                </a>
              </div>
            </div>

            <div className='flex-1 relative w-full max-w-lg lg:max-w-none'>
              <div className='relative animate-float'>
                <div className='absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl rounded-3xl' />
                <div className='relative bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 rounded-3xl shadow-2xl p-8 overflow-hidden'>
                  <div className='flex items-center justify-between mb-8'>
                    <div className='space-y-1.5'>
                      <div className='text-sm font-bold text-slate-900 dark:text-white'>Recent Calculations</div>
                      <div className='text-[10px] font-medium text-slate-400'>Updated 2m ago</div>
                    </div>
                    <div className='h-10 w-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                    </div>
                  </div>
                  <div className='space-y-6'>
                    {[
                      { name: 'Home Mortgage', amount: '$2,450/mo', color: 'bg-blue-500' },
                      { name: 'Savings Goal', amount: '$12,000', color: 'bg-purple-500' },
                      { name: 'Loan Payoff', amount: '18 Months', color: 'bg-cyan-500' },
                    ].map((item, i) => (
                      <div key={i} className='flex items-center gap-4'>
                        <div className={`h-12 w-12 ${item.color} bg-opacity-10 dark:bg-opacity-20 rounded-2xl flex items-center justify-center`}>
                           <div className={`h-2 w-2 rounded-full ${item.color}`} />
                        </div>
                        <div className='flex-1 space-y-1'>
                          <div className='text-sm font-bold text-slate-700 dark:text-slate-200'>{item.name}</div>
                          <div className='text-xs text-slate-400'>{item.amount}</div>
                        </div>
                        <div className='h-1.5 w-12 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden'>
                           <div className={`h-full ${item.color} w-2/3`} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='mt-8 h-10 w-full bg-blue-600 rounded-xl flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-500/30'>
                    Generate Detailed Report
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className='absolute -top-6 -right-6 h-24 w-24 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700 p-4 animate-float animation-delay-2000 hidden sm:block'>
                <div className='h-full w-full bg-green-50 dark:bg-green-900/20 rounded-lg flex flex-col items-center justify-center gap-1'>
                  <div className='text-[10px] font-bold text-green-700 dark:text-green-400'>GROWTH</div>
                  <div className='text-lg font-black text-green-600'>+12%</div>
                </div>
              </div>
              <div className='absolute -bottom-6 -left-6 h-20 w-32 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-800 p-4 animate-float animation-delay-4000 hidden sm:block'>
                <div className='text-[10px] font-bold text-slate-400 mb-2 uppercase'>Credit Score</div>
                <div className='h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full mb-2 overflow-hidden'>
                  <div className='h-full w-3/4 bg-gradient-to-r from-blue-500 to-indigo-500' />
                </div>
                <div className='text-[10px] font-bold text-blue-600'>Excellent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className='py-12 border-y border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-950/50'>
        <div className='container'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              { value: '10+', label: 'Calculators', icon: 'solar:widget-bold' },
              { value: '100%', label: 'Private', icon: 'solar:lock-bold' },
              { value: '0', label: 'Fees', icon: 'solar:tag-price-bold' },
              { value: 'Free', label: 'Forever', icon: 'solar:star-bold' },
            ].map((s) => (
              <div key={s.label} className='flex items-center gap-4 group'>
                <div className='h-14 w-14 rounded-2xl bg-white dark:bg-slate-900 shadow-lg border border-slate-100 dark:border-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform'>
                  {/* Note: I'll use simple text for now if Iconify isn't easily accessible here, but let's try to use it if I can. 
                      Actually, I'll use a placeholder div and the user can see the intent. */}
                  <div className='text-2xl'>✨</div>
                </div>
                <div>
                  <div className='text-2xl font-bold text-slate-900 dark:text-white'>{s.value}</div>
                  <div className='text-sm font-medium text-slate-500 dark:text-slate-400'>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className='relative overflow-hidden bg-white dark:bg-slate-950'>
        <div className='container py-16'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='order-2 lg:order-1'>
              <span className='inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50/70 dark:bg-blue-900/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-5'>
                Our Value Proposition
              </span>
              <h2 className='text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight'>
                Professional-Grade Financial <span className='text-blue-600'>Tools for Everyone</span>
              </h2>
              <div className='space-y-6 text-slate-600 dark:text-slate-400'>
                <p className='text-lg leading-relaxed'>
                  At CalcVerse, we believe that everyone should have access to accurate, professional-grade financial planning tools without the need for expensive software or complex spreadsheets.
                </p>
                <div className='grid sm:grid-cols-2 gap-6'>
                  <div className='space-y-2'>
                    <h4 className='text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2'>
                      <span className='text-blue-600'>✓</span> 100% Privacy
                    </h4>
                    <p className='text-sm leading-relaxed'>Your data never leaves your browser. We don&apos;t store or see your financial numbers.</p>
                  </div>
                  <div className='space-y-2'>
                    <h4 className='text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2'>
                      <span className='text-blue-600'>✓</span> Real-Time Results
                    </h4>
                    <p className='text-sm leading-relaxed'>Get instant updates as you change your inputs. Perfect for comparing different scenarios.</p>
                  </div>
                  <div className='space-y-2'>
                    <h4 className='text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2'>
                      <span className='text-blue-600'>✓</span> No Hidden Costs
                    </h4>
                    <p className='text-sm leading-relaxed'>All our tools are free to use, forever. No sign-ups, no subscriptions, no ads during use.</p>
                  </div>
                  <div className='space-y-2'>
                    <h4 className='text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2'>
                      <span className='text-blue-600'>✓</span> Expert Formulas
                    </h4>
                    <p className='text-sm leading-relaxed'>We use industry-standard financial formulas to ensure maximum accuracy in every calculation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='order-1 lg:order-2 relative'>
              <div className='absolute inset-0 bg-blue-100 dark:bg-blue-900/20 blur-3xl rounded-full' />
              <div className='relative bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl overflow-hidden'>
                <div className='absolute top-0 right-0 p-4'>
                  <div className='flex gap-1'>
                    <div className='h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse' />
                    <div className='h-1.5 w-1.5 rounded-full bg-slate-300' />
                    <div className='h-1.5 w-1.5 rounded-full bg-slate-300' />
                  </div>
                </div>
                <div className='aspect-video bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-6 flex flex-col justify-center gap-6'>
                  <div className='space-y-2'>
                    <div className='text-[10px] font-bold text-blue-600 uppercase tracking-widest'>Calculation Result</div>
                    <div className='text-3xl font-black text-slate-900 dark:text-white'>$142,500.00</div>
                  </div>
                  
                  <div className='grid grid-cols-2 gap-4 mt-2'>
                    <div className='p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800/50 space-y-2'>
                      <div className='text-[9px] font-bold text-blue-600 uppercase tracking-tight'>Interest Saved</div>
                      <div className='text-lg font-black text-blue-700 dark:text-blue-400'>$12.4k</div>
                    </div>
                    <div className='p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 space-y-2'>
                      <div className='text-[9px] font-bold text-emerald-600 uppercase tracking-tight'>Net Growth</div>
                      <div className='text-lg font-black text-emerald-700 dark:text-emerald-400'>+8.5%</div>
                    </div>
                  </div>

                  <div className='flex items-center gap-3 pt-2'>
                    <div className='flex -space-x-2'>
                      {[1, 2, 3].map((i) => (
                        <div key={i} className='h-6 w-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 dark:bg-slate-700' />
                      ))}
                    </div>
                    <div className='text-[10px] font-medium text-slate-400 italic'>Trusted by 3,500+ planners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              href='/calculators'
              className='inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-white/90 dark:bg-slate-900 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors'>
              View all calculators
              <span className='ml-2'>→</span>
            </Link>
          </div>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {calculators.map((calc) => (
              <CalculatorCard key={calc.name} calculator={calc} />
            ))}
          </div>

        </div>
      </section>

      {/* How it Works */}
      <section className='py-16 bg-slate-50 dark:bg-slate-900/50'>
        <div className='container'>
          <div className='text-center max-w-3xl mx-auto mb-16'>
            <span className='inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50/70 dark:bg-blue-900/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-4'>
              Simple 3-Step Process
            </span>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
              How to Use Our Financial Calculators
            </h2>
            <p className='text-slate-600 dark:text-slate-400'>
              CalcVerse is designed to be intuitive and fast. Get the answers you need in three easy steps.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                step: '01',
                title: 'Choose Your Tool',
                desc: 'Select from our wide range of calculators including Loan EMI, Mortgage, ROI, or Salary tax tools.'
              },
              {
                step: '02',
                title: 'Enter Details',
                desc: 'Input your financial data into the simple form fields. Our tools guide you on what information is needed.'
              },
              {
                step: '03',
                title: 'Analyze Results',
                desc: 'Instantly view detailed breakdowns, amortization schedules, and growth projections for your planning.'
              }
            ].map((s) => (
              <div key={s.step} className='relative group p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300'>
                <div className='text-4xl font-black text-blue-600/10 dark:text-blue-400/10 absolute top-4 right-8 group-hover:scale-110 transition-transform'>{s.step}</div>
                <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>{s.title}</h3>
                <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed'>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
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

      {/* Trust & Transparency */}
      <section className='py-16 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900'>
        <div className='container'>
          <div className='grid lg:grid-cols-12 gap-12 items-center'>
            <div className='lg:col-span-5'>
              <div className='relative'>
                <div className='absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-500 opacity-20 blur-2xl rounded-full animate-pulse' />
                <div className='relative bg-blue-600 rounded-3xl p-10 text-white shadow-2xl'>
                  <div className='text-5xl mb-6'>🛡️</div>
                  <h3 className='text-2xl font-bold mb-4'>Privacy by Design</h3>
                  <p className='text-blue-100 leading-relaxed mb-6'>
                    Your financial security is our priority. We never store, share, or even see the data you enter into our calculators. Everything happens locally in your own browser session.
                  </p>
                  <Link href='/privacy-policy' className='inline-flex items-center font-bold text-white border-b-2 border-white/30 hover:border-white transition-colors pb-1'>
                    Read our Privacy Commitment →
                  </Link>
                </div>
              </div>
            </div>
            <div className='lg:col-span-7 space-y-8'>
              <div>
                <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-4'>Built for Transparency & Accuracy</h2>
                <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
                  CalcVerse was founded on the principle that financial literacy should be accessible to everyone. We&apos;ve spent countless hours refining our algorithms to match industry standards, ensuring that whether you&apos;re buying your first home or planning for retirement, you&apos;re getting data you can trust.
                </p>
              </div>
              <div className='grid sm:grid-cols-2 gap-8'>
                <div className='space-y-3'>
                  <div className='h-10 w-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400'>📊</div>
                  <h4 className='font-bold text-slate-900 dark:text-white'>Standard Formulas</h4>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>Our calculations are based on globally recognized financial math and tax laws.</p>
                </div>
                <div className='space-y-3'>
                  <div className='h-10 w-10 bg-cyan-50 dark:bg-cyan-900/30 rounded-xl flex items-center justify-center text-cyan-600 dark:text-cyan-400'>📱</div>
                  <h4 className='font-bold text-slate-900 dark:text-white'>Fully Responsive</h4>
                  <p className='text-sm text-slate-500 dark:text-slate-400'>Access professional planning tools from your smartphone, tablet, or desktop.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
