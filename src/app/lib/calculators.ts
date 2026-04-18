export function formatMoney(value: number): string {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export function parseNumberInput(value: string): number {
  const sanitized = value.replace(/[^0-9.-]/g, '')
  return Number(sanitized)
}

export function calculateEmi(
  principal: number,
  annualRate: number,
  years: number
) {
  const months = Math.max(1, years * 12)
  const monthlyRate = annualRate / 12 / 100

  let monthlyPayment = 0
  if (monthlyRate === 0) {
    monthlyPayment = principal / months
  } else {
    const factor = Math.pow(1 + monthlyRate, months)
    monthlyPayment = (principal * monthlyRate * factor) / (factor - 1)
  }

  const totalPayment = monthlyPayment * months
  const totalInterest = totalPayment - principal

  return {
    monthlyPayment: Number(monthlyPayment.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
    totalPayment: Number(totalPayment.toFixed(2)),
  }
}

export function calculateCompoundInterest(
  initialAmount: number,
  annualRate: number,
  years: number,
  monthlyContribution: number
) {
  const monthlyRate = annualRate / 12 / 100
  const months = Math.max(0, years * 12)

  let futureValue = initialAmount
  if (monthlyRate === 0) {
    futureValue = initialAmount + monthlyContribution * months
  } else {
    const growthFactor = Math.pow(1 + monthlyRate, months)
    futureValue = initialAmount * growthFactor
    futureValue +=
      monthlyContribution * ((growthFactor - 1) / monthlyRate) * (1 + monthlyRate)
  }

  const totalContributions = initialAmount + monthlyContribution * months
  const totalInterest = futureValue - totalContributions

  return {
    finalAmount: Number(futureValue.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
  }
}

export function calculateMortgage(
  homePrice: number,
  downPayment: number,
  annualRate: number,
  years: number
) {
  const loanAmount = Math.max(0, homePrice - downPayment)
  const months = Math.max(1, years * 12)
  const monthlyRate = annualRate / 12 / 100

  let monthlyPayment = 0
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / months
  } else {
    const factor = Math.pow(1 + monthlyRate, months)
    monthlyPayment = (loanAmount * monthlyRate * factor) / (factor - 1)
  }
  const totalPayment = monthlyPayment * months
  const totalInterest = totalPayment - loanAmount

  return {
    monthlyPayment: Number(monthlyPayment.toFixed(2)),
    totalPayment: Number(totalPayment.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
  }
}

export function calculateSalaryAfterTax(
  annualSalary: number,
  taxPercent: number
) {
  const netFactor = Math.max(0, Math.min(100, taxPercent)) / 100
  const annualNetSalary = annualSalary * (1 - netFactor)
  const monthlyNetSalary = annualNetSalary / 12

  return {
    annualNetSalary: Number(annualNetSalary.toFixed(2)),
    monthlyNetSalary: Number(monthlyNetSalary.toFixed(2)),
  }
}
