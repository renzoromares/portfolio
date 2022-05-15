import React from 'react'
import { ILinks } from '../../types/typess'
import path from "../../assets/doc/resume.pdf"


export const LinkDownload = (props: ILinks) => {
    const { link = path, classDownload, text, fileName ='Renzo.pdf'} = props
    return (
        <a 
            href={path}
            download = {fileName}
            className={`dark:text-[#101010] bg-[#101010] dark:bg-[#fff] rounded-[18px] text-[#fff] dark:text-gray-400 bg-white focus:outline-none shadow-none px-[22px] p-[15px] text-lg outline-none ring-transparent cursor-pointer block ${classDownload}`} rel="noreferrer"
        >{text}</a>
    )
}
