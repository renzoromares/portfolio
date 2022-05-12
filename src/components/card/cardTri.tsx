import React from 'react'
import { IContent } from '../../types/typess'
import { ExpTxt } from '../text/expText'

export const CardTri = (props: IContent) => {
    const { CCardTri, id } = props
    return (
        <>
            <div 
                id={`${id}`}
                className={`slg:py-[25px] slg:px-[30px] slg:mt-[30px] bg-[#fff] dark:bg-[#101010] dark:border dark:border-[#1f1f1f] border border-[#efeef5] p-[40px] rounded-[20px] card-one w-[100%] ${CCardTri}`}
            >
                <div className="card-one_wrapper">
                    <span className='font-semibold text-[#848899] text-[20px] mb-[20px] block'>Experience</span>

                    <ExpTxt 
                        TWrap={"mb-[35px]"}
                        TCompany={"Valve"}
                        TDate={"January 2022 - December 2022"}
                        TDetails={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quae similique rem non dicta officia at voluptatem, maxime exercitationem fugit magni molestias dolor asperiores aut esse, iusto nemo quam vitae!"}
                    />

                    <ExpTxt 
                        TWrap={"mb-[35px]"}
                        TCompany={"Riot Games"}
                        TDate={"January 2021 - December 2021"}
                        TDetails={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quae similique rem non dicta officia at voluptatem, maxime exercitationem fugit magni molestias dolor asperiores aut esse, iusto nemo quam vitae!"}
                    />

                    <ExpTxt 
                        TWrap={"mb-[35px]"}
                        TCompany={"From Software"}
                        TDate={"January 2020 - December 2020"}
                        TDetails={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quae similique rem non dicta officia at voluptatem, maxime exercitationem fugit magni molestias dolor asperiores aut esse, iusto nemo quam vitae!"}
                    />

                    <ExpTxt 
                        TWrap={"mb-[35px]"}
                        TCompany={"Capcom"}
                        TDate={"January 2019 - December 2019"}
                        TDetails={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quae similique rem non dicta officia at voluptatem, maxime exercitationem fugit magni molestias dolor asperiores aut esse, iusto nemo quam vitae!"}
                    />

                    <ExpTxt 
                        TWrap={"mb-[15px]"}
                        TCompany={"Bandai Namco"}
                        TDate={"January 2018 - December 2018"}
                        TDetails={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quae similique rem non dicta officia at voluptatem, maxime exercitationem fugit magni molestias dolor asperiores aut esse, iusto nemo quam vitae!"}
                    />
                    
                </div>
            </div>
        </>
    )
}
