import EditorJS, { EditorConfig, ToolConstructable, ToolSettings } from '@editorjs/editorjs'
import React, { Component } from 'react'

interface EditorProps {
  tools?: {
    [toolName: string]: ToolConstructable | ToolSettings<any>
  }
}
interface EditorState {
  editor: EditorJS
}

export class Editor extends Component<EditorProps, EditorState> {
  componentDidMount () {
    const { tools } = this.props

    const config: EditorConfig = {
      minHeight: 0,
      tools
    }

    this.setState({
      editor: new EditorJS(config)
    })
  }

  render () {
    return <div id="editorjs" className='bg-light editor-bg rounded container p-4' />
  }
}

export default Editor
