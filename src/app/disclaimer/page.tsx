export const metadata = {
  title: 'Disclaimer | CalcVerse Financial Tools',
  description: 'Important disclaimer regarding the use of CalcVerse financial calculators and results.',
}

const DisclaimerPage = () => {
  return (
    <main className='container py-20'>
      <section className='space-y-6'>
        <p className='inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400'>Disclaimer</p>
        <h1 className='text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl tracking-tight'>Financial Disclaimer</h1>
        <p className='max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400'>Last updated: {new Date().toLocaleDateString()}. Please read this disclaimer carefully before using CalcVerse tools.</p>
      </section>
      <section className='mt-12 space-y-8'>
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>1. Educational Purpose Only</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>All calculators on CalcVerse are provided for educational and informational purposes only. They are designed to help you understand financial concepts and make preliminary estimates.</p>
        </div>
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>2. Not Professional Advice</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'><strong>CalcVerse is not a financial advisor.</strong> We do not provide personalized financial, tax, or legal advice. Always consult with a qualified professional before making significant financial decisions.</p>
        </div>
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>3. Accuracy of Results</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>While we strive for high accuracy, the results provided by our tools are estimates. Actual financial outcomes may vary based on market conditions, individual creditworthiness, and other variables.</p>
        </div>
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>4. Contact Information</h2>
          <div className='space-y-4 text-slate-600 dark:text-slate-400 text-lg'>
            <p>If you have questions about this disclaimer, please contact us:</p>
            <p>Email: contact@calcverse.site</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DisclaimerPage
