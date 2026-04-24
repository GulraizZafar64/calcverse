import Link from 'next/link'
import BlogPostLayout from '../components/BlogPostLayout'

export const metadata = {
  title: 'First-Time Homebuyer Mortgage Guide | CalcVerse',
  description:
    'A complete guide to getting your first mortgage — from pre-approval and down payments to choosing a rate type and understanding closing costs.',
}

const FirstTimeMortgageGuidePage = () => {
  return (
    <BlogPostLayout
      category='Mortgages'
      title='First-Time Homebuyer Mortgage Guide: What You Need to Know'
      date='April 6, 2026'
      readTime='9 min read'
      image='https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80'
      imageAlt='House keys and mini home model on a desk'>
          <p>
            Buying your first home is one of the most significant financial decisions you will ever make. While the process can feel overwhelming, breaking it down into clear steps makes it manageable. This guide covers everything from getting pre-approved to understanding what you will owe at the closing table.
          </p>

          <h2>Step 1: Check Your Credit and Finances</h2>
          <p>
            Before you speak to a lender, review your credit report for errors and check your score. Most conventional loans require a minimum score of 620, though FHA loans accept scores as low as 580 with a 3.5% down payment. Also calculate your debt-to-income ratio (DTI) — lenders generally prefer a DTI below 43%.
          </p>

          <h2>Step 2: Get Pre-Approved</h2>
          <p>
            A mortgage pre-approval tells you exactly how much a lender is willing to lend and at what rate, based on a hard credit inquiry and verification of your income and assets. Pre-approval gives you a realistic budget and shows sellers you are a serious buyer. Note: pre-approval is not the same as a final loan commitment.
          </p>

          <h2>Step 3: Save for Your Down Payment and Closing Costs</h2>
          <p>
            The conventional wisdom is to put 20% down to avoid Private Mortgage Insurance (PMI), which adds 0.5–1.5% to your annual loan cost. However, many first-time buyers use programs that allow 3–5% down. In addition to the down payment, budget 2–5% of the loan amount for closing costs (appraisal, title insurance, origination fees, etc.).
          </p>

          <h2>Step 4: Choose Between Fixed and Adjustable Rates</h2>
          <ul>
            <li>
              <strong>Fixed-rate mortgage:</strong> Your interest rate stays the same for the entire loan term (typically 15 or 30 years). Predictable payments make budgeting simple. Best when rates are low.
            </li>
            <li>
              <strong>Adjustable-rate mortgage (ARM):</strong> The rate is fixed for an initial period (e.g., 5 or 7 years), then adjusts annually. Lower initial rates can save money if you plan to sell or refinance before the adjustment period begins.
            </li>
          </ul>

          <h2>Step 5: Understand What Your Monthly Payment Covers</h2>
          <p>
            Your monthly mortgage payment (PITI) typically includes:
          </p>
          <ul>
            <li><strong>Principal:</strong> The portion that reduces your loan balance.</li>
            <li><strong>Interest:</strong> The lender's fee for providing the loan.</li>
            <li><strong>Taxes:</strong> Property taxes, often escrowed by the lender.</li>
            <li><strong>Insurance:</strong> Homeowner's insurance (and PMI if applicable).</li>
          </ul>

          <h2>Step 6: Shop Multiple Lenders</h2>
          <p>
            Mortgage rates vary between lenders. Getting quotes from at least three to five lenders — including banks, credit unions, and mortgage brokers — can save tens of thousands of dollars over the life of a loan. Multiple credit inquiries for mortgages within a 45-day window are typically treated as a single inquiry for scoring purposes.
          </p>

          <div className='p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border-l-4 border-blue-600 mt-10'>
            <p>
              Use our <Link href='/mortgage' className='text-blue-600 hover:underline'>Mortgage Calculator</Link> to estimate your monthly payment at different home prices, down payment amounts, and interest rates before you start shopping.
            </p>
          </div>
    </BlogPostLayout>
  )
}

export default FirstTimeMortgageGuidePage
