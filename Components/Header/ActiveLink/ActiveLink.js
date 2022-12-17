import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'
const ActiveLink = ({
                        href,
                        exact = false,
                        name,
                        ...props
                    }) => {
    const { pathname } = useRouter()
    const isActive = exact ? pathname === href : pathname.startsWith(href)

    if (isActive) {
        props.className += ' border-b-4  transition active border-Malachite   '
    }else {
        props.className += '   border-b-4  border-transparent '
    }

    return (
        <Link href={href} {...props} >
            {name}
        </Link>
    )
};

export default ActiveLink;