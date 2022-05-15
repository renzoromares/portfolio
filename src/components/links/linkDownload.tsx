import React from 'react'
import { ILinks } from '../../types/typess'
import resume from "../../assets/doc/resume.pdf"
import { useEffect } from 'react'
import { useState } from 'react'


export const LinkDownload = (props: ILinks) => {
    const { link, classDownload, text, fileName ='Renzo.pdf'} = props
    const [data, setLink] = useState<any>('')

    useEffect(()=>{
        if(link === "#" || !link) return;
        setLink(link)
    },[link])
    return (
        <a 
            href={resume}
            download = {fileName}
            className={`dark:text-[#101010] bg-[#101010] dark:bg-[#fff] rounded-[18px] text-[#fff] dark:text-gray-400 bg-white focus:outline-none shadow-none px-[22px] p-[15px] text-lg outline-none ring-transparent cursor-pointer block ${classDownload}`} rel="noreferrer"
        >{text}</a>
    )
}
