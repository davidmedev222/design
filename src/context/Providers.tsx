'use client'
import { ThemeProvider } from 'next-themes'

interface Props {
  children: React.ReactNode
}

function Providers({ children }: Props) {
  return (
    <ThemeProvider storageKey='theme' enableSystem enableColorScheme={false} attribute='class'>
      {children}
    </ThemeProvider>
  )
}

export default Providers
