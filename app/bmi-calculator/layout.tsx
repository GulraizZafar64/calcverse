import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BMI Calculator | Body Mass Index',
  description: 'Calculate your Body Mass Index (BMI) using your height and weight. Understand your health status with our free BMI calculator.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
