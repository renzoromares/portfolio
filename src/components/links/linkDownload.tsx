import React from 'react'
import { ILinks } from '../../types/typess'

export const LinkDownload = (props: ILinks) => {
    const { link, classDownload, text } = props
    return (
        <a 
            href={link}
            className={`dark:text-[#101010] bg-[#101010] dark:bg-[#fff] rounded-[18px] text-[#fff] dark:text-gray-400 bg-white focus:outline-none shadow-none px-[22px] p-[15px] text-lg outline-none ring-transparent cursor-pointer block ${classDownload}`}
        >{text}</a>
    )
}
