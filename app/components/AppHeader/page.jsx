import Link from 'next/link'
import React from 'react'

const AppHeader = () => {
    return (
        <header>
            <h1>Gokhan Company</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/solutions">Solutions</Link>
                    </li>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/news">News</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader