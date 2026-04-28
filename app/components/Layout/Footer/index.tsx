'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from '../Header/Logo'
import { Icon } from '@iconify/react'
import { FooterLinkType } from '@/app/types/footerlinks'

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        SetFooterlink(data.FooterLinkData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <footer className='bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900'>
      <div className='container pt-20 pb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8'>
          {/* Brand Column */}
          <div className='lg:col-span-5 space-y-8'>
            <div className='w-fit'>
              <Logo />
            </div>
            <p className='text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-sm'>
              Empowering your financial future with accurate, private, and professional-grade calculators. Plan your loans, investments, and taxes with confidence.
            </p>

          </div>

          {/* Links Columns */}
          <div className='lg:col-span-4 grid grid-cols-2 gap-8'>
            {footerlink.map((group, i) => (
              <div key={i} className='space-y-6'>
                <h4 className='text-base font-bold uppercase tracking-widest text-slate-900 dark:text-white'>
                  {group.section}
                </h4>
                <ul className='space-y-4'>
                  {group.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className='text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-base font-medium transition-colors'>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Column */}
          <div className='lg:col-span-3 space-y-6'>
            <h4 className='text-base font-bold uppercase tracking-widest text-slate-900 dark:text-white'>
              Contact Us
            </h4>
            <div className='space-y-4'>
              <div className='flex items-start gap-3 group'>
                <div className='mt-1 p-2 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-400 group-hover:text-blue-600 transition-colors'>
                  <Icon icon="lucide:map-pin" className="w-5 h-5" />
                </div>
                <div className='text-base'>
                  <p className='font-bold text-slate-900 dark:text-white'>Global Support</p>
                  <p className='text-slate-500 dark:text-slate-400 text-sm'>Available Online 24/7</p>
                </div>
              </div>
              <div className='flex items-start gap-3 group'>
                <div className='mt-1 p-2 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-400 group-hover:text-blue-600 transition-colors'>
                  <Icon icon="lucide:mail" className="w-5 h-5" />
                </div>
                <div className='text-base'>
                  <p className='font-bold text-slate-900 dark:text-white'>Email Us</p>
                  <Link href='mailto:contact@calcverse.site' className='text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm'>
                    contact@calcverse.site
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='mt-20 pt-8 border-t border-slate-50 dark:border-slate-900/50 text-center'>
          <p className='text-base text-slate-500 dark:text-slate-500 font-medium'>
            © {new Date().getFullYear()} CalcVerse Financial Tools. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer

