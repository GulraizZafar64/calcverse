import ContactForm from '../components/ContactForm'

export const metadata = {
  title: 'Contact CalcVerse | We are Here to Help',
  description: 'Have questions about our financial calculators or need support? Reach out to the CalcVerse team.',
}

const ContactPage = () => {
  return (
    <main className='container py-20'>
      <section className='grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:items-start'>
        <div>
          <p className='inline-flex rounded-full bg-blue-100 dark:bg-blue-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-400'>
            Connect
          </p>
          <h1 className='mt-6 text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1]'>
            Get in Touch with the <span className="text-blue-600">CalcVerse Team</span>
          </h1>
          <p className='mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400'>
            Have a question about a specific calculator formula? Or maybe you have a suggestion for a new tool? We'd love to hear from you. Our team typically responds within 24 hours.
          </p>
        </div>
        <div className='rounded-3xl border border-slate-100 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>Contact Information</h2>
          <div className='space-y-6 text-slate-600 dark:text-slate-400 text-lg'>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap='round' strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Email Us</p>
                <p>contact@calcverse.site</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Business Hours</p>
                <p>Mon - Fri: 9AM - 5PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-24'>
        <div className='max-w-3xl mx-auto rounded-3xl border border-slate-100 bg-white p-10 shadow-2xl dark:border-slate-800 dark:bg-slate-900'>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Send us a Message</h2>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}

export default ContactPage
