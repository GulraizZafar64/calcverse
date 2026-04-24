import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Debt Payoff Calculator',
  description: 'Find out exactly how long it will take to pay off any debt and how much total interest you will save with different payoff strategies.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
