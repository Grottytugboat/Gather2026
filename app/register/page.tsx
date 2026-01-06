'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type FormData = {
  name: string
  email: string
  company: string
  password: string
  confirmPassword: string
}

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>()

  const password = watch('password')

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Replace with actual registration API endpoint
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          password: data.password,
        }),
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
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-slate-900 pt-20">
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark text-xs sm:text-sm font-black text-black dark:text-white mb-4 sm:mb-6 uppercase">
                Get Started
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white mb-3 sm:mb-4 uppercase">
                Create Your Account
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-black dark:text-white font-bold">
                Start syncing your POS data to marketing platforms in minutes.
              </p>
            </div>

            {/* Registration Form */}
            <div className="p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal md:shadow-brutal-lg lg:shadow-brutal-xl dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark md:dark:shadow-brutal-lg-dark lg:dark:shadow-brutal-xl-dark">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-black text-black dark:text-white mb-1.5 sm:mb-2 uppercase">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 sm:border-4 border-black dark:border-white bg-white dark:bg-slate-900 text-black dark:text-white font-bold text-sm sm:text-base focus:outline-none focus:shadow-brutal-sm sm:focus:shadow-brutal dark:focus:shadow-brutal-sm-dark sm:dark:focus:shadow-brutal-dark transition-all min-h-[44px] sm:min-h-0"
                    placeholder="YOUR FULL NAME"
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
                  <label htmlFor="company" className="block text-xs sm:text-sm font-black text-black dark:text-white mb-1.5 sm:mb-2 uppercase">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    {...register('company', { required: 'Company name is required' })}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 sm:border-4 border-black dark:border-white bg-white dark:bg-slate-900 text-black dark:text-white font-bold text-sm sm:text-base focus:outline-none focus:shadow-brutal-sm sm:focus:shadow-brutal dark:focus:shadow-brutal-sm-dark sm:dark:focus:shadow-brutal-dark transition-all min-h-[44px] sm:min-h-0"
                    placeholder="YOUR COMPANY"
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600 font-bold">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="block text-xs sm:text-sm font-black text-black dark:text-white mb-1.5 sm:mb-2 uppercase">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters',
                      },
                    })}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 sm:border-4 border-black dark:border-white bg-white dark:bg-slate-900 text-black dark:text-white font-bold text-sm sm:text-base focus:outline-none focus:shadow-brutal-sm sm:focus:shadow-brutal dark:focus:shadow-brutal-sm-dark sm:dark:focus:shadow-brutal-dark transition-all min-h-[44px] sm:min-h-0"
                    placeholder="MINIMUM 8 CHARACTERS"
                  />
                  {errors.password && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600 font-bold">{errors.password.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-xs sm:text-sm font-black text-black dark:text-white mb-1.5 sm:mb-2 uppercase">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: (value) => value === password || 'Passwords do not match',
                    })}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 sm:border-4 border-black dark:border-white bg-white dark:bg-slate-900 text-black dark:text-white font-bold text-sm sm:text-base focus:outline-none focus:shadow-brutal-sm sm:focus:shadow-brutal dark:focus:shadow-brutal-sm-dark sm:dark:focus:shadow-brutal-dark transition-all min-h-[44px] sm:min-h-0"
                    placeholder="CONFIRM YOUR PASSWORD"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-1 text-xs sm:text-sm text-red-600 font-bold">{errors.confirmPassword.message}</p>
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
                      CREATING ACCOUNT...
                    </span>
                  ) : (
                    'Create Account'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-gather-green dark:bg-gather-green border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark">
                    <p className="text-center text-black dark:text-white font-black text-sm sm:text-base">
                      ✓ ACCOUNT CREATED! CHECK YOUR EMAIL TO VERIFY YOUR ACCOUNT.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500 dark:bg-red-600 border-2 sm:border-4 border-black dark:border-white shadow-brutal-sm sm:shadow-brutal dark:shadow-brutal-sm-dark sm:dark:shadow-brutal-dark">
                    <p className="text-center text-white font-black text-sm sm:text-base">
                      SOMETHING WENT WRONG. PLEASE TRY AGAIN.
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t-2 sm:border-t-4 border-black dark:border-white">
                  <p className="text-center text-xs sm:text-sm text-black dark:text-white font-bold">
                    Already have an account?{' '}
                    <a href="/login" className="text-gather-green dark:text-gather-green font-black hover:underline uppercase">
                      Sign In
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
