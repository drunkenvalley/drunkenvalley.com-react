import React, { ReactElement, ReactNode } from 'react'
import { Container, EditorTool } from 'Components/EditorJS'
import ImageEditor from './ImageEditor'
import { IContainer } from '../Utils/Container'

interface State extends IContainer {
}

interface Props extends State {
  children?: ReactElement | ReactNode[]
}

export default class ImageTool extends EditorTool<Props, State> {
  constructor (props: Props) {
    super(props)
    const { children, ...state } = props

    this.state = { ...state }
  }

  render = () => {
    return (
      <Container background={this.state.background} color={this.state.color} width={this.state.width}>
        <ImageEditor background={this.state.background} color={this.state.color} onChange={this.onChange}>
          <button onClick={() => this.onChange({ width: 'fluid' })}>Test</button>
        </ImageEditor>
        <img className='w-100' style={{ minHeight: 32 }} {...this.state} />
      </Container>
    )
  }
}

export const ImageToolIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-image" viewBox="0 0 16 16">
    <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"/>
  </svg>
)
