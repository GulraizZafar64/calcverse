import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inflation Calculator',
  description: "See how inflation erodes the purchasing power of money over time and calculate the future value of today's dollars.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
