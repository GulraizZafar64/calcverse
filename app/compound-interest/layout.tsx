import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compound Interest Calculator',
  description: 'See how your investment grows over time with regular contributions and compound interest using our professional calculator.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
