import CalculatorCard from '@/app/components/CalculatorCard'
import type { CalculatorCardType } from '@/app/types/calculator'
import FaqAccordion from '@/app/components/FaqAccordion'
import Link from 'next/link'

export const metadata = {
  title: 'Health & Lifestyle Calculators | CalcVerse Tools',
  description: 'Manage your health and lifestyle with our professional calculators. From BMI to tip splitting, we have the tools you need.',
}

const healthCalculators: CalculatorCardType[] = [
  {
    name: 'BMI Calculator',
    description: 'Calculate your Body Mass Index (BMI) and understand your health category.',
    href: '/bmi-calculator',
    category: 'health',
  },
  {
    name: 'Tip Calculator',
    description: 'Easily calculate tips and split bills among friends for dining and services.',
    href: '/tip-calculator',
    category: 'lifestyle',
  },
  {
    name: 'Age Calculator',
    description: 'Find your exact age in years, months, and days from your birth date.',
    href: '/age-calculator',
    category: 'tools',
  },
]

const healthFaqs = [
  {
    q: 'What is BMI?',
    a: 'Body Mass Index (BMI) is a person’s weight in kilograms divided by the square of height in meters. It is an inexpensive and easy screening method for weight category.',
  },
  {
    q: 'How does the tip calculator work?',
    a: 'Enter your total bill amount, the percentage you want to tip, and the number of people to split with. We’ll do the math for you instantly.',
  },
  {
    q: 'Is my age data stored?',
    a: 'No. Like all our tools, the age calculator runs entirely in your browser. We never store your birth date or any other personal information.',
  },
]

const HealthLifestylePage = () => {
  return (
    <main className='relative overflow-hidden'>
      {/* Background Blobs */}
      <div className='absolute top-0 -left-4 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:bg-rose-600 dark:opacity-10' />
      <div className='absolute top-0 -right-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:bg-orange-600 dark:opacity-10' />

      <section className='container pt-32 pb-16 relative z-10'>
        <div className='max-w-4xl'>
          <p className='inline-flex rounded-full bg-rose-100 dark:bg-rose-900/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-rose-600 dark:text-rose-400'>
            Daily Utility
          </p>
          <h1 className='mt-6 text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight'>
            Tools for <span className="text-rose-600">Daily Life</span> <br />
            & Well-being.
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400 font-medium'>
            Our health and lifestyle calculators are designed to help you make quick, informed decisions in your everyday life. Whether you're tracking your fitness goals or splitting a bill with friends, we've got you covered.
          </p>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className='container pb-20'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {healthCalculators.map((calculator) => (
            <CalculatorCard key={calculator.name} calculator={calculator} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className='bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-100 dark:border-slate-800'>
        <div className='container'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6'>
                Simple Tools, Significant Impact
              </h2>
              <div className='space-y-8'>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-rose-600 flex items-center justify-center text-white text-xl shadow-lg shadow-rose-500/30'>
                    🍎
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>Health Tracking</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Monitor key health metrics like BMI to stay on top of your wellness journey.</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-orange-600 flex items-center justify-center text-white text-xl shadow-lg shadow-orange-500/30'>
                    🍴
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>Social Ease</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Remove the awkwardness of bill splitting with our fast and accurate tip calculator.</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-600 flex items-center justify-center text-white text-xl shadow-lg shadow-amber-500/30'>
                    ⏳
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>Precise Timekeeping</h3>
                    <p className='text-slate-600 dark:text-slate-400'>Know exactly how long you've been on this planet with our detailed age calculator.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div className='absolute inset-0 bg-rose-500/10 blur-3xl rounded-full' />
              <div className='relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl'>
                 <div className='space-y-6'>
                    <div className='flex items-center justify-between'>
                      <div className='text-sm font-bold text-slate-900 dark:text-white'>Health Score</div>
                      <div className='flex gap-1'>
                        <div className='h-2 w-2 rounded-full bg-rose-500 animate-pulse' />
                      </div>
                    </div>
                    <div className='flex items-center justify-center py-4'>
                       <div className='relative h-32 w-32'>
                          <svg className='h-full w-full -rotate-90' viewBox='0 0 36 36'>
                            <circle cx='18' cy='18' r='16' fill='none' className='stroke-slate-100 dark:stroke-slate-800' strokeWidth='3' />
                            <circle cx='18' cy='18' r='16' fill='none' className='stroke-rose-600' strokeWidth='3' strokeDasharray='75, 100' strokeLinecap='round' />
                          </svg>
                          <div className='absolute inset-0 flex flex-col items-center justify-center'>
                             <div className='text-2xl font-black text-slate-900 dark:text-white'>24.5</div>
                             <div className='text-[10px] font-bold text-rose-600 uppercase tracking-widest'>Normal</div>
                          </div>
                       </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                       {[
                         { label: 'Hydration', value: '80%', color: 'bg-blue-500' },
                         { label: 'Activity', value: '65%', color: 'bg-orange-500' },
                       ].map((item, i) => (
                         <div key={i} className='p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700'>
                            <div className='text-[10px] font-bold text-slate-400 uppercase mb-1'>{item.label}</div>
                            <div className='flex items-center gap-2'>
                               <div className={`h-1.5 flex-1 ${item.color} bg-opacity-20 rounded-full overflow-hidden`}>
                                  <div className={`h-full ${item.color}`} style={{ width: item.value }} />
                               </div>
                               <div className='text-xs font-bold text-slate-700 dark:text-slate-200'>{item.value}</div>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='container py-20'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            Common Questions
          </h2>
          <p className='text-slate-600 dark:text-slate-400'>
            Everything you need to know about our lifestyle tools.
          </p>
        </div>
        <div className='max-w-3xl mx-auto'>
          <FaqAccordion faqs={healthFaqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className='container pb-20'>
        <div className='bg-gradient-to-r from-rose-600 to-orange-600 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden'>
           <div className='absolute top-0 left-0 w-full h-full bg-[url("https://www.transparenttextures.com/patterns/pinstriped-suit.png")] opacity-10' />
           <div className='relative z-10'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                Live a smarter, more calculated life.
              </h2>
              <p className='text-rose-100 mb-10 max-w-xl mx-auto text-lg'>
                Check your BMI today and start your journey towards a healthier you.
              </p>
              <Link 
                href="/bmi-calculator" 
                className='inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-rose-700 hover:bg-rose-50 transition-all shadow-xl shadow-black/10'
              >
                Go to BMI Calculator
              </Link>
           </div>
        </div>
      </section>
    </main>
  )
}

export default HealthLifestylePage
