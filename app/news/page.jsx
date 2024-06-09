import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const newsList = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1573748240263-a4e9c57a7fcd",
        title: "The Coldest Sunset",
        date: "27.05.2024"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1525026198548-4baa812f1183?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Lorem ipsum dolor sit amet.",
        date: "28.05.2024"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1598201116904-9613ee826e9a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Fuga aspernatur pariatur inventore",
        date: "29.05.2024"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Dicta autem aspernatur sequi.",
        date: "30.05.2024"
    },
]

const News = () => {
    return (
        <div className='flex gap-1 flex-wrap justify-center p-10'>
            {newsList.map(news =>
                <div key={news.id} className="bg-slate-100 overflow-hidden border-b-4 border-blue-500 w-1/3 m-10">
                    <Link href={`/news/${news.id}`}>
                        <Image
                            src={news.image} alt={news.title}
                            className="w-full object-cover h-32 sm:h-48 md:h-64"
                            width={1200}
                            height={1200}
                        />
                    </Link>
                    <div className="p-4 md:p-6">
                        <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">News</p>
                        <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">{news.title}</h3>
                        <div className="text-sm flex items-center">
                            <svg className="opacity-75 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width={12} height={12} viewBox="0 0 97.16 97.16" style={{ enableBackground: 'new 0 0 97.16 97.16' }} xmlSpace="preserve">
                                <path d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z" />
                                <path d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z" />
                            </svg>
                            <p className="leading-none">{news.date}</p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default News