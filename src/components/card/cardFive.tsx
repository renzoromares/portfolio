import React from 'react'
import { IContent } from '../../types/typess'

export const CardFive = (props: IContent) => {
    const { CCardFive, id } = props
    return (
        <>
            <div  
                id={`${id}`}
                className={`slg:py-[25px] slg:px-[30px] slg:mt-[30px] bg-[#fff] dark:bg-[#101010] dark:border dark:border-[#1f1f1f] border border-[#efeef5] p-[40px] rounded-[20px] card-one w-[100%] ${CCardFive}`}
            >
                <div className="card-one_wrapper">
                    <span className='font-semibold text-[#848899] text-[20px] mb-[20px] block'>Interest</span>
                    <p className='smd:text-[14px] slg:leading-loose tblg:text-[16px] text-[18px] mt-[20px] text-[#848899] dark:text-[#fff]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quae similique rem non dicta officia at voluptatem, maxime exercitationem fugit magni molestias dolor asperiores aut esse, iusto nemo quam vitae!</p>
                </div>
            </div>
        </>
    )
}
