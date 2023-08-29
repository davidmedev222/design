import { Footer, Header } from '@/components'
import { Providers } from '@/context'
import '../styles/globals.css'

export const metadata = {
  title: 'Design',
  description:
    'Website that allows designers to show their work and projects in an attractive and professional way. Where they can create their personalized portfolio, upload their designs, and share it with the world. This website allows them to highlight their talent and connect with potential clients or collaborators.',
  generator: 'Next.js',
  applicationName: 'Design',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'web designer portfolio',
    'ui designer portfolio',
    'product design portfolio',
    'web design portfolio',
    'surface designer portfolio',
    'graphic design portfolios',
    'design portfolio examples',
    'industrial design portfolio',
    'ux designer portfolio',
    'ux design portfolio',
    'portfolio design',
    'design portfolio',
    'design ux ui portfolio'
  ],
  authors: [{ name: 'David', url: 'https://www.linkedin.com/in/davidmedev' }],
  colorScheme: 'normal',
  creator: 'David',
  publisher: 'David',
  category: 'portfolio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: 'Design',
    description:
      'Website that allows designers to show their work and projects in an attractive and professional way. Where they can create their personalized portfolio, upload their designs, and share it with the world. This website allows them to highlight their talent and connect with potential clients or collaborators.',
    url: 'https://designwebsite.vercel.app',
    siteName: 'Design',
    locale: 'en',
    type: 'website'
  }
}

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='dark:bg-black dark:text-white'>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
