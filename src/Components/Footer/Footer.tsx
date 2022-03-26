import React, { ReactElement, ReactNode } from 'react'

interface FooterProps {
  children?: ReactElement | ReactNode[]
}

const Footer = ({ children = [] }: FooterProps): JSX.Element => (
  <footer className="d-flex flex-wrap justify-content-between align-items-center p-3">
    <div className="col-md-4 d-flex align-items-center">
      <span className="text-muted">Drunkenvalley © 2022</span>
    </div>
    {children}
  </footer>
)

export default Footer
