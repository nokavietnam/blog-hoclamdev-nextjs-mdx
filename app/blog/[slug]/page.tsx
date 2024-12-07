import dynamic from 'next/dynamic'
import React from 'react'

import MdxLayout from '../../components/mdx/mdx-layout'

export default async function Blog({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    const MDXContent = dynamic(() => import(`@/markdown/blog/${slug}.mdx`));

    return (
        <MdxLayout>
            <MDXContent />
        </MdxLayout>
    )
}