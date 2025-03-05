export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" ml-update="aware">
      <body>{children}</body>
    </html>
  )
}