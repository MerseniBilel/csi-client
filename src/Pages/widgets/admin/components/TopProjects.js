import React from 'react'
import {LocationMarkerIcon,CalendarIcon} from '@heroicons/react/outline';
const TopProjects = (props) => {

    console.log(props.teamMembers)

    const Team = props.teamMembers.image.map(member => {
        return <img src={member} alt="member" className="h-8 w-8 rounded-full "/>
    })


    return (
        <div className="relative bg-csi-primary py-6 px-6 rounded-3xl w-96  my-6 shadow-2xl">
        <div className=" text-white flex items-center absolute rounded-full  px-4  left-4 -top-6">
            <img className="h-16 w-16 rounded-full" alt="owner" src={props.projectOwner}/>
        </div>
        <div className="mt-8">
            <p className="text-2xl text-csi-nav my-4">{props.projcetName}</p>
            <div className="flex space-x-2 text-csi-bg-color text-sm">
                <LocationMarkerIcon className="h-5 w-5"/>
                <p>{props.teamMembers.teamName}</p>
            </div>
            <div className="flex space-x-2 text-gray-300 text-sm my-3">
                <CalendarIcon className="h-5 w-5 dark:text-green-700"/>
                <p>1 week ago</p>
            </div>
            <div className="border-t-2 border-csi-second"></div>
            <div className="flex justify-between">
                <div className="my-2">
                    <p className="font-semibold text-base mb-2 text-csi-bg-color">Team Member</p>
                    <div className="flex -space-x-2">
                       {Team}
                    </div>
                </div>
                <div className="my-2">
                    <p className="font-semibold text-base mb-2 text-csi-bg-color">Progress</p>
                    <div className="text-base text-csi-bg-color font-semibold">
                        <p>{props.progress}%</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default TopProjects
