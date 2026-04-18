export const metadata = {
  title: 'About CalcVerse | Professional Financial Planning Tools',
  description: 'Learn about CalcVerse, our mission to provide accurate financial calculators, and how we help users make informed money decisions through professional-grade tools.',
}

const AboutPage = () => {
  return (
    <main className='container py-20'>
      <section className='grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:items-center'>
        <div>
          <p className='inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400'>
            Our Story
          </p>
          <h1 className='mt-6 text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1]'>
            Empowering Your Financial Future with <span className="text-blue-600">Precision and Clarity</span>
          </h1>
          <p className='mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400'>
            At CalcVerse, we believe that financial literacy should be accessible to everyone. Our mission is to provide professional-grade financial tools that simplify complex calculations, helping you plan for loans, investments, mortgages, and taxes with absolute confidence.
          </p>
          <p className='mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400'>
            Since our inception, we have focused on building tools that are not just numbers-oriented but educational. We want our users to understand the "how" and "why" of their financial projections.
          </p>
        </div>
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>The CalcVerse Advantage</h2>
          <ul className='space-y-4 text-slate-600 dark:text-slate-400 text-lg'>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Industry-standard mathematical accuracy
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Privacy-focused client-side calculations
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Zero-registration required for all tools
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Optimized for mobile, tablet, and desktop
            </li>
          </ul>
        </div>
      </section>

      <section className='mt-24 grid gap-10 lg:grid-cols-3'>
        <div className='rounded-3xl border border-slate-100 bg-slate-50/50 p-10 dark:border-slate-800 dark:bg-slate-900/50 hover:border-blue-500/20 transition-colors'>
          <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>Our Mission</h3>
          <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
            To demystify personal finance by providing clear, accurate, and educational calculators. We aim to help users visualize their financial path, whether they are buying a home, planning for retirement, or managing debt.
          </p>
        </div>
        <div className='rounded-3xl border border-slate-100 bg-slate-50/50 p-10 dark:border-slate-800 dark:bg-slate-900/50 hover:border-blue-500/20 transition-colors'>
          <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>Why Trust CalcVerse?</h3>
          <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
            Our algorithms are developed using the same rigorous financial formulas used by major banks and financial institutions. Every calculator is cross-verified against multiple sources to ensure reliability.
          </p>
        </div>
        <div className='rounded-3xl border border-slate-100 bg-slate-50/50 p-10 dark:border-slate-800 dark:bg-slate-900/50 hover:border-blue-500/20 transition-colors'>
          <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>Our Commitment</h3>
          <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
            We are committed to maintaining a clean, ad-supported (but not intrusive) experience. Your data privacy is our top priority, which is why all calculations happen right in your browser.
          </p>
        </div>
      </section>

      <section className='mt-24 rounded-3xl bg-blue-600 p-12 lg:p-20 text-white'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl lg:text-5xl font-bold mb-8'>Ready to take control of your finances?</h2>
          <p className='text-xl text-blue-100 mb-10 leading-relaxed'>
            Join thousands of users who trust CalcVerse for their daily financial planning. Our tools are free, fast, and always accurate.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a href='/' className='px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors'>
              Explore Calculators
            </a>
            <a href='/contact' className='px-8 py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors border border-blue-500'>
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
