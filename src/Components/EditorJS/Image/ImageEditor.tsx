import React from 'react'
import { ContainerEditor, IContainer } from 'Components/EditorJS'

interface Props extends IContainer {
  children?: any,
  onChange: Function
}

function createImg (file: File, onChange: Function): void {
  const src = URL.createObjectURL(file)

  onChange({ src })
}

const ImageEditor = ({ background, children, color, onChange }: Props) => (
  <aside className='w-100 mb-3 d-flex flex-row align-items-center justify-content-center'>
    <div className='me-3'>
      <input className="form-control border-dark" type="file" id="formFileMultiple" onChange={(e) => createImg(e!.target!.files![0], onChange)} />
    </div>
    <ContainerEditor onChange={onChange} />
  </aside>
)

export default ImageEditor
