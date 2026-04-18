export type CalculatorCardType = {
  name: string
  description: string
  href: string
  category: 'popular' | 'loan' | 'investment' | 'salary'
}

export type CalculatorField = {
  name: string
  label: string
  placeholder: string
  value: string
  error?: string
  suffix?: string
}

export type ResultItem = {
  label: string
  value: string
}
