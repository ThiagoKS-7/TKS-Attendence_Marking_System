import Logo from '@/public/logo.svg'
import ThemeSwitch from './ThemeSwitch'
import siteMetadata from '@/components/siteMetadata'
import Footer from './Footer'
import Link from './Link'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center  bg-[#6cbcbd] dark:bg-[#41517a] justify-between py-10">
          <div>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo/>
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
          </div>
          <div className="flex items-center text-base leading-5">
            <Link href="/logout">
              Logout
            </Link>
            <ThemeSwitch />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default LayoutWrapper
