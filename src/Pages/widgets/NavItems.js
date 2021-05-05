import React from 'react'
import {
     Link,useLocation
  } from "react-router-dom";

import {    
    HomeIcon,
    UserGroupIcon,
    PresentationChartBarIcon,
    CogIcon,
    CalendarIcon,

} from '@heroicons/react/outline'

/* 

*/


const navigation  = [
    {id: 1, widget : <HomeIcon  width={24} height={24}/>, href:"/admin"},
    {id: 2, widget : <UserGroupIcon width={24} height={24} /> , href:"/admin/team" },
    {id: 3, widget : <CalendarIcon width={24} height={24} />, href:"/admin/cal"},
    {id: 4, widget : <PresentationChartBarIcon width={24} height={24} />, href:"/admin/projects" },
    {id: 5, widget : <CogIcon width={24} height={24} />, href:"/admin/setting"},
    

]




const NavItems = () => {
    const location = useLocation();
    console.log(location);

    const listMenu = navigation.map(item => {
        return (
            <li key={item.id} className="pt-4">
                <Link
                    to={item.href}
                    className="h-16 px-6 flex justify-center items-center w-full
                    pt-10">
                    <div className=" flex transition duration-500 ease-in-out flex-col justify-center items-center w-12 h-12  rounded-full hover:bg-csi-primary hover:text-csi-bg-color transform hover:-translate-y-1 hover:scale-110" >{item.widget}</div>
                </Link>

            </li>

        );
    })
    return (
        <div>
            {listMenu}
        </div>
    );
}

export default NavItems
