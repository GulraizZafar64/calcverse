export const metadata = {
  title: 'Terms of Service | CalcVerse Financial Tools',
  description: 'Review the terms and conditions for using the CalcVerse financial calculators and website.',
}

const TermsOfServicePage = () => {
  return (
    <main className='container py-20'>
      <section className='space-y-6'>
        <p className='inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400'>Legal Information</p>
        <h1 className='text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl tracking-tight'>Terms of Service</h1>
        <p className='max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400'>Last updated: {new Date().toLocaleDateString()}. Please read these Terms of Service carefully before using the https://calcverse.site website.</p>
      </section>

      <section className='mt-12 space-y-8 max-w-4xl'>
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>1. Acceptance of Terms</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>
            By accessing or using CalcVerse, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the website or use our services. These terms apply to all visitors, users, and others who access or use the Site.
          </p>
        </div>

        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>2. Use of Calculators</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-4'>
            The calculators provided on CalcVerse are for informational and educational purposes only. While we strive for accuracy, the results provided by our tools are estimates and should not be considered financial, legal, or tax advice.
          </p>
          <div className='p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border-l-4 border-blue-600 text-slate-700 dark:text-slate-300'>
            <strong>Disclaimer:</strong> Always consult with a qualified financial advisor, accountant, or legal professional before making significant financial decisions based on the results of our calculators.
          </div>
        </div>

        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>3. Intellectual Property</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>
            The Site and its original content, features, and functionality are and will remain the exclusive property of CalcVerse and its licensors. Our branding, logos, and custom code are protected by copyright, trademark, and other laws.
          </p>
        </div>

        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>4. Limitation of Liability</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>
            In no event shall CalcVerse, nor its directors, employees, partners, or agents, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Site.
          </p>
        </div>

        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>5. External Links</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>
            Our Site may contain links to third-party web sites or services that are not owned or controlled by CalcVerse. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
          </p>
        </div>

        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>6. Governing Law</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which CalcVerse operates, without regard to its conflict of law provisions.
          </p>
        </div>

        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>7. Contact Us</h2>
          <div className='space-y-4 text-slate-600 dark:text-slate-400 text-lg'>
            <p>If you have any questions about these Terms, please contact us:</p>
            <p><strong>Email:</strong> contact@calcverse.site</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TermsOfServicePage
