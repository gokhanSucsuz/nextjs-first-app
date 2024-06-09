import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatem numquam facilis distinctio reiciendis reprehenderit expedita dolorum maiores sint velit?"
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg',
        imageAlt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id facere placeat incidunt illo temporibus nisi ad, nesciunt praesentium adipisci illum ipsa pariatur corrupti delectus.",
    },
    {
        id: 6,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg',
        imageAlt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quasi aliquid natus omnis corporis delectus. Iste dolore odit quos!",
    },
    {
        id: 7,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg',
        imageAlt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore iure quod ullam, corrupti modi architecto facilis, accusamus est quibusdam vero temporibus.",
    },
    {
        id: 8,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg',
        imageAlt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sint totam, quaerat nam possimus laborum.",
    },
    // More products...
]

const ProductsDetail = ({ params }) => {
    return (
        <div className="bg-white">
            <h1 className='font-bold'>Product Detail Page</h1>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.filter(product => product.id.toString() === params.id).map((product) => (
                        <div key={product.id} >
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <Image
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    width={200}
                                    height={200}
                                    priority
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.imageAlt}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsDetail