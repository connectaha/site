import React from 'react'
import { Link } from 'gatsby'
import Logo from '../images/connectaha300.svg';

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
                <Link><Logo className={headerStyles.logo} to="/" /></Link>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/schedule">Schedule</Link>
                    </li>
                    {/* <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/sessions">Sessions</Link>
                    </li> */}
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/speakers">Speakers</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/sponsors">Sponsors</Link>
                    </li>
                    {/* <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header