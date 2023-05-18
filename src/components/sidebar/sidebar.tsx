import React from 'react'
// import { LinkIcon } from '../links/linkIcon'
import { Profile } from '../profile/profile'
// import { LinkDownload } from '../links/linkDownload'
import 'remixicon/fonts/remixicon.css'

import pp from "../../assets/img/pp.png"
import link from "../../assets/doc/resume.pdf"
import bg from "../../assets/img/bg.jpg"
import { LinkIcon } from '../links/linkIcon'
import { LinkDownload } from '../links/linkDownload'

export const Sidebar = () => {
    return (
        <>
            <div className="tblg:hidden bg-[#fff] dark:bg-[#101010] dark:border-[#1f1f1f] w-[15%] h-[100vh] sticky top-0 border-r border-[#efeef5] outline-none z-10 flex flex-col sidebar">
                {/* f9fbfc */}
                <Profile 
                    img={pp}
                    name={"Renzo Romares"}
                />
                <div className="mt-[50px] mx-[30px] profile-menu">
                    <h3 className='font-medium text-[#848899] mb-[10px]'>Menu</h3>
                    <LinkIcon
                        icon={"ri-information-line"} 
                        link={"#card-one"}
                        text={"About"}
                    />
                    <LinkIcon
                        icon={"ri-code-box-line"} 
                        link={"#card-two"}
                        text={"Skills"}
                    />
                    <LinkIcon
                        icon={"ri-briefcase-line"} 
                        link={"#card-tri"}
                        text={"Experience"}
                    />
                    <LinkIcon
                        icon={"ri-award-fill"} 
                        link={"#card-four"}
                        text={"Education"}
                    />
                    <LinkIcon
                        icon={"ri-basketball-line"} 
                        link={"#card-five"}
                        text={"Interest"}
                    />
                </div>

                <div className="mt-[187px] text-center download-cv">
                    <LinkDownload 
                        link={link}
                        classDownload={"my-[0] mx-[auto] w-[75%]"}
                        text={"Download CV"}
                        fileName={"Romares.pdf"}
                    />
                </div>
            </div>
        </>
    )
}
