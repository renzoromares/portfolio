import React from 'react'
import { CardOne } from '../card/cardOne'
import { CardTri } from '../card/cardTri'
import { CardTwo } from '../card/cardTwo'
import { CardFour } from '../card/cardFour'
import { CardFive } from '../card/cardFive'

export const Content = () => {
    return (
        <>
            <div className="smd:pb-[80px] smd:p-[25px] smd:pt-[40px] tblg:w-[100%] bg-[#f5f7fa] dark:bg-[#131313] pb-[80px] p-[50px] relative flex flex-wrap h-[auto] w-[85%] content">
                <CardOne 
                    id={"card-one"}
                    CCardOne={""}
                />  
                <CardTwo 
                    id={"card-two"}
                    CCardTwo={"mt-[45px]"}  
                />
                <CardTri 
                    id={"card-tri"}
                    CCardTri={"mt-[45px]"}                    
                />    
                <CardFour
                    id={"card-four"}
                    CCardFour={"mt-[45px]"}                    
                />
                 <CardFive
                    id={"card-five"}
                    CCardFive={"mt-[45px]"}
                />  
            </div>
        </>
    )
}
