import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import Grid from './Grid'

interface GridToolProps {
  data: any
}

interface GridToolState {
  data: any
}

export default class GridTool extends Component<GridToolProps, GridToolState> {
  static get toolbox () {
    return {
      icon: ReactDOMServer.renderToString(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
          <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"/>
        </svg>
      ),
      title: 'Grid'
    }
  }

  static get isReadOnlySupported () {
    return false
  }

  constructor (props: GridToolProps) {
    super(props)
    this.state = {
      data: props.data
    }
  }

  onDataChange = (newData: any) => {
    this.setState({
      data: {
        ...newData
      }
    })
  }

  render () {
    const rootNode = document.createElement('div')
    const wrapperClassNames = 'd-flex flex-column align-items-center mb-3 border rounded p-3'
    rootNode.className = wrapperClassNames

    ReactDOM.render(
      (
        <Grid className='rounded shadow' onChange={this.onDataChange} data={this.state.data}>

        </Grid>
      ),
      rootNode)

    return rootNode
  }

  save () {
    return this.state.data
  }
}
