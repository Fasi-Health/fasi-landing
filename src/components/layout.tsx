import type { PropsWithChildren } from 'react'

import { BackgroundGradient } from './background-gradient'
import { Footer } from './footer'
import { Header } from './header'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative mx-auto my-0 flex min-h-screen max-w-screen-2xl flex-col overflow-hidden bg-white shadow-2xl">
      <BackgroundGradient className="absolute bottom-0 left-1/2 top-0 ml-28 hidden w-1/2 lg:block" />

      <Header title="Fasi" />
      <main className="flex flex-shrink-0 flex-grow items-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
