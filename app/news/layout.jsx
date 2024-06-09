import Link from 'next/link'
import React from 'react'

const NewsLayout = ({ children }) => {
    return (
        <>
            <div className='leftbar fixed hidden sm:flex sm:flex-col gap-8 bg-slate-800'>
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