import React from 'react'
import { IContent } from '../../types/typess'

import LC from "../../assets/img/1200px-C_Programming_Language.svg.png"
import LCSharp from "../../assets/img/cdnlogo.com_c-svg.png"
import LJs from "../../assets/img/Unofficial_JavaScript_logo_2-svg.png"
import LTs from "../../assets/img/Typescript_logo_2020-svg.png"
import LRt from "../../assets/img/rethinkdb-logo-png-transparent.png"
import LMq from "../../assets/img/MySQL-Logo.wine.png"
import LElas from "../../assets/img/Elastic_logo.png"
import LNodeJs from "../../assets/img/1280px-Nodejs_logo.png"
import LNest from "../../assets/img/nestjs-logo-svg.png"

export const CardTwo = (props: IContent) => {
    const { CCardTwo, id } = props

    return (
        <>
            <div 
                id={`${id}`}
                className={`slg:py-[25px] slg:px-[30px] slg:mt-[30px] bg-[#fff] dark:bg-[#101010] dark:border dark:border-[#1f1f1f] border border-[#efeef5] p-[40px] rounded-[20px] card-one w-[100%] ${CCardTwo}`}
            >
                <div className="card-one_wrapper">
                    <span className='font-semibold text-[#848899] text-[20px] mb-[20px] block'>Skills</span>                    

                    <h4 className='tblg:mb-[15px] text-[16px] mt-[20px] mb-[5px] font-semibold uppercase opacity-50 tracking-wide text-[#848899] dark:text-[#fff]'>Back End Databases</h4>

                    <div className="tblg:ml-[10px] tblg:mt-[12px] ml-[18px] flex items-center flex-wrap justify-start">
                        <img 
                            className='slg:w-[220px] slg:mt-[5px] tblg:w-[270px] tblg:mr-[40px] w-[430px] h-[auto] mr-[70px] pointer-events-none dark:mix-blend-screen'
                            src={LRt}
                            alt=""
                        />
                        <img 
                            className='slg:w-[180px] slg:mt-[30px] tblg:w-[210px] tblg:mr-[40px] tblg:mt-[6px] w-[350px] h-[auto] mr-[70px] pointer-events-none dark:mix-blend-screen'
                            src={LMq}
                            alt=""
                        />
                        <img 
                            className='slg:w-[180px] slg:mt-[25px] tb:mt-[28px] tblg:mt-[0px] tblg:w-[230px] tblg:mr-[40px] w-[350px] h-[auto] mr-[70px] pointer-events-none dark:mix-blend-screen'
                            src={LElas}
                            alt=""
                        />
                    </div>

                    <h4 className='tblg:mb-[15px] text-[16px] mt-[50px] mb-[15px] font-semibold uppercase opacity-50 tracking-wide text-[#848899] dark:text-[#fff]'>Programming Languages</h4>

                    <div className="tblg:ml-[10px] ml-[18px] flex items-center flex-wrap justify-start">
                        <img 
                            className='slg:w-[90px] slg:mt-[5px] tblg:w-[110px] tblg:mr-[40px] w-[170px] h-[auto] mr-[70px] pointer-events-none dark:mix-blend-screen'
                            src={LC}
                            alt=""
                        />
                        <img 
                            className='slg:w-[90px] slg:mt-[5px] tblg:w-[110px] tblg:mr-[40px] w-[170px] h-[auto] mr-[70px] pointer-events-none dark:mix-blend-screen'
                            src={LCSharp}
                            alt=""
                        />
                        <img 
                            className='slg:w-[90px] slg:mt-[25px] tblg:w-[110px] tblg:mr-[40px] w-[170px] h-[auto] mr-[70px] pointer-events-none dark:mix-blend-screen'
                            src={LJs}
                            alt=""
                        />
                        <img 
                            className='slg:w-[90px] slg:mt-[25px] tblg:w-[110px] w-[170px] h-[auto] pointer-events-none dark:mix-blend-screen'
                            src={LTs} 
                            alt=""
                        />
                    </div>

                    <h4 className='tblg:mb-[15px] text-[16px] mt-[50px] mb-[25px] font-semibold uppercase opacity-50 tracking-wide text-[#848899] dark:text-[#fff]'>Framework</h4>

                    <div className="tblg:ml-[10px] ml-[18px] flex items-center flex-wrap justify-start">
                        <img 
                            className='slg:w-[220px] slg:mt-[5px] tblg:w-[280px] tblg:mr-[40px] w-[380px] h-[auto] mr-[70px] pointer-events-none dark:mix-blend-screen'
                            src={LNest}
                            alt=""
                        />
                        <img 
                            className='slg:w-[220px] slg:mt-[25px] tblg:w-[230px] tblg:mr-[0px] w-[300px] h-[auto] mr-[70px] pointer-events-none dark:mix-blend-screen'
                            src={LNodeJs}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
