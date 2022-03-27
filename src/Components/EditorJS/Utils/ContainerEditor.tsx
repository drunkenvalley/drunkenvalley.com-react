import React from 'react'
import { Colors, IContainer } from './Container'

interface Props extends IContainer {
  onChange: Function
}

const Dot = ({ item }: { item: string }) => (
  <article className={`ratio ratio-1x1 rounded-pill bg-${item} border`} style={{ height: '1.5rem', width: '1.5rem' }} />
)

const ColorListItems = (name: string, onChange: Function) => Colors.map(item => (
  <li key={`${name}-${item}`}>
    <button className="dropdown-item" onClick={() => onChange({ [name]: item })}>
      <Dot item={item} />
    </button>
  </li>
))

const ColorDropdown = <T extends {}>({ children, name, onChange }: { children?: T, name: string, onChange: Function }) => (
  <div className="btn-group">
    <button type="button" className="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      {children || 'Click!'}
    </button>
    <ul className="dropdown-menu" style={{ minWidth: 0 }}>
      {ColorListItems(name, onChange)}
    </ul>
  </div>
)

const ContainerEditor = ({ onChange }: Props) => {
  return (
    <div className="btn-group bg-white rounded" role="group" aria-label="Basic example">
      <ColorDropdown name='background' onChange={onChange}>
        <i className="bi bi-file-image-fill"></i>
      </ColorDropdown>
      <ColorDropdown name='color' onChange={onChange}>
        <i className='bi bi-pencil-fill'></i>
      </ColorDropdown>
    </div>
  )
}

export default ContainerEditor
