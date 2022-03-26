import React, { FC } from 'react'
import './Grid.sass'

interface GridProps {
  className: string,
  data: any,
  onChange?: Function
}

const Grid:FC<GridProps> = ({ children, className, data, ...props }) => {
  return (
    <section className={`grid ${className}`}>
      {children}
    </section>
  )
}

export default Grid
