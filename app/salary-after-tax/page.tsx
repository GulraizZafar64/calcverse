import CalculatorLayout from '@/app/components/CalculatorLayout'
import SalaryAfterTaxClient from './SalaryAfterTaxClient'

export const metadata = {
  title: 'Salary After Tax Calculator | Financial Tools',
  description: 'Compute your monthly and annual net salary after tax for better budgeting and planning.',
}

const SalaryAfterTaxPage = () => {
  return (
    <CalculatorLayout
      title='Salary After Tax Calculator'
      description='Calculate your take-home pay after taxes to understand your monthly and yearly net income.'>
      
      <SalaryAfterTaxClient />

      <section className='mt-20 border-t border-slate-100 dark:border-slate-800 pt-16'>
        <div className='max-w-4xl mx-auto'>
          <div className='prose prose-lg max-w-none text-slate-600 dark:text-slate-400 dark:prose-invert'>
            <h2 className='text-3xl font-bold text-slate-900 dark:text-white mb-6 underline decoration-blue-500 underline-offset-8'>Mastering Your Monthly Budget</h2>
            <p>
              Your "gross salary" is the number on your offer letter, but your "net salary" is what actually hits your bank account. Understanding the gap between these two figures is the first step toward effective financial planning. Taxes, social security, and other deductions can significantly reduce your purchasing power.
            </p>
            <p>
              At <strong>CalcVerse</strong>, our Salary After Tax Calculator provides a clear, simplified view of your take-home pay. By entering your annual income and an estimated tax rate, you can immediately see what your monthly cash flow will look like.
            </p>

            <div className='bg-orange-50 dark:bg-orange-900/20 p-8 rounded-3xl my-10 border border-orange-100 dark:border-orange-800'>
              <h3 className='text-2xl font-bold text-orange-900 dark:text-orange-300 mb-4'>Gross vs. Net Income</h3>
              <p className='text-orange-800 dark:text-orange-400'>
                It's important to distinguish between these two terms:
              </p>
              <ul className='space-y-4 mt-4'>
                <li><strong>Gross Income:</strong> Your total earnings before any taxes or deductions are taken out. This is the figure typically used when discussing salaries and job offers.</li>
                <li><strong>Net Income:</strong> Often called "take-home pay," this is the amount remaining after all mandatory and voluntary deductions are subtracted from your gross income.</li>
              </ul>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Common Salary Deductions</h3>
            <p>
              While tax is the largest deduction for most workers, other factors also influence your final take-home pay:
            </p>
            <div className='grid md:grid-cols-2 gap-6 my-8'>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Income Tax</h4>
                <p>Federal, state, and local taxes based on your income bracket and filing status.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Health Insurance</h4>
                <p>Premiums for medical, dental, and vision coverage provided through your employer.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Retirement (401k/Pension)</h4>
                <p>Pre-tax or post-tax contributions you make to your retirement savings account.</p>
              </div>
              <div className='p-6 border border-slate-100 dark:border-slate-800 rounded-2xl'>
                <h4 className='font-bold text-slate-900 dark:text-white mb-2'>Social Security & Medicare</h4>
                <p>Mandatory government contributions that fund retirement and healthcare for seniors.</p>
              </div>
            </div>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Budgeting with Your Net Salary</h3>
            <p>
              Once you know your monthly net income, you can apply the popular <strong>50/30/20 rule</strong> to manage your finances:
            </p>
            <ul className='list-disc pl-6 space-y-4'>
              <li><strong>50% for Needs:</strong> Rent/mortgage, utilities, groceries, and basic transportation.</li>
              <li><strong>30% for Wants:</strong> Dining out, entertainment, hobbies, and shopping.</li>
              <li><strong>20% for Financial Goals:</strong> Debt repayment, emergency fund, and retirement investments.</li>
            </ul>

            <h3 className='text-2xl font-bold text-slate-900 dark:text-white mt-12 mb-6'>Maximize Your Take-Home Pay</h3>
            <ol className='list-decimal pl-6 space-y-4'>
              <li><strong>Check Your Exemptions:</strong> Ensure you are claiming the correct number of tax exemptions to avoid overpaying throughout the year.</li>
              <li><strong>Contribute to Pre-tax Accounts:</strong> Contributing to an HSA or 401(k) reduces your taxable income, which can lower your overall tax bill.</li>
              <li><strong>Review Your Paystub:</strong> Regularly check your paystub for errors in deductions or tax withholdings.</li>
            </ol>
            
            <p className='mt-10 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border-l-4 border-orange-500 italic text-slate-600 dark:text-slate-400'>
              Note: Tax laws vary significantly by country and region. This calculator is a tool for estimation and should not be used for filing official tax returns.
            </p>
          </div>
        </div>
      </section>
    </CalculatorLayout>
  )
}

export default SalaryAfterTaxPage
