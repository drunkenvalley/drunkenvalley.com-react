import React, { Children, ReactElement, ReactNode } from 'react'

interface FooterProps {
    children?: ReactElement | ReactNode[]
}

const Footer = ({ children = [] }: FooterProps): JSX.Element => {
  let ListItems

  if (children) {
    ListItems = Children.toArray(children).map((child: any) =>
          <li key={`footer-link-${child.props.href}`} className="ms-3">
              {child}
          </li>
    )
  }

  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center p-3">
      <div className="col-md-4 d-flex align-items-center">
      <span className="text-muted">Drunkenvalley © 2022</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          {ListItems}
      </ul>
    </footer>
  )
}

export default Footer
