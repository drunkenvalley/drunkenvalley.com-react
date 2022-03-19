import EditorJS, { EditorConfig, ToolConstructable, ToolSettings } from '@editorjs/editorjs'
import React, { Component } from 'react'

export interface Props {
    tools?: {
        [toolName: string]: ToolConstructable | ToolSettings<any>
    }
}
interface State {
    editor: EditorJS
}

export class Editor extends Component<Props, State> {
  componentDidMount () {
    const { tools } = this.props

    const config: EditorConfig = {
      tools
    }

    this.setState({
      editor: new EditorJS(config)
    })
  }

  render () {
    return <div id="editorjs" />
  }
}
