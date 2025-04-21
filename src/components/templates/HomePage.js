import React from 'react'
import Menu from '@/components/templates/Menu'  
import Abaut from '@/components/templates/Abaut' 
import Branches from './Branches'
function HomePage() {
  return (
    <div>
      <Menu/>
      <Abaut/>
      <Branches/>
      
    </div>
  )
}

export default HomePage
