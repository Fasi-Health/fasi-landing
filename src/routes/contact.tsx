import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'
import { useEffect, useRef, useState } from 'react'
import classnames from 'clsx'
import axios from 'axios'
import ScrollReveal from 'scrollreveal'

type ScrollRevealRefElement = HTMLDivElement

export default function ContactPage() {
  const scrollRevealRef = useRef<ScrollRevealRefElement[]>([])

  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const data = {
      name: e.target['name'].value,
      email: e.target['email'].value,
      message: e.target['message'].value,
    }
    await axios
      .post(
        'https://sheet.best/api/sheets/e4b79dcd-76dc-43b1-b1cf-22144dd12e04',
        data
      )
      .then(() => {
        e.target.reset()
        setLoading(false)
        setSuccess(true)
      })
  }

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [success])

  useEffect(() => {
    if (scrollRevealRef.current.length > 0) {
      scrollRevealRef.current.map((ref, index) =>
        ScrollReveal().reveal(scrollRevealRef.current[index], {
          duration: 2000,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'top',
          interval: 150,
        })
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  return (
    <Layout>
      <Article>
        <ArticleContent title="Contact Us">
          <p>
            Please leave us some feedback or queries on the form below, Thank
            you.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-lg font-medium leading-10"
                htmlFor="name"
              >
                Name
              </label>
              <input
                required
                className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium leading-10"
                htmlFor="email"
              >
                Email
              </label>
              <input
                required
                className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div>
              <label
                className="block text-lg font-medium leading-10"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full rounded-sm border border-gray-300 bg-white px-4 py-3 text-sm text-gray-500 shadow-none"
                id="message"
                name="message"
              />
            </div>
            <button
              className={classnames(
                '-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-secondary px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg',
                { '!bg-gray-300 !text-gray-400': loading }
              )}
              type="submit"
              disabled={loading}
            >
              Submit
            </button>

            {loading && (
              <div className="mt-2 text-xs italic text-gray-500">
                Submitting your feedback...
              </div>
            )}

            {success && (
              <div className="mt-2 text-xs italic text-gray-500">
                🎉 Feedback succesfully submitted!! Thank you
              </div>
            )}
          </form>
        </ArticleContent>
        <ArticleMedia />
      </Article>
    </Layout>
  )
}
