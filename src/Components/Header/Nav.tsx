import React, { ReactElement, ReactNode } from 'react'

export interface HeaderProps {
    children?: ReactElement | ReactNode[]
}

const Header = ({ children }: HeaderProps): JSX.Element =>
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <span className="navbar-brand">🔓 drunkenvalley.com</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {children}
        </div>
    </nav>

export default Header
