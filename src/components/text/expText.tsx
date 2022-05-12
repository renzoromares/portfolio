import React from 'react'
import { IExpTxt } from '../../types/typess'

export const ExpTxt = (props: IExpTxt) => {
    const { TWrap, TCompany, TDate, TDetails } = props
    return (
        <>
            <div className={`exp ${TWrap}`}>
                <div className="flex items-center justify-between">
                    <h2 className='smd:text-[20px] slg:leading-tight tblg:text-[24px] text-[32px] text-[#273756] dark:text-[#fff] font-bold mt-[7px] inline-block relative'>                        
                        {TCompany}                    
                    </h2>
                    <h3 className='smd:text-[18px] slg:text-right slg:ml-[50px] slg:leading-tight tblg:text-[20px] text-[24px] text-[#273756] dark:text-[#fff] font-bold mt-[7px] inline-block relative'>                        
                        {TDate}                    
                    </h3>
                </div>
                <p className='smd:text-[14px] slg:leading-loose tblg:text-[16px] text-[18px] mt-[12px] text-[#848899] dark:text-[#fff]'>{TDetails}</p>
            </div>
        </>
    )
}
