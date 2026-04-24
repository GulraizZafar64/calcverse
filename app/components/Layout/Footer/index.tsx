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
    <footer>
      <div className='container py-14'>
        <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-20 gap-5'>
          <div className='w-fit'>
            <Logo />
          </div>
          <div className='flex sm:flex-row flex-col sm:items-center gap-8'>
            <p className='text-darkblue dark:text-white text-lg font-medium'>
              Stay Connected
            </p>
            <div className='flex gap-4'>
              <Link href='mailto:contact@calcverse.site' className='px-4 py-2 bg-primary text-white rounded-lg outline-none hover:bg-transparent hover:text-primary border border-primary duration-500 text-base font-semibold'>
                Email Us
              </Link>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-16 xl:gap-8'>
          {/* CLOUMN-1 */}
          <div className='lg:col-span-4 sm:col-span-2 flex flex-col gap-5'>
            <div className='flex gap-4'>
              <Link href='/'>
                <Icon
                  icon='tabler:brand-instagram'
                  width={45}
                  height={45}
                  className='text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300'
                />
              </Link>
              <Link href='/'>
                <Icon
                  icon='tabler:brand-dribbble'
                  width={45}
                  height={45}
                  className='text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300'
                />
              </Link>
              <Link href='/'>
                <Icon
                  icon='tabler:brand-twitter-filled'
                  width={45}
                  height={45}
                  className='text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300'
                />
              </Link>
              <Link href='/'>
                <Icon
                  icon='tabler:brand-youtube-filled'
                  width={45}
                  height={45}
                  className='text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300'
                />
              </Link>
            </div>
          </div>
          {/* CLOUMN-2 */}
          <div className='lg:col-span-4 col-span-1'>
            <div className='flex gap-20'>
              {footerlink.map((product, i) => (
                <div key={i} className='group relative col-span-2'>
                  <p className='text-xl font-semibold mb-9'>
                    {product.section}
                  </p>
                  <ul>
                    {product.links.map((item, i) => (
                      <li key={i} className='mb-3'>
                        <Link
                          href={item.href}
                          className='text-darkblue/60 dark:text-white/60 hover:text-primary dark:hover:text-primary text-base font-normal mb-6'>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* CLOUMN-3 */}
          <div className='lg:col-span-4 col-span-1'>
            <div className='flex gap-2'>
              <Icon
                icon={'tabler:map-pin'}
                width={22}
                height={22}
                className='text-lightgrey'
              />
              <p className='text-base font-normal text-offwhite'>
                Online Service - Global Support
              </p>
            </div>
            <div className='flex gap-2 mt-10'>
              <Icon
                icon={'tabler:mail'}
                width={22}
                height={22}
                className='text-lightgrey'
              />
              <Link href='mailto:contact@calcverse.site'>
                <p className='text-base font-normal text-offwhite hover:text-primary dark:hover:text-primary'>
                  contact@calcverse.site
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='py-3'>
        <div className='container flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p className='text-center sm:text-left'>
            © {new Date().getFullYear()} - All Rights Reserved by CalcVerse Financial Tools
          </p>
          <div className='flex flex-wrap items-center justify-center sm:justify-end gap-4 text-sm'>
            <Link href='/privacy-policy' className='hover:text-primary dark:hover:text-primary text-darkblue/60 dark:text-white/60'>
              Privacy Policy
            </Link>
            <Link href='/terms-of-service' className='hover:text-primary dark:hover:text-primary text-darkblue/60 dark:text-white/60'>
              Terms of Service
            </Link>
            <Link href='/disclaimer' className='hover:text-primary dark:hover:text-primary text-darkblue/60 dark:text-white/60'>
              Disclaimer
            </Link>
            <Link href='/contact' className='hover:text-primary dark:hover:text-primary text-darkblue/60 dark:text-white/60'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
