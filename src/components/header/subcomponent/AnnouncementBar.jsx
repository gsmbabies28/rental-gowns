import React from 'react'

const AnnouncementBar = ({text}) => {
  return (
    <div id="announcement-bar" className='bg-gray-950 text-white text-sm p-1'><p>{text}</p></div>
  )
}

export default AnnouncementBar