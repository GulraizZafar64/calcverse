export function formatMoney(value: number): string {
	return value.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
}

export function parseNumberInput(value: string): number {
	const sanitized = value.replace(/[^0-9.-]/g, '');
	return Number(sanitized);
}

export function calculateEmi(
	principal: number,
	annualRate: number,
	years: number,
) {
	const months = Math.max(1, years * 12);
	const monthlyRate = annualRate / 12 / 100;

	let monthlyPayment = 0;
	if (monthlyRate === 0) {
		monthlyPayment = principal / months;
	} else {
		const factor = Math.pow(1 + monthlyRate, months);
		monthlyPayment = (principal * monthlyRate * factor) / (factor - 1);
	}

	const totalPayment = monthlyPayment * months;
	const totalInterest = totalPayment - principal;

	return {
		monthlyPayment: Number(monthlyPayment.toFixed(2)),
		totalInterest: Number(totalInterest.toFixed(2)),
		totalPayment: Number(totalPayment.toFixed(2)),
	};
}

export function calculateCompoundInterest(
	initialAmount: number,
	annualRate: number,
	years: number,
	monthlyContribution: number,
) {
	const monthlyRate = annualRate / 12 / 100;
	const months = Math.max(0, years * 12);

	let futureValue = initialAmount;
	if (monthlyRate === 0) {
		futureValue = initialAmount + monthlyContribution * months;
	} else {
		const growthFactor = Math.pow(1 + monthlyRate, months);
		futureValue = initialAmount * growthFactor;
		futureValue +=
			monthlyContribution *
			((growthFactor - 1) / monthlyRate) *
			(1 + monthlyRate);
	}

	const totalContributions = initialAmount + monthlyContribution * months;
	const totalInterest = futureValue - totalContributions;

	return {
		finalAmount: Number(futureValue.toFixed(2)),
		totalInterest: Number(totalInterest.toFixed(2)),
	};
}

export function calculateMortgage(
	homePrice: number,
	downPayment: number,
	annualRate: number,
	years: number,
) {
	const loanAmount = Math.max(0, homePrice - downPayment);
	const months = Math.max(1, years * 12);
	const monthlyRate = annualRate / 12 / 100;

	let monthlyPayment = 0;
	if (monthlyRate === 0) {
		monthlyPayment = loanAmount / months;
	} else {
		const factor = Math.pow(1 + monthlyRate, months);
		monthlyPayment = (loanAmount * monthlyRate * factor) / (factor - 1);
	}
	const totalPayment = monthlyPayment * months;
	const totalInterest = totalPayment - loanAmount;

	return {
		monthlyPayment: Number(monthlyPayment.toFixed(2)),
		totalPayment: Number(totalPayment.toFixed(2)),
		totalInterest: Number(totalInterest.toFixed(2)),
	};
}

export function calculateSalaryAfterTax(
	annualSalary: number,
	taxPercent: number,
) {
	const netFactor = Math.max(0, Math.min(100, taxPercent)) / 100;
	const annualNetSalary = annualSalary * (1 - netFactor);
	const monthlyNetSalary = annualNetSalary / 12;

	return {
		annualNetSalary: Number(annualNetSalary.toFixed(2)),
		monthlyNetSalary: Number(monthlyNetSalary.toFixed(2)),
	};
}

export function calculateSimpleInterest(
	principal: number,
	annualRate: number,
	years: number,
) {
	const interest = (principal * annualRate * years) / 100;
	const totalAmount = principal + interest;

	return {
		simpleInterest: Number(interest.toFixed(2)),
		totalAmount: Number(totalAmount.toFixed(2)),
	};
}

export function calculateCarLoan(
	vehiclePrice: number,
	downPayment: number,
	annualRate: number,
	years: number,
) {
	const loanAmount = Math.max(0, vehiclePrice - downPayment);
	const months = Math.max(1, years * 12);
	const monthlyRate = annualRate / 12 / 100;

	let monthlyPayment = 0;
	if (monthlyRate === 0) {
		monthlyPayment = loanAmount / months;
	} else {
		const factor = Math.pow(1 + monthlyRate, months);
		monthlyPayment = (loanAmount * monthlyRate * factor) / (factor - 1);
	}
	const totalPayment = monthlyPayment * months;
	const totalInterest = totalPayment - loanAmount;

	return {
		monthlyPayment: Number(monthlyPayment.toFixed(2)),
		totalPayment: Number(totalPayment.toFixed(2)),
		totalInterest: Number(totalInterest.toFixed(2)),
	};
}

export function calculateRetirementSavings(
	currentAge: number,
	retirementAge: number,
	currentSavings: number,
	monthlyContribution: number,
	annualRate: number,
) {
	const years = Math.max(0, retirementAge - currentAge);
	const months = years * 12;
	const monthlyRate = annualRate / 12 / 100;

	let futureValue = currentSavings;
	if (monthlyRate === 0) {
		futureValue = currentSavings + monthlyContribution * months;
	} else {
		const growthFactor = Math.pow(1 + monthlyRate, months);
		futureValue = currentSavings * growthFactor;
		futureValue +=
			monthlyContribution *
			((growthFactor - 1) / monthlyRate) *
			(1 + monthlyRate);
	}

	const totalContributions = currentSavings + monthlyContribution * months;
	const totalGrowth = futureValue - totalContributions;

	return {
		futureValue: Number(futureValue.toFixed(2)),
		totalContributions: Number(totalContributions.toFixed(2)),
		totalGrowth: Number(totalGrowth.toFixed(2)),
	};
}

export function calculateROI(initialInvestment: number, finalValue: number) {
	const netProfit = finalValue - initialInvestment;
	const roiPercent =
		initialInvestment > 0 ? (netProfit / initialInvestment) * 100 : 0;

	return {
		netProfit: Number(netProfit.toFixed(2)),
		roiPercent: Number(roiPercent.toFixed(2)),
	};
}

export function calculateInflation(
	presentValue: number,
	annualRate: number,
	years: number,
) {
	const futureValue = presentValue * Math.pow(1 + annualRate / 100, years);
	const purchasingPowerLoss = futureValue - presentValue;

	return {
		futureValue: Number(futureValue.toFixed(2)),
		purchasingPowerLoss: Number(purchasingPowerLoss.toFixed(2)),
	};
}

export function calculateHourlyToSalary(
	hourlyRate: number,
	hoursPerWeek: number,
) {
	const weeklyPay = hourlyRate * hoursPerWeek;
	const monthlyPay = weeklyPay * (52 / 12);
	const annualPay = weeklyPay * 52;

	return {
		weeklyPay: Number(weeklyPay.toFixed(2)),
		monthlyPay: Number(monthlyPay.toFixed(2)),
		annualPay: Number(annualPay.toFixed(2)),
	};
}

export function calculateDebtPayoff(
	balance: number,
	annualRate: number,
	monthlyPayment: number,
) {
	const monthlyRate = annualRate / 12 / 100;
	if (monthlyPayment <= balance * monthlyRate && monthlyRate > 0) {
		return { months: null, totalInterest: null, totalPaid: null };
	}

	let remaining = balance;
	let months = 0;
	let totalInterest = 0;

	while (remaining > 0.01 && months < 1200) {
		const interestCharge = remaining * monthlyRate;
		totalInterest += interestCharge;
		remaining = remaining + interestCharge - monthlyPayment;
		if (remaining < 0) remaining = 0;
		months++;
	}

	return {
		months,
		totalInterest: Number(totalInterest.toFixed(2)),
		totalPaid: Number((balance + totalInterest).toFixed(2)),
	};
}
