import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hourly to Annual Salary Calculator',
  description: 'Convert your hourly wage into weekly, monthly, and annual salary figures instantly for better financial planning.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
