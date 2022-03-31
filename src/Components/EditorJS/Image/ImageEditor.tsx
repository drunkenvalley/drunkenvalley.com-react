import React from 'react'
import { ContainerEditor, IContainer } from 'Components/EditorJS'

interface Props extends IContainer {
  children?: any,
  onChange: Function
}

const ImageEditor = ({ background, children, color, onChange }: Props) => (
  <aside className='w-100 mb-3 d-flex flex-row align-items-center justify-content-center'>
    <ContainerEditor onChange={onChange} />
  </aside>
)

export default ImageEditor
