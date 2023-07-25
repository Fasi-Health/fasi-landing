import { Link } from 'react-router-dom'

import { Logo } from './logo'

export function Header({ title }: { title?: string }) {
  return (
    <header className="relative py-6">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative flex items-center justify-between sm:max-lg:justify-center">
          <h1 className="m-0 text-xl font-bold uppercase leading-none">
            <Link to="/" className="flex items-center no-underline">
              <Logo />
            </Link>
          </h1>
        </div>
      </div>
    </header>
  )
}
