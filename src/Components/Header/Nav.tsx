import React, { ReactNode } from 'react'

export interface HeaderProps {
    children?: ReactNode[]
}

const Header = ({ children }: HeaderProps): JSX.Element =>
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">🍺 drunkenvalley.com</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {children}
        </div>
    </nav>

export default Header
