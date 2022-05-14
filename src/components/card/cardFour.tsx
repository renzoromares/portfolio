import React from 'react'
import { IContent } from '../../types/typess'
import { ExpTxt } from '../text/expText'


export const CardFour = (props:IContent) => {
    const { CCardFour, id } = props
    return (
        <>
            <div  
                id={`${id}`}
                className={`slg:py-[25px] slg:px-[30px] slg:mt-[30px] bg-[#fff] dark:bg-[#101010] dark:border dark:border-[#1f1f1f] border border-[#efeef5] p-[40px] rounded-[20px] card-one w-[100%] ${CCardFour}`}
            >
                <div className="card-one_wrapper">
                    <span className='font-semibold text-[#848899] text-[20px] mb-[20px] block'>Education</span>

                    <ExpTxt 
                        TWrap={"mb-[35px]"}
                        TCompany={"University of San Jose - Recoletos"}
                        TDate={"June 2016 - December 2021"}
                        TDetails={`Bachelor of Science in Computer Engineering`}
                    />

                    {/* <ExpTxt 
                        TWrap={"mb-[35px]"}
                        TCompany={"King’s College School"}
                        TDate={"June 2013 - March 2018"}
                        TDetails={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quae similique rem non dicta officia at voluptatem, maxime exercitationem fugit magni molestias dolor asperiores aut esse, iusto nemo quam vitae!"}
                    />

                    <ExpTxt 
                        TWrap={"mb-[15px]"}
                        TCompany={"Southbank International School"}
                        TDate={"June 2002 - Marchh 2013"}
                        TDetails={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quae similique rem non dicta officia at voluptatem, maxime exercitationem fugit magni molestias dolor asperiores aut esse, iusto nemo quam vitae!"}
                    /> */}
                </div>
            </div>
        </>
    )
}
