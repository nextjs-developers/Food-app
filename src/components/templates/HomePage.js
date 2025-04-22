import React from 'react'
import Menu from '@/components/templates/Menu'  
import Abaut from '@/components/templates/Abaut' 
import Branches from './Branches'
import Slider from '../module/slider/Slider'
function HomePage() {
  return (
    <div>
      <Slider/>
      <Menu/>
      <Abaut/>
      <Branches/>
      
    </div>
  )
}

export default HomePage
