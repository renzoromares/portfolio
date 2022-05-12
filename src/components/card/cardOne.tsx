import React from 'react'
import { IContent } from '../../types/typess'
import { LinkSocial } from '../links/linkSocial'

export const CardOne = (props: IContent) => {
    const { CCardOne, id } = props

    return (
        <>
            <div  
                id={`${id}`}
                className={`slg:py-[25px] slg:px-[30px] bg-[#fff] dark:bg-[#101010] dark:border dark:border-[#1f1f1f] border border-[#efeef5] p-[40px] rounded-[20px] card-one w-[100%] ${CCardOne}`}
            >
                <div className="card-one_wrapper">
                    <span className='slg:mb-[10px] font-semibold text-[#848899] text-[20px] mb-[20px] block'>About</span>

                    <h2 className='smd:text-[40px] text-[42px] text-[#273756] dark:text-[#fff] font-bold mt-[7px] mb-[-20px] inline-block relative'>                        
                        Chris P. Bacon                    
                        <span className='slg:hidden block absolute right-[-190px] top-[10px] px-[12px] py-[6px] rounded-[12px] text-[#fff] font-semibold text-[18px] mt-[2px]  dev'>Software Engineer</span>
                    </h2>

                    <span className='slg:inline-block slg:mt-[12px] hidden px-[20px] py-[6px] rounded-[12px] text-[#fff] font-semibold text-[18px] mt-[2px]  dev'>Software Engineer</span>

                    <div className="slg:mt-[15px] flex flex-wrap mt-[10px]">
                        <LinkSocial 
                            link={"#"}
                            classSoc={"mr-[18px]"}
                            icon={"ri-github-fill"}
                            text={"chrispbacon"}
                        />

                        <LinkSocial 
                            link={"#"}
                            classSoc={""}
                            icon={"ri-linkedin-box-fill"}
                            text={"chrispbacon"}
                        />   
                    </div>
                    <p className='slg:leading-loose slg:mt-[15px] smd:text-[14px] tblg:text-[16px] text-[18px] mt-[20px] text-[#848899] dark:text-[#fff]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quae similique rem non dicta officia at voluptatem, maxime exercitationem fugit magni molestias dolor asperiores aut esse, iusto nemo quam vitae!</p>
                </div>
            </div>
        </>
    )
}
