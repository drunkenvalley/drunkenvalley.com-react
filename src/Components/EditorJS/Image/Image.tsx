import React, { ChangeEvent, useState } from 'react'
import './Image.scss'

interface ImageBlockProps {
    className?: string,
    editing?: Boolean,
    onChange?: any,
    src?: string
}

export default function ImageBlock ({ className = '', editing = false, src = '' }: ImageBlockProps): JSX.Element {
  const [imgSrc, setSrc] = useState(src)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!editing) {
      return
    }

    const input = event.target as HTMLInputElement
    if (!input.files?.length) {
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      setSrc(e?.target?.result as string || '')
    }

    reader.readAsDataURL(input.files[0])
  }

  return (
    <>
        <img src={imgSrc} className={`editorjs imageblock editing bg-white ${className}`} />
        {editing &&
        <div className="p-3 mt-3 bg-light shadow rounded z-bump">
            <label htmlFor="imageToolBlock" className="form-label">Image file to display</label>
            <input className="form-control" onChange={onChange} type="file" id="imageToolBlock" />
        </div>
        }
    </>
  )
}
