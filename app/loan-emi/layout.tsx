import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Loan EMI Calculator',
  description: 'Calculate monthly loan payments, total interest cost, and total repayment for any personal, car, or business loan.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
