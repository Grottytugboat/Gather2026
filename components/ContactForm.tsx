'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg lg:shadow-brutal-xl dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark lg:dark:shadow-brutal-xl-dark">
        <h3 className="text-2xl sm:text-3xl font-black text-black dark:text-white mb-4 sm:mb-6 uppercase">Get in Touch</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
          <div>
            <label htmlFor="name" className="block text-xs sm:text-sm font-black text-black dark:text-white mb-1.5 sm:mb-2 uppercase">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 sm:border-4 border-black dark:border-white bg-white dark:bg-slate-900 text-black dark:text-white font-bold text-sm sm:text-base focus:outline-none focus:shadow-brutal-sm sm:focus:shadow-brutal dark:focus:shadow-brutal-sm-dark sm:dark:focus:shadow-brutal-dark transition-all min-h-[44px] sm:min-h-0"
              placeholder="YOUR NAME"
            />
            {errors.name && (
              <p className="mt-1 text-xs sm:text-sm text-red-600 font-bold">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-black text-black dark:text-white mb-1.5 sm:mb-2 uppercase">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 sm:border-4 border-black dark:border-white bg-white dark:bg-slate-900 text-black dark:text-white font-bold text-sm sm:text-base focus:outline-none focus:shadow-brutal-sm sm:focus:shadow-brutal dark:focus:shadow-brutal-sm-dark sm:dark:focus:shadow-brutal-dark transition-all min-h-[44px] sm:min-h-0"
              placeholder="YOU@AGENCY.COM"
            />
            {errors.email && (
              <p className="mt-1 text-xs sm:text-sm text-red-600 font-bold">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-xs sm:text-sm font-black text-black dark:text-white mb-1.5 sm:mb-2 uppercase">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...register('message', { required: 'Message is required' })}
              className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 sm:border-4 border-black dark:border-white bg-white dark:bg-slate-900 text-black dark:text-white font-bold text-sm sm:text-base focus:outline-none focus:shadow-brutal dark:focus:shadow-brutal-dark resize-none transition-all"
              placeholder="TELL ME ABOUT YOUR INTEGRATION CHALLENGES..."
            />
            {errors.message && (
              <p className="mt-1 text-xs sm:text-sm text-red-600 font-bold">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gather-green dark:bg-gather-green text-black dark:text-white px-6 sm:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-black uppercase border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark hover:shadow-brutal dark:hover:shadow-brutal-dark hover:translate-x-1 hover:translate-y-1 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-h-[44px] sm:min-h-0"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                SENDING...
              </span>
            ) : (
              'Send Message'
            )}
          </button>

          {submitStatus === 'success' && (
            <div className="p-4 bg-gather-green dark:bg-gather-green border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark">
              <p className="text-center text-black dark:text-white font-black">
                ✓ THANKS! I'LL GET BACK TO YOU SOON.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-500 dark:bg-red-600 border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark">
              <p className="text-center text-white font-black">
                SOMETHING WENT WRONG. PLEASE TRY AGAIN.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
