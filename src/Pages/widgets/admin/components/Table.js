import React from 'react'
import {TrashIcon, 	EyeIcon , 	PencilIcon} from '@heroicons/react/outline';

const Table = () => {
    return (
        <tr class="border-b border-gray-200 hover:bg-gray-100">
            <td class="py-3 px-6 text-left whitespace-nowrap">
                <div class="flex items-center">
                    <div class="mr-2">
                        <img className="w-6 h-6" src="https://img.icons8.com/nolan/64/react-native.png" alt="img"/>
                    </div>
                    <span class="font-medium">React Project</span>
                </div>
            </td>
            <td class="py-3 px-6 text-left">
                <div class="flex items-center">
                    <div class="mr-2">
                        <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="client"/>
                    </div>
                    <span>Eshal Rosas</span>
                </div>
            </td>
            <td class="py-3 px-6 text-center">
                <div class="flex items-center justify-center">
                    <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" alt="team1" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" alt="team2" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" alt="team3" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" alt="team3" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                </div>
            </td>
            <td class="py-3 px-6 text-center">
                <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
            </td>
            <td class="py-3 px-6 text-center">
                <div class="flex item-center justify-center">
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <EyeIcon />
                    </div>
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <PencilIcon/>
                    </div>
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <TrashIcon/>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default Table
