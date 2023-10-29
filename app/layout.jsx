import '@/styles/global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <link rel="icon" href="#" />
      <body>{children}</body>
    </html>
  )
}
