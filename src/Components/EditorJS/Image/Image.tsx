import React from 'react'

interface IImage {
  src?: string
}

const Image = (props: IImage) => {
  return (
    <img className='w-100' {...props} />
  )
}

export default Image
