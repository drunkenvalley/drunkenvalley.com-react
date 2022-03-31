import React, { useState } from 'react'
import { Container, IContainer } from 'Components/EditorJS'
import Image from './Image'
import ImageEditor from './ImageEditor'

export interface EditorState extends IContainer {
  src?: string | undefined
}

export interface EditorProps extends EditorState {
  callback: Function
}

export function ImageTool ({ callback, ...props }: EditorProps) {
  const [state, setState] = useState(props)

  const onChange = <T extends {}, F extends () => void>(newData: T, callback?: F): void => {
    setState({ ...newData })
    callback && callback()
  }

  return (
    <>
      <ImageEditor background={state?.background} color={state?.color} onChange={onChange} />
      <Container background={state?.background} color={state?.color} width={state?.width}>
        <Image {...state} />
      </Container>
    </>
  )
}

export default ImageTool
