import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tip Calculator | Split Bill & Calculate Tips',
  description: 'Quickly calculate tips and split the bill among friends. Our tip calculator makes dining out easy and stress-free.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
