import Link from './Link'
import siteMetadata from '@/components/siteMetadata'
import Mail from "@/components/social-icons/mail.svg"
import Github from "@/components/social-icons/github.svg"
import Linkedin from "@/components/social-icons/linkedin.svg"
import Twitter from "@/components/social-icons/twitter.svg"
import Facebook from "@/components/social-icons/facebook.svg"
export default function Footer() {
  return (<>
  <div className="mt-[4em] flex flex-col items-center">
    <div className="mb-3 flex space-x-4">
      <Link href={'mailto:'+siteMetadata.email}>
        <Mail 
          width={40} 
          height={40} 
          className="fill-current 
          text-gray-700 hover:text-blue-500
          dark:text-gray-200 dark:hover:text-blue-400"
        />
      </Link>
      <Link href={siteMetadata.github}>
        <Github 
          width={35} 
          height={35} 
          className="fill-current 
          text-gray-700 hover:text-blue-500
          dark:text-gray-200 dark:hover:text-blue-400"
        />
      </Link>
      <Link href={siteMetadata.facebook}>
        <Facebook
          width={35} 
          height={35} 
          className="fill-current 
          text-gray-700 hover:text-blue-500
          dark:text-gray-200 dark:hover:text-blue-400"
        />
      </Link>
      <Link href={siteMetadata.linkedin}>
        <Linkedin
          width={35} 
          height={35} 
          className="fill-current 
          text-gray-700 hover:text-blue-500
          dark:text-gray-200 dark:hover:text-blue-400"
        />
      </Link>
      <Link href={siteMetadata.twitter}>
        <Twitter
          width={35} 
          height={35} 
          className="fill-current 
          text-gray-700 hover:text-blue-500
          dark:text-gray-200 dark:hover:text-blue-400"
        />
      </Link>
    </div>
    <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
      <div>{siteMetadata.author}</div>
      <div>{` • `}</div>
      <div>{`© ${new Date().getFullYear()}`}</div>
      <div>{` • `}</div>
      <div>{siteMetadata.title}</div>
    </div>
    <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
      <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
        Tailwind Nextjs Theme
      </Link>
    </div>
  </div>
  </>
    // <footer>
    //   <div className="mt-[4em] flex flex-col items-center">
    //     <div className="mb-3 flex space-x-4">
    //     <Mail className="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}"/>
    //       <SocialIcon kind="github" href={siteMetadata.github} size="6" />
    //       <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
    //       <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
    //       <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
    //       <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
    //     </div>
  )
}
