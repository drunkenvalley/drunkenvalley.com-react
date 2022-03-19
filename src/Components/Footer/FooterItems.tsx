/* eslint-disable react/jsx-key */
import React, { Children, ReactElement, ReactNode } from 'react'

export interface FooterItemsProps {
    children?: ReactElement | ReactNode[]
}

const FooterItems = ({ children = [] }: FooterItemsProps): JSX.Element => {
  let ListItems

  if (children) {
    ListItems = Children.toArray(children).map((child: any) =>
        <li key={`link-${child.props.href}`} className="nav-item">
            {child}
        </li>
    )
  }

  return (
    <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
      {ListItems}
    </ul>
  )
}

export default FooterItems
