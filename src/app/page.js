import Image from 'next/image'
import Link from 'next/link'


export default function  RootLayout({ children }) {
  return (
    <div >
    <h1>Hello</h1>
    <Link href="/about">About Page</Link>
    </div>
  )
}
