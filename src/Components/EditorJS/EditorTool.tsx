import { Component, ReactElement } from 'react'

class EditorTool<P = { children?: ReactElement | undefined }, S = {}> extends Component<P, S> {
  onChange = <T extends S>(newData: T, callback?: () => void) => this.setState({ ...newData }, callback)
  render!: () => JSX.Element
  save = () => this.state
}

export default EditorTool
