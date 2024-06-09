import Link from 'next/link'
import React from 'react'

const NewsLayout = ({ children }) => {
    return (
        <>
            <div className='leftbar'>
                <div className='leftbarLinks'>
                    <Link href="/news/last-news">Last News</Link>
                    <Link href="/news/recent-news">Recent News</Link>
                    <Link href="/news/new-news">New News</Link>
                </div>
            </div>
            <div className='right'>
                {children}
            </div>
        </>

    )
}

export default NewsLayout