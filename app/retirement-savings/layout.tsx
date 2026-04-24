import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Retirement Savings Calculator',
  description: 'Project your retirement nest egg based on your current savings, monthly contributions, and expected investment returns.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
