import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Age Calculator | Exact Age in Years, Months, Days',
  description: 'Find out exactly how old you are. Our age calculator computes your age in years, months, and days based on your birth date.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
