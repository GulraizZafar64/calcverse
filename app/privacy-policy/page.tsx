export const metadata = {
  title: 'Privacy Policy | CalcVerse Financial Tools',
  description: 'Read the privacy policy for CalcVerse and how we handle user data with a focus on privacy.',
}

const PrivacyPolicyPage = () => {
  return (
    <main className='container py-20'>
      <section className='space-y-6'>
        <p className='inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400'>Privacy Policy</p>
        <h1 className='text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl tracking-tight'>Privacy Policy for CalcVerse</h1>
        <p className='max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400'>Last updated: {new Date().toLocaleDateString()}. Your privacy is paramount. This policy explains how CalcVerse protects your data while providing professional financial tools.</p>
      </section>
      <section className='mt-12 space-y-8'>
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>Information We Collect</h2>
          <div className='space-y-4 text-slate-600 dark:text-slate-400 text-lg'>
            <p><strong>Calculator Usage:</strong> CalcVerse is designed with a "client-side" architecture. All calculations are performed locally in your browser. We do not store, collect, or transmit any financial data you enter into our calculators.</p>
            <p><strong>Contact Information:</strong> When you reach out via our contact form, we collect your name and email address solely to address your inquiry.</p>
            <p><strong>Analytics Data:</strong> We use industry-standard analytics tools to understand site performance and user behavior to improve our tools. This data is anonymized.</p>
          </div>
        </div>
        
        {/* ... (Keeping other sections but with updated styling) ... */}
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>Cookies and AdSense</h2>
          <div className='space-y-4 text-slate-600 dark:text-slate-400 text-lg'>
            <p>CalcVerse uses cookies to enhance user experience and for Google AdSense to serve relevant advertisements. Google's use of advertising cookies enables it and its partners to serve ads based on your visits to our site and other sites on the Internet.</p>
            <p>You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline">Ads Settings</a>.</p>
          </div>
        </div>

        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>Contact Us</h2>
          <div className='space-y-4 text-slate-600 dark:text-slate-400 text-lg'>
            <p>If you have questions about this Privacy Policy, please contact the CalcVerse team:</p>
            <p>Email: contact@calcverse.site<br />
            Website: https://calcverse.site</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicyPage
