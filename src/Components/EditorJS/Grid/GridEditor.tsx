import React, { FC } from 'react'

interface GridEditorProps {
  className: string,
  data: any,
  onChange?: Function
}

const GridEditor:FC<GridEditorProps> = ({ children: T, data }) => {
  return (
    <section>
    </section>
  )
}

export default GridEditor
