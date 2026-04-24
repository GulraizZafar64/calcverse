import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ROI Calculator',
  description: 'Measure the return on any investment by calculating your net profit and ROI percentage instantly with our professional tool.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
