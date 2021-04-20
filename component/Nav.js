import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export const Nav = () => {
    const [collapse, setCollapse] = useState(true)

    return (
        <nav className={styles.nav}>
            <Link href='/'><img src='/logo.png'></img></Link>
            <div className={styles.navItem}>
                <Link href='/'>Home</Link>
                <Link href='/control'>Control Methods</Link>
                <Link href='/animals'>Animals</Link>
                <Link href='/about'>About Us</Link>
            </div>
        </nav>
    )
}

