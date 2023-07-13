import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'

import { NewsletterForm } from './newsletter-form'
import axios from 'axios'

type ScrollRevealRefElement =
  | HTMLHeadingElement
  | HTMLParagraphElement
  | HTMLDivElement

export function Hero({
  content,
  illustration,
  title,
}: {
  content: string
  illustration?: ReactNode
  title: string
}) {
  const scrollRevealRef = useRef<ScrollRevealRefElement[]>([])

  useEffect(() => {
    if (scrollRevealRef.current.length > 0) {
      scrollRevealRef.current.map((ref, index) =>
        ScrollReveal().reveal(scrollRevealRef.current[index], {
          duration: 1000,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'top',
          interval: 150,
        })
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  function onNewsletterSubmit(values: any) {
    return axios
      .post(
        'https://sheet.best/api/sheets/e4b79dcd-76dc-43b1-b1cf-22144dd12e04',
        { email: values }
      )
      .then((response) => {
        return response.status
      })
  }

  return (
    <section className="text-center lg:w-full lg:py-20 lg:text-left">
      <div className="hero mx-auto w-full max-w-6xl px-6">
        <div className="hero-inner relative lg:flex">
          <div
            className="hero-copy bg-white pb-16 pt-10 lg:pr-20 lg:pt-16"
            style={{ minWidth: '300px' }}
          >
            <div className="mx-auto w-full max-w-3xl">
              <h1
                ref={(el: ScrollRevealRefElement) =>
                  scrollRevealRef.current.push(el)
                }
                className="mb-4 mt-0 text-4xl font-bold md:text-5xl"
              >
                {title}
              </h1>
              <p
                ref={(el: ScrollRevealRefElement) =>
                  scrollRevealRef.current.push(el)
                }
                className="prose prose-xl px-16 text-gray-500 sm:max-md:px-10 md:px-0 "
              >
                {content}
              </p>
            </div>

            <div
              ref={(el: ScrollRevealRefElement) =>
                scrollRevealRef.current.push(el)
              }
              className="md:flex md:justify-center"
            >
              <NewsletterForm
                className="m-0 mt-8 max-w-md md:flex"
                submitText="Get early access"
                onSubmit={onNewsletterSubmit}
              />
            </div>
          </div>

          {!!illustration && (
            <div className="relative -ml-6 -mr-6 py-10 lg:p-0">
              {illustration}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
