import React from 'react'
import { render } from 'react-dom'
import { renderToString } from 'react-dom/server'
import { ImageTool, EditorState } from './Image.ReactTool'

export default class Image {
  static get toolbox () {
    return {
      icon: renderToString(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-image-fill" viewBox="0 0 16 16">
          <path d="M4 0h8a2 2 0 0 1 2 2v8.293l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2zm4.002 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
          <path d="M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z"/>
        </svg>
      ),
      title: 'Image'
    }
  }

  state: EditorState

  constructor (props: EditorState) {
    this.state = { ...props }
  }

  onChange = <T extends {}>(newState: T, callback?: () => void): void => {
    this.state = {
      ...newState
    }
    if (callback) {
      callback()
    }
  }

  render = () => {
    const node = document.createElement('div')
    render((
      <ImageTool {...this.state} callback={this.onChange} />
    ), node)
    return node
  }

  save () {
    return this.state
  }
}
