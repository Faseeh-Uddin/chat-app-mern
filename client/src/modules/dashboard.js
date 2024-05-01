import React from "react";
import Avatar from "../assets/avatar.svg";
import Input from "../components/input";

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
            <div className="w-[55%] h-screen flex flex-col items-center">
                <div className="w-[75%] bg-light-gray h-[8%] mt-8 rounded-full flex items-center px-8">
                    <div className="cursor-pointer"><img src={Avatar} alt="img" className="h-[30px] w-[30px]" /></div>
                    <div className="ml-4 mr-auto">
                        <h3 className="font-bold text-light">Bilal</h3>
                        <p className="text-xs font-light text-light">Online</p>
                    </div>
                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#e8eaed" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        <path d="M15 7a2 2 0 0 1 2 2" />
                        <path d="M15 3a6 6 0 0 1 6 6" />
                        </svg>
                    </div>
                </div>
                <div className="h-[75%] w-full overflow-y-scroll">
                    <div className="p-8">
                        <div className="max-w-[40%] text-sm bg-light rounded-b-xl rounded-tr-xl p-4 mb-4">
                            AOA bhai. How are you doing? What's the update on the project?
                        </div>
                        <div className="max-w-[40%] text-sm bg-primary rounded-b-xl rounded-tl-xl p-4 mb-4 ml-auto text-light">
                            WAA bhai. I'm doing great, what about you? Project is in the pipeline, trying to pack up soon.
                        </div>
                        <div className="max-w-[40%] text-sm bg-light rounded-b-xl rounded-tr-xl p-4 mb-4">
                            AOA bhai. How are you doing? What's the update on the project?
                        </div>
                        <div className="max-w-[40%] text-sm bg-primary rounded-b-xl rounded-tl-xl p-4 mb-4 ml-auto text-light">
                            WAA bhai. I'm doing great, what about you? Project is in the pipeline, trying to pack up soon.
                        </div>
                        <div className="max-w-[40%] text-sm bg-light rounded-b-xl rounded-tr-xl p-4 mb-4">
                            AOA bhai. How are you doing? What's the update on the project?
                        </div>
                        <div className="max-w-[40%] text-sm bg-primary rounded-b-xl rounded-tl-xl p-4 mb-4 ml-auto text-light">
                            WAA bhai. I'm doing great, what about you? Project is in the pipeline, trying to pack up soon.
                        </div>
                    </div>
                </div>
                <div className="p-8 w-full flex items-center">
                    <Input placeholder="Type a message..." className="w-[85%]" inputClassName="p-4 border-0 shadow-md rounded-full bg-light outline-none" />
                    <div className="ml-2 mt-1 p-2 cursor-pointer bg-light rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
                        <path d="M6.5 12h14.5" />
                        </svg>
                    </div>
                    <div className="ml-2 mt-1 p-2 cursor-pointer bg-light rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M9 12h6" />
                        <path d="M12 9v6" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-[25%] h-screen"></div>
        </div>
    )
}

export default Dashboard;