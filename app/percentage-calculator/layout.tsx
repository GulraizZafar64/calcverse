import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Percentage Calculator | Calculate Percentages Quickly',
  description: 'Easily calculate what percentage one number is of another. Perfect for discounts, grades, and financial calculations.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
