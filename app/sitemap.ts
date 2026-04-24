import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://calcverse.site';
	const lastModified = new Date();

	const routes = [
		'',
		'/about',
		'/contact',
		'/blog',
		'/blog/how-to-reduce-your-loan-emi',
		'/blog/compound-interest-explained',
		'/blog/first-time-mortgage-guide',
		'/blog/retirement-savings-by-age',
		'/blog/tax-efficient-salary-planning',
		'/blog/debt-avalanche-vs-snowball',
		'/privacy-policy',
		'/terms-of-service',
		'/disclaimer',
		'/loan-emi',
		'/compound-interest',
		'/mortgage',
		'/salary-after-tax',
		'/simple-interest',
		'/car-loan',
		'/retirement-savings',
		'/roi-calculator',
		'/inflation-calculator',
		'/hourly-to-salary',
		'/debt-payoff',
		'/loan-calculators',
		'/investment-calculators',
		'/salary-calculators',
	];

	return routes.map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified,
		changeFrequency: 'weekly' as const,
		priority: route === '' ? 1 : 0.8,
	}));
}
