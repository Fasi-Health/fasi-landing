import classnames from 'clsx'
import type { ChangeEvent, FormEvent } from 'react'
import { useEffect, useState } from 'react'

export function NewsletterForm({
  className,
  onSubmit,
  submitText = 'Submit',
}: {
  className?: string
  onSubmit: (email: string) => Promise<any>
  submitText?: string
}) {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(true)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    await onSubmit(email)
    setLoading(false)
    setEmail('')
    setSuccess(true)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [success])

  return (
    <form
      onSubmit={handleSubmit}
      className={classnames('newsletter-form is-revealing md:flex', className)}
    >
      <div className="mr-2 flex-shrink flex-grow">
        <label className="hidden" htmlFor="email" aria-hidden="true">
          Email
        </label>
        <input
          required
          placeholder="Your best email&hellip;"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          autoComplete="off"
          className="w-80 rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
        />
        {success && (
          <div className="mt-2 text-xs italic text-gray-500">
            🎉 Email submitted successfully!
          </div>
        )}
        {loading && (
          <div className="mt-2 text-xs italic text-gray-500">
            Submitting your email...
          </div>
        )}
      </div>

      <div className="control sm:max-md:my-3">
        <button
          className={classnames(
            '-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-secondary px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg',
            { '!bg-gray-300 !text-gray-400': loading }
          )}
          type="submit"
          disabled={loading}
        >
          {submitText}
        </button>
      </div>
    </form>
  )
}
