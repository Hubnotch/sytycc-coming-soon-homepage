import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'

function Layout({children}) {
  return (
      <>
          <Header />
          <Hero/>
          <div className="px-9 ">
              <main className="px-9">
                  {children}
              </main>
          </div>

          <Footer/>
      </>
  )
}

export default Layout