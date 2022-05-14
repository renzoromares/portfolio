import React from 'react'
import { ISocials } from '../../types/typess'

export const LinkSocial = (props: ISocials) => {
    const { link, classSoc, icon, text } = props
    return (
        <a 
            href={link}
            className={`text-[#888c95] relative pl-[22px] mt-[5px] block ${classSoc}`}
            target="_blank" rel="noreferrer"
        >
            <i className={`absolute left-0 top-[0%] translate-y-[0%] text-[#888c95] ${icon}`}></i> {text}
        </a>
    )
}
