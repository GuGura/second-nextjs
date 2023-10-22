import prisma from "@/lib/db/prisma";
import ProductCard from "@/components/ProductCard";
import {Metadata} from "next";

interface SearchPageProps {
  searchParams: { query: string };
}

export function generateMetadata({searchParams: {query}}: SearchPageProps): Metadata {
  return {
    title: `Search: ${query} - Flowmazon`
  }
}

export default async function SearchPage({searchParams: {query}}: SearchPageProps) {
  const product = await prisma.product.findMany({
    where: {
      OR: [
        {name: {contains: query, mode: 'insensitive'}},
        {description: {contains: query, mode: 'insensitive'}},
      ]
    },
    orderBy: {id: 'desc'},
  })

  if (product.length === 0) {
    return <div className='text-center'>No products found</div>
  }

  return (
    <div className='my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
      {product.map(product =>
        <ProductCard product={product} key={product.id}/>)}
    </div>
  )
}