export const metadata = {
  title: 'Terms of Service | CalcVerse Financial Tools',
  description: 'Review the terms and conditions for using CalcVerse financial calculators.',
}

const TermsOfServicePage = () => {
  return (
    <main className='container py-20'>
      <section className='space-y-6'>
        <p className='inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400'>Legal</p>
        <h1 className='text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl tracking-tight'>Terms of Service</h1>
        <p className='max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400'>Last updated: {new Date().toLocaleDateString()}. By using CalcVerse, you agree to these terms. Please read them carefully.</p>
      </section>
      <section className='mt-12 space-y-8'>
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>1. Acceptance of Terms</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>By accessing and using CalcVerse, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
        </div>
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>2. Description of Services</h2>
          <div className='space-y-4 text-slate-600 dark:text-slate-400 text-lg'>
            <p>CalcVerse provides free, high-accuracy financial calculator tools designed for planning and educational purposes. All calculations are performed client-side in your browser.</p>
          </div>
        </div>
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>3. Accuracy and Disclaimer</h2>
          <div className='space-y-4 text-slate-600 dark:text-slate-400 text-lg'>
            <p><strong>Not Financial Advice:</strong> The results provided by CalcVerse do not constitute financial, tax, legal, or investment advice. They are estimates meant for general informational purposes only.</p>
            <p><strong>Consult Professionals:</strong> You should always consult with qualified professionals before making significant financial decisions.</p>
          </div>
        </div>
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>4. Contact Information</h2>
          <div className='space-y-4 text-slate-600 dark:text-slate-400 text-lg'>
            <p>If you have questions about these Terms of Service, please contact the CalcVerse team:</p>
            <p>Email: contact@calcverse.site</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TermsOfServicePage
