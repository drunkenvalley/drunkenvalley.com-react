/* eslint-disable react/jsx-key */
import React, { Children, ReactElement, ReactNode } from 'react'

export interface NavItemsProps {
  children?: ReactElement | ReactNode[]
}

const NavItems = ({ children = [] }: NavItemsProps): JSX.Element => {
  let ListItems

  if (children) {
    ListItems = Children.toArray(children).map((child: any) =>
      <li key={`link-${child.props.href}`} className="nav-item">
        {child}
      </li>
    )
  }

  return (
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        {ListItems}
      </ul>
    </div>
  )
}

export default NavItems
