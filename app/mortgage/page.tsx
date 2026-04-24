import CalculatorLayout from '@/app/components/CalculatorLayout'
import MortgageClient from './MortgageClient'
import FaqAccordion from '@/app/components/FaqAccordion'

export const metadata = {
  title: 'Mortgage Calculator | Financial Tools',
  description: 'Calculate monthly mortgage payments, total interest, and final payment for home financing.',
}

const MortgagePage = () => {
  return (
    <CalculatorLayout
      title='Mortgage Calculator'
      description='Estimate mortgage payments, total interest cost, and your home loan payment schedule.'
      author='CalcVerse Editorial Team'
      lastUpdated='April 2026'>
      
      <MortgageClient />

      <section className='mt-20 border-t border-slate-100 dark:border-slate-800 pt-16'>
        <div className='max-w-4xl mx-auto'>
          <div className='prose prose-lg max-w-none text-slate-600 dark:text-slate-400 dark:prose-invert'>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-6 underline decoration-blue-500 underline-offset-8'>Planning Your Dream Home Purchase</h2>
            <p>
              Buying a home is one of the most significant financial decisions you will ever make. A mortgage is a long-term commitment, often spanning 15 to 30 years. Understanding the true cost of your mortgage—not just the home price—is essential for long-term financial health.
            </p>
            <p>
              At <strong>CalcVerse</strong>, our Mortgage Calculator goes beyond simple math. We help you understand how your down payment, interest rate, and loan term work together to determine your monthly payment and the total cost of ownership.
            </p>

            <div className='bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-3xl my-10 border border-emerald-100 dark:border-emerald-800'>
              <h3 className='text-2xl font-bold text-emerald-900 dark:text-emerald-300 mb-4'>What&apos;s in a Mortgage Payment?</h3>
              <p className='text-emerald-800 dark:text-emerald-400'>
                A standard mortgage payment is often referred to as <strong>PITI</strong>:
              </p>
              <ul className='space-y-2 mt-4'>
                <li><strong>Principal:</strong> The amount that goes toward paying off the loan balance.</li>
                <li><strong>Interest:</strong> The cost of borrowing the money from the lender.</li>
                <li><strong>Taxes:</strong> Property taxes collected by your local government.</li>
                <li><strong>Insurance:</strong> Homeowners insurance and potentially Private Mortgage Insurance (PMI).</li>
              </ul>
              <p className='mt-4 text-sm italic text-emerald-700 dark:text-emerald-500'>Note: Our calculator currently focuses on Principal and Interest to provide a clear baseline for your loan comparison.</p>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>The Importance of the Down Payment</h3>
            <p>
              The down payment is the cash you pay upfront for your home. While many people strive for the traditional 20% down payment to avoid PMI, there are many loan programs that allow for much lower down payments.
            </p>
            <div className='grid md:grid-cols-2 gap-6 my-8'>
              <div className='p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Higher Down Payment</h4>
                <p>Reduces your loan amount, lowers your monthly payment, and can often get you a better interest rate from lenders.</p>
              </div>
              <div className='p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Lower Down Payment</h4>
                <p>Allows you to buy a home sooner and keep more cash in reserve for repairs or emergencies, but results in higher monthly costs.</p>
              </div>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Choosing Your Loan Term</h3>
            <p>
              The length of your mortgage significantly impacts your total interest paid.
            </p>
            <ul className='list-disc pl-6 space-y-4'>
              <li><strong>30-Year Mortgage:</strong> Offers the lowest monthly payment, making homeownership more affordable on a monthly basis. However, you will pay significantly more in interest over the life of the loan.</li>
              <li><strong>15-Year Mortgage:</strong> Higher monthly payments, but you pay off the house in half the time and save tens of thousands of dollars in interest. Lenders also typically offer lower interest rates for 15-year terms.</li>
            </ul>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Tips for Mortgage Success</h3>
            <ul className='list-decimal pl-6 space-y-4'>
              <li><strong>Check Your Credit Score:</strong> A higher credit score can save you thousands of dollars through a lower interest rate.</li>
              <li><strong>Get Pre-Approved:</strong> Before house hunting, get a pre-approval letter from a lender to know exactly what you can afford.</li>
              <li><strong>Don&apos;t Forget Closing Costs:</strong> Budget an additional 2-5% of the home price for taxes, lender fees, and title insurance.</li>
              <li><strong>Maintain an Emergency Fund:</strong> Homeownership comes with unexpected repairs. Ensure you have cash set aside after your down payment.</li>
            </ul>

            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mt-20 mb-8'>Frequently Asked Questions</h2>
            <FaqAccordion 
              faqs={[
                {
                  q: "What is Private Mortgage Insurance (PMI)?",
                  a: "PMI is a type of insurance that protects the lender if you stop making payments on your loan. It is usually required if your down payment is less than 20% of the home's value. You can typically request to cancel PMI once your home equity reaches 20%."
                },
                {
                  q: "What is the difference between an ARM and a Fixed-Rate Mortgage?",
                  a: "A fixed-rate mortgage has the same interest rate for the entire life of the loan. An Adjustable-Rate Mortgage (ARM) has a lower initial interest rate for a set period (e.g., 5 or 7 years), after which the rate can change periodically based on market indices."
                },
                {
                  q: "What are 'points' in a mortgage?",
                  a: "Mortgage points (or discount points) are fees paid directly to the lender at closing in exchange for a reduced interest rate. One point typically costs 1% of the total loan amount and lowers your interest rate by 0.25%."
                },
                {
                  q: "How does my debt-to-income (DTI) ratio affect my mortgage?",
                  a: "DTI is the percentage of your gross monthly income that goes toward paying debts. Lenders use this to determine your ability to manage monthly payments. Most lenders prefer a DTI ratio of 43% or lower to qualify for a conventional mortgage."
                }
              ]}
            />
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default MortgagePage
