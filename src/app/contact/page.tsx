import { Toaster } from 'react-hot-toast'
import { ContactForm, Hero } from './components'

function ContactPage() {
  return (
    <main>
      <Hero />
      <ContactForm />
      <Toaster />
    </main>
  )
}

export default ContactPage
