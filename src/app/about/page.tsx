export const metadata = {
  title: 'About CalcVerse | Professional Financial Planning Tools',
  description: 'Learn about CalcVerse, our mission to provide accurate financial calculators, and how we help users make informed money decisions.',
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
        </div>
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>The CalcVerse Advantage</h2>
          <ul className='space-y-4 text-slate-600 dark:text-slate-400 text-lg'>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Industry-standard accuracy
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Privacy-focused calculations
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Zero-registration required
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              Fully responsive experience
            </li>
          </ul>
        </div>
      </section>
      <section className='mt-24 grid gap-10 lg:grid-cols-3'>
        <div className='rounded-3xl border border-slate-100 bg-slate-50/50 p-10 dark:border-slate-800 dark:bg-slate-900/50 hover:border-blue-500/20 transition-colors'>
          <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>Our Mission</h3>
          <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
            To demystify finance by providing clear, accurate, and educational calculators that explain the "why" behind the numbers.
          </p>
        </div>
        <div className='rounded-3xl border border-slate-100 bg-slate-50/50 p-10 dark:border-slate-800 dark:bg-slate-900/50 hover:border-blue-500/20 transition-colors'>
          <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>Why Trust Us?</h3>
          <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
            Our tools are built by financial enthusiasts using standard mathematical models used by banks and investment firms globally.
          </p>
        </div>
        <div className='rounded-3xl border border-slate-100 bg-slate-50/50 p-10 dark:border-slate-800 dark:bg-slate-900/50 hover:border-blue-500/20 transition-colors'>
          <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-4'>Innovation</h3>
          <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
            We continuously update our algorithms and user interface to ensure you have the best tools for modern financial planning.
          </p>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
