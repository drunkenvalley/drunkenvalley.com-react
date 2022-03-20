import React, { ChangeEvent, useState } from 'react'
import './Image.scss'

interface ImageBlockProps {
    className?: string,
    onChange?: any,
    data?: {
      align?: number,
      src?: string,
      type?: string
    }
}

export default function ImageBlock ({ className = '', onChange = () => {}, data }: ImageBlockProps): JSX.Element {
  // State because editor is not reactive
  const [imgSrc, setImgSrc] = useState(data?.src || '')
  const [imgType, setImgType] = useState(data?.type || 'normal')
  const [imgAlign, setImgAlign] = useState(data?.align || 50)

  // When setting image to upload
  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement
    if (!input.files?.length) {
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const file = e?.target?.result as string || ''

      onChange({
        src: file
      })
      setImgSrc(file)
    }

    reader.readAsDataURL(input.files[0])
  }

  // When setting type
  const onTypeChange = (newType: string) => {
    onChange({
      type: newType
    })
    setImgType(newType)
  }

  const onAlignChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newAlignment = event.target.value as unknown as number

    onChange({
      align: newAlignment
    })
    setImgAlign(newAlignment)
  }

  // Elements
  const typeOptions = [
    { name: 'splash', icon: 'distribute-horizontal' },
    { name: 'normal', icon: 'card-image' },
    { name: 'polaroid', icon: 'camera' },
    { name: 'fancy', icon: 'chevron-bar-right' }
  ]
  const typeButtons = typeOptions.map(({ name, icon }) => (
      <button key={`imagetool-type-${name}`} type="button" className="btn btn-primary" disabled={imgType === name} onClick={() => onTypeChange(name)}>
        <i className={`bi bi-${icon}`} aria-hidden="true"></i>
      </button>
  ))

  return (
    <>
      {!imgSrc &&
      <div className="p-3 bg-light shadow rounded">
        <label htmlFor="imageToolBlock" className="form-label">Image file to display</label>
        <input className="form-control" onChange={onFileChange} type="file" id="imageToolBlock" />
      </div>
      }
      {imgSrc &&
        <>
          <div className='d-flex flex-row align-items-center mb-3'>
            <div className="shadow z-bump btn-group">
              {typeButtons}
            </div>
            <div className="ms-3 z-bump btn-group">
              <input type="range" className="form-range" id="customRange1" onChange={onAlignChange} />
            </div>
          </div>
          <img src={imgSrc} className={`editorjs imageblock editing bg-white ${className} ${imgType}`} style={{ objectPosition: `50% ${imgAlign}%` }} />
        </>
      }
    </>
  )
}
