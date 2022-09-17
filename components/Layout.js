import React from 'react'
import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex-shrink-0">
        <Nav />
      </header>

      <main>{children}</main>

      {/* <Footer /> */}
    </div>
  )
}