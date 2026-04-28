import { NextResponse } from 'next/server';

import { NavLinkType } from '@/app/types/navlink';
import { ProjectType } from '@/app/types/project';
import { RecordType } from '@/app/types/record';
import { ReviewType } from '@/app/types/review';
import { SpecializeType } from '@/app/types/specialize';
import { PlanType } from '@/app/types/plan';
import { CategoryType } from '@/app/types/category';
import { FooterLinkType } from '@/app/types/footerlinks';
import { HeroType } from '@/app/types/hero';

const HeroData: HeroType[] = [
	{
		imgSrc: '/images/banner/blogforgeCover.webp',
	},
	{
		imgSrc: '/images/banner/gleamerCover.webp',
	},
	{
		imgSrc: '/images/banner/learnaxisCover.webp',
	},
	{
		imgSrc: '/images/banner/studiovaCover.webp',
	},
];

const NavLinkData: NavLinkType[] = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Loan Calculators',
		href: '/loan-calculators',
	},
	{
		label: 'Investment Calculators',
		href: '/investment-calculators',
	},
	{
		label: 'Salary Calculators',
		href: '/salary-calculators',
	},
	{
		label: 'Blog',
		href: '/blog',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
];

const ProjectData: ProjectType[] = [
	{
		coverImg: '/images/project/blogforge.webp',
		name: 'Blog Forge',
	},
	{
		coverImg: '/images/project/gleamer.webp',
		name: 'Gleamer',
	},
	{
		coverImg: '/images/project/learnaxis.webp',
		name: 'Learnaxis',
	},
	{
		coverImg: '/images/project/studiova.webp',
		name: 'Studiova',
	},
	{
		coverImg: '/images/project/homely.webp',
		name: 'Homely',
	},
	{
		coverImg: '/images/project/awake.webp',
		name: 'Awake',
	},
	{
		coverImg: '/images/project/endeavor.webp',
		name: 'Endeavor',
	},
];

const RecordData: RecordType[] = [
	{
		imgSrc: '/images/records/star.svg',
		digit: '4.9 Rating',
		desc: 'Accurate calculations cross-verified against financial standards',
	},
	{
		imgSrc: '/images/records/user.svg',
		digit: '100% Private',
		desc: 'All calculations are performed locally in your browser',
	},
	{
		imgSrc: '/images/records/cart.svg',
		digit: 'Free Forever',
		desc: 'Professional tools accessible to everyone without registration',
	},
	{
		imgSrc: '/images/records/star.svg',
		digit: '20+ Tools',
		desc: 'Comprehensive suite for loans, investments, and tax planning',
	},
];

const ReviewData: ReviewType[] = [
	{
		imgSrc: '/images/review/daniel.webp',
		name: 'Sarah J.',
		rating: 5.0,
		desc: 'CalcVerse made it so easy to compare mortgage options. The breakdown of interest vs principal is incredibly helpful.',
	},
	{
		imgSrc: '/images/review/sophia.webp',
		name: 'Michael R.',
		rating: 4.8,
		desc: 'Finally, a clean calculator site that doesn\'t spam me with popups. The compound interest tool is my favorite.',
	},
	{
		imgSrc: '/images/review/marcus.webp',
		name: 'David L.',
		rating: 4.9,
		desc: 'The salary-to-hourly converter helped me negotiate my new job offer with confidence. Highly recommend!',
	},
];

const SpecializeData: SpecializeType[] = [
	{
		imgSrc: '/images/specialization/webdesign.svg',
		title: 'Web Design',
		desc: 'Modern, responsive websites built to engage users and convert leads.',
	},
	{
		imgSrc: '/images/specialization/logodesign.svg',
		title: 'Logo Design',
		desc: 'Distinct, memorable logos crafted to define and elevate your brand.',
	},
	{
		imgSrc: '/images/specialization/mobileapp.svg',
		title: 'Mobile App Development',
		desc: 'Custom iOS and Android apps with seamless flow and functionality.',
	},
	{
		imgSrc: '/images/specialization/contentwrite.svg',
		title: 'Content Writing',
		desc: 'SEO-driven content designed to educate, engage, and boost visibility.',
	},
	{
		imgSrc: '/images/specialization/seooptimize.svg',
		title: 'SEO Optimization',
		desc: 'Proven SEO strategies that increase rankings, traffic, and brand reach.',
	},
	{
		imgSrc: '/images/specialization/digitalmarketing.svg',
		title: 'Digital Marketing',
		desc: 'Targeted digital campaigns to build awareness and grow your audience.',
	},
];

const PlanData: PlanType[] = [
	{
		type: 'Basic',
		price: {
			monthly: 9,
			yearly: 95,
		},
		desc: 'Ideal for freelancers and startups.',
		option: [
			'Consultation with strategy session',
			'Basic design and development',
			'One revision per project',
			'Responsive on all devices',
			'Email support included only',
		],
	},
	{
		type: 'Pro',
		price: {
			monthly: 19,
			yearly: 185,
		},
		desc: 'Perfect for small growing teams.',
		option: [
			'Advanced project planning support',
			'Premium design and development',
			'Three revisions per project',
			'Fully responsive and optimized',
			'Priority email and chat support',
		],
	},
];

const CategoryData: CategoryType[] = [
	{
		imgSrc: '/images/category/webdev.webp',
		title: 'Web Design',
	},
	{
		imgSrc: '/images/category/logods.webp',
		title: 'Logo Design',
	},
	{
		imgSrc: '/images/category/mobileapp.webp',
		title: 'Mobile App Development',
	},
	{
		imgSrc: '/images/category/contentwrite.webp',
		title: 'Content Writing',
	},
	{
		imgSrc: '/images/category/digitalmarket.webp',
		title: 'Digital Marketing',
	},
];

const FooterLinkData: FooterLinkType[] = [
	{
		section: 'Quick Links',
		links: [
			{ label: 'Home', href: '/' },
			{ label: 'Loan Calculators', href: '/loan-calculators' },
			{ label: 'Investment Calculators', href: '/investment-calculators' },
			{ label: 'Salary Calculators', href: '/salary-calculators' },
		],
	},
	{
		section: 'Legal',
		links: [
			{ label: 'About', href: '/about' },
			{ label: 'Privacy Policy', href: '/privacy-policy' },
			{ label: 'Terms of Service', href: '/terms-of-service' },
			{ label: 'Disclaimer', href: '/disclaimer' },
		],
	},
];

export const GET = () => {
	return NextResponse.json({
		HeroData,
		NavLinkData,
		ProjectData,
		RecordData,
		ReviewData,
		SpecializeData,
		PlanData,
		CategoryData,
		FooterLinkData,
	});
};
