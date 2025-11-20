export const metadata = {
  title: 'AI For Everyday - Brand Presentation',
  description: 'Brand guidelines and mission',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
