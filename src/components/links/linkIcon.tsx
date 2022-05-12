import React from 'react'
import 'remixicon/fonts/remixicon.css'
// import { ILinks } from "../../types/typess"
import {ILinks} from '../../types/typess'

export const LinkIcon = (props: ILinks) => {
    const { link, text, icon } = props
    return (
        <>
            <a 
                href={link}
                className="block text-[#273756] dark:text-[#fff] font-meduim mt-[15px] text-[18px] pl-[30px] relative"
            >
                <i className={`absolute left-0 top-[0%] translate-y-[0%] ${icon}`}></i>
                {text}
            </a>
        </>
    )
}