'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className='fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6'>
      <div className='container max-w-5xl'>
        <div className='bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6'>
          <div className='flex-1'>
            <h3 className='text-lg font-bold text-slate-900 dark:text-white mb-2'>We respect your privacy</h3>
            <p className='text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed'>
              We use cookies to enhance your experience, serve personalized ads (via Google AdSense), and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> for more details.
            </p>
          </div>
          <div className='flex items-center gap-4 w-full md:w-auto'>
            <button
              onClick={acceptCookies}
              className='flex-1 md:flex-none px-8 py-3 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 whitespace-nowrap'
            >
              Accept All
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className='flex-1 md:flex-none px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all whitespace-nowrap'
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
