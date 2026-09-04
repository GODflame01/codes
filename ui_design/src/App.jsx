import React from 'react'
import Section1 from './component/section1/section1'
import Section2 from './component/section2/section2'
const App = () => {
  let users = [
    {
      image :'https://images.unsplash.com/photo-1760074032649-0243993135b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGpvYiUyMHByb2Zlc3Npb25hbHN8ZW58MHwxfDB8fHww',
      intro:'I am a dedicated banking professional committed to delivering excellent customer service, building trust, and achieving sustainable financial results.',
      tag:'satisfied',
    },
    {
      image :'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8am9iJTIwcHJvZmVzc2lvbmFsc3xlbnwwfDF8MHx8fDA%3D',
      intro:'Experienced banking professional focused on client relationships, financial solutions, operational excellence, and creating value through reliable and personalized banking services.',
      tag:'Banker',
    },
    {
      image :'https://plus.unsplash.com/premium_photo-1661722273422-8d1723e8f905?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
      intro:'I bring strong banking knowledge, customer-focused communication, and financial expertise to help clients achieve their goals while supporting organizational growth.',
      tag:'Finance',
    },
    {
      image :'https://images.unsplash.com/photo-1681874981393-003413f08d51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8',
      intro:'Passionate banking professional dedicated to understanding customer needs, providing effective financial solutions, maintaining integrity, and building long-term professional relationships.',
      tag:'service',
    },
    {
      image :'https://images.unsplash.com/photo-1744551472640-5b242dc56597?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
      intro:'I bring strong banking knowledge, customer-focused communication, and financial expertise to help clients achieve their goals while supporting organizational growth.',
      tag:'leadership',
    }
  ]
  return (
    <div>
     <Section1 users ={users}/> 
     <Section2 />
    </div>
  )
}

export default App
