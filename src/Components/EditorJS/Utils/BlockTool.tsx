import { Component, ReactElement } from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'

interface IToolbox {
  title: string,
  icon: ReactElement
}

abstract class BaseBlock<P = { children?: any }, S = {}> extends Component<P, S> {
  protected static _tool: IToolbox
  protected static _readonly: boolean
  protected _el!: HTMLElement
  template!: () => JSX.Element

  static get isReadOnlySupported () {
    return this._readonly
  }

  static get toolbox () {
    return {
      title: this._tool.title,
      icon: ReactDOMServer.renderToString(this._tool.icon)
    }
  }

  get element () {
    if (!this._el) {
      this._el = document.createElement('div')
    }

    return this._el
  }

  render = (): HTMLElement => {
    ReactDOM.render(this.template(), this.element)

    return this.element
  }

  save = () => this.state

  update = (newData: any) => this.setState({ ...newData })
}

export default BaseBlock
