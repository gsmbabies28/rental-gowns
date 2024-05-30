import React from 'react'

const AnnouncementBar = ({text}) => {
  return (
    <div id="announcement-bar" className='bg-cyan-800 text-cyan-50   text-sm p-1'><p>{text}</p></div>
  )
}

export default AnnouncementBar