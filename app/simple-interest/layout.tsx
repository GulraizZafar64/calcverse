import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Simple Interest Calculator',
  description: 'Quickly calculate the interest earned or owed on a principal amount using the classic simple interest formula.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
