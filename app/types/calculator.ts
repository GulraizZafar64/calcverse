export type CalculatorCardType = {
  name: string
  description: string
  href: string
  category: 'popular' | 'loan' | 'investment' | 'salary' | 'health' | 'math' | 'lifestyle' | 'tools'
}


export type CalculatorField = {
  name: string
  label: string
  placeholder: string
  value: string
  error?: string
  suffix?: string
  type?: 'text' | 'number' | 'date' | 'select'
  options?: { label: string; value: string }[]
}


export type ResultItem = {
  label: string
  value: string
}
