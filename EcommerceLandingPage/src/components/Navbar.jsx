import React from 'react'
import Button from './Button'

const Navbar = () => {

    const navLinks =[ 
        {name: 'Home', link: '#'},
        {name: 'Shop', link: '#'},
        {name: 'Cart', link: '#'},
        {name: 'About', link: '#'},
        {name: 'Contact Us', link: '#'}
    ]

  return (
    <div className='w-full h-18 p-3 flex justify-between px-10 items-center '>
        <h1 className='font-primary text-4xl text-primary'>Trendies.com</h1>
        <ul className='gap-8 text-xl font-semibold hidden lg:flex'>
            {navLinks.map((link, index) => (
                <li key={index}>
                    <a className='hover:text-primary transition-colors delay-100' href={link.link}>{link.name}</a>
                </li>
            ))}
        </ul>
        <div className='hidden lg:flex gap-5'>
            <Button button={{name:"Sign Up"}}/>
            <Button button={{name:"Login"}}/>
        </div>

    </div>
  )
}

export default Navbar