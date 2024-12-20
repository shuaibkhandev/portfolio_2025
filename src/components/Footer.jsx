import React from 'react'

const Footer = ({darkMode}) => {
  return (
    <footer className='py-4'>
<p className={`text-center rounded-sm ${darkMode ? "text-light-gray":""}`}>  All Rights Reserved &copy; Shuaib Khan</p>
    </footer>
  )
}

export default Footer