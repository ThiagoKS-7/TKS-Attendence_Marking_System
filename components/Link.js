/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} className="opacity-80 hover:opacity-100" />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} className="opacity-80 hover:opacity-100" />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} className="opacity-80 hover:opacity-100" />
}

export default CustomLink
