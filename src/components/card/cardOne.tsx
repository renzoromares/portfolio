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
                        Renzo Romares               
                        <span className='slg:hidden block absolute right-[-190px] top-[10px] px-[12px] py-[6px] rounded-[12px] text-[#fff] font-semibold text-[18px] mt-[2px]  dev'>Software Engineer</span>
                    </h2>

                    <span className='slg:inline-block slg:mt-[12px] hidden px-[20px] py-[6px] rounded-[12px] text-[#fff] font-semibold text-[18px] mt-[2px]  dev'>Software Engineer</span>

                    <div className="slg:mt-[15px] flex flex-wrap mt-[10px]">
                        <LinkSocial 
                            link={"https://github.com/renzoromares"}
                            classSoc={"mr-[18px]"}
                            icon={"ri-github-fill"}
                            text={"rromares"}
                        />

                        <LinkSocial 
                            link={"https://www.linkedin.com/in/renzoromares/"}
                            classSoc={""}
                            icon={"ri-linkedin-box-fill"}
                            text={"rromares"}
                        />   
                    </div>
                    <p className='slg:leading-loose slg:mt-[15px] smd:text-[14px] tblg:text-[16px] text-[18px] mt-[20px] text-[#848899] dark:text-[#fff]'>
                        My goal is to work for a company, build trust, gain experience and utilize my skills and computer engineering studies to the maximum.
                    </p>
                </div>
            </div>
        </>
    )
}
