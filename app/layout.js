import './globals.css'

export const metadata = {
  title: 'Inuka Loans | Instant Mobile Loans',
  description: 'Borrow up to Ksh 10,000 via M-Pesa instantly.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}