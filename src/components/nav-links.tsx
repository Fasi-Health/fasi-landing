import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import classnames from 'clsx'

const NAV_LINKS = [
  { name: 'Home', to: '/' },
  { name: 'Contact Us', to: '/contact-us' },
  { name: 'Career page', to: '/career' },
  // { name: 'About Us', to: '/about' },
  // { name: "FAQ's", to: '/faqs' },
  // { name: 'Support', to: '/support' },
]

export function NavLinks({ className }: { className?: string }) {
  let { pathname } = useLocation()

  const isHome = pathname === '/'

  return (
    <ul className={className}>
      {NAV_LINKS.map((link) => (
        <li key={link.name} className={classnames({ 'ml-4': !isHome })}>
          <NavLink
            to={link.to}
            className={({ isActive }) => {
              let className = 'text-white hover:border-b'
              if (isActive) {
                className = 'border-b border-secondary text-white'
                if (isHome) {
                  className = 'hidden '
                }
              }
              return className
            }}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
