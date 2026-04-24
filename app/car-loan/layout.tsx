import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Car Loan Calculator',
  description: 'Estimate your monthly car loan payment, total interest paid, and the full cost of financing your vehicle with our professional tool.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
