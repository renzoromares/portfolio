import React from 'react'
import { LinkSocial } from '../links/linkSocial'
import { IProfile } from '../../types/typess'

export const Profile = (props: IProfile) => {
    const { img, name } = props
    return (
        <>
            <div className="relative photo-wrapper">
                <div className="rounded-full relative img-profile">
                    <img className='img-profile' src={img} alt="" />    
                    <span className='absolute right-[20px] bottom-[-20px] pt-[0.05rem] pb-[0.2rem] pl-[0.3rem] pr-[0.25rem] bg-[#00c74d] dark:bg-[#00c74d] border-[2px] border-[#fff] dark:border-[#101010] rounded-full'>☕</span>
                </div>
            </div>
            <div className="mt-[20px] mx-[30px] profile-name">
                <h2 className='text-[24px] text-[#273756] dark:text-[#fff] font-semibold mt-[7px] inline-block'>{name}</h2>    

                <LinkSocial 
                    link={"https://github.com/renzoromares"}
                    classSoc={""}
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
        </>
    )
}
