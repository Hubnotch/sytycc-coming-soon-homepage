import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from '../components/Layout'
import About from './About/About'
import Profiles from './Profiles/Profiles'
import Stories from './Stories/Stories'
import Home from './Home/Home'
import Membership from './Membership/Membership'


function Pages() {
  return (
      <Router>
          <Layout>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/profiles' element={<Profiles/>}/>
                <Route path='/stories' element={<Stories/>}/>
                <Route path='/membership' element={<Membership/>}/>
              </Routes>
          </Layout>
    </Router>
  )
}
export default Pages
