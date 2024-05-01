import React from "react";
import Avatar from "../assets/avatar.svg";
const Dashboard = () => {
    const contacts = [
        {
            name: 'Bilal',
            status: 'Available',
            img: Avatar
        },
        {
            name: 'Tulaib',
            status: 'Available',
            img: Avatar
        },
        {
            name: 'Raahim',
            status: 'Away',
            img: Avatar
        },
        {
            name: 'Abdullah',
            status: 'Away',
            img: Avatar
        },
        {
            name: 'Jawad',
            status: 'Available',
            img: Avatar
        },
        {
            name: 'Kashif',
            status: 'Available',
            img: Avatar
        }
    ]
    return(
        <div className="w-screen flex">
            <div className="w-[20%] h-screen bg-light-gray">
                <div className="flex items-center my-4 mx-6">
                    <img src={Avatar} className="w-[15%] h-[15%]"></img>
                    <div className="ml-4">
                        <h3 className="text-lg text-light">Faseeh Uddin Shazil</h3>
                        <p className="text-sm font-light text-light">My Account</p>
                    </div>
                </div>
                <hr />
                <div className="mx-6 mt-6">
                    <div className="font-bold text-light">Messages</div>
                    <div>
                        {
                            contacts.map(({name, status, img})=>{
                                return(
                                    <div className="flex items-center py-4 border-b border-b-gray-300">
                                        <div className="flex cursor-pointer items-center">
                                            <img src={img} className="w-[13%] h-[13%]"></img>
                                            <div className="ml-4">
                                                <h3 className="text-sm text-light font-semibold">{name}</h3>
                                                <p className="text-xs font-light text-light">{status}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-[55%] h-screen"></div>
            <div className="w-[25%] h-screen"></div>
        </div>
    )
}

export default Dashboard;