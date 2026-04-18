export const metadata = {
  title: 'Privacy Policy | CalcVerse Financial Tools',
  description: 'Read the privacy policy for CalcVerse and how we handle user data with a focus on privacy and transparency.',
}

const PrivacyPolicyPage = () => {
  return (
    <main className='container py-20'>
      <section className='space-y-6'>
        <p className='inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400'>Legal Information</p>
        <h1 className='text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl tracking-tight'>Privacy Policy</h1>
        <p className='max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400'>Last updated: {new Date().toLocaleDateString()}. At CalcVerse, we are committed to protecting your privacy and ensuring you have a positive experience on our website.</p>
      </section>

      <section className='mt-12 space-y-8 max-w-4xl'>
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>1. Introduction</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-4'>
            CalcVerse ("we", "our", or "us") operates https://calcverse.site (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Site and the choices you have associated with that data.
          </p>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>
            By using the Site, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>2. Information Collection and Use</h2>
          <div className='space-y-6 text-slate-600 dark:text-slate-400 text-lg'>
            <div>
              <h3 className='font-bold text-slate-900 dark:text-white mb-2'>Calculator Data</h3>
              <p>Our financial calculators are designed to be "privacy-first". All calculations are performed locally in your web browser. We do not transmit, store, or see any of the numerical data you enter into our tools (e.g., loan amounts, interest rates, salary details).</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 dark:text-white mb-2'>Log Data</h3>
              <p>Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
            </div>
          </div>
        </div>

        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>3. Cookies and Tracking Technologies</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-4'>
            We use cookies and similar tracking technologies to track the activity on our Site and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
          </p>
          <h3 className='font-bold text-slate-900 dark:text-white mb-2'>Google AdSense & DoubleClick Cookie</h3>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-4'>
            Google, as a third-party vendor, uses cookies to serve ads on our Site. Google's use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our Site or other websites on the Internet.
          </p>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>
            You may opt out of the use of the DoubleClick cookie for interest-based advertising by visiting the <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline">Google Ads Settings</a> web page.
          </p>
        </div>

        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>4. Service Providers</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>
            We may employ third-party companies and individuals to facilitate our Site ("Service Providers"), to provide the Site on our behalf, to perform Site-related services or to assist us in analyzing how our Site is used (e.g., Google Analytics). These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </div>

        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>5. Security</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </div>

        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>6. Changes to This Privacy Policy</h2>
          <p className='text-slate-600 dark:text-slate-400 text-lg leading-relaxed'>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </div>

        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>7. Contact Us</h2>
          <div className='space-y-4 text-slate-600 dark:text-slate-400 text-lg'>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <p><strong>Email:</strong> contact@calcverse.site</p>
            <p><strong>Website:</strong> https://calcverse.site/contact</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicyPage
