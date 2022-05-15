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
                        TCompany={"Laboratory Assistant"}
                        TDate={"June 2016 - December 2021"}
                        TDetails=
                        {
                           `I was a laboratory asssistant in the University of San Jose - Recoletos Computer Engineering Laboratory.
                            In this particular job I used to fix configure and install computers. I also trouble shoot hardware devices,
                            teach and assists students in their needs. I also keep track of items the students borrowed and prepare
                            their equipments ahead of time. I also maintain orderleniss and cleanliness in the office.`
                        }
                    />

                    <ExpTxt 
                        TWrap={"mb-[35px]"}
                        TCompany={"Intern"}
                        TDate={"June 2020 - August 2020"}
                        TDetails =
                        {
                            `In this project my team was able to developed a Management Information System for the University of San Jose - Recoletos Faculty.
                             In this particular project we were able to create a system that automates and lessen the use of paper inside the said institution.`
                        }
                    />

                    <ExpTxt 
                        TWrap={"mb-[35px]"}
                        TCompany={"DNA Micro Software Company Inc."}
                        TDate={"December 2021 -  Present"}
                        TDetails = 
                        {
                            `I am a Backend developer that focuses on creating reusable codes using JavaScript and NodeJS.
                            In this experience I maintain and developed solutions that is efficient, secure and readable.`
                        }
                    />


                </div>
            </div>
            
        </>
    )
}
