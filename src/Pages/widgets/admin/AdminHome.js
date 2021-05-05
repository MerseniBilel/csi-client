import React from 'react'
import TopProjects from "./components/TopProjects";
import Table from "./components/Table";
import LineChart from "./components/LineChart";
const NewFourProject = [
    {
        id:1, 
        projcetName: "Shopping App",
        projectOwner:"https://images.unsplash.com/photo-1602872246798-d0e48d73e204?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" ,
        teamMembers:{
                id:1,
                teamName:"Marketing Team",
                image:[
                    "https://images.unsplash.com/photo-1602872246798-d0e48d73e204?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1611604072243-ee79622b2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=943&q=80",
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                ]
            },
        progress:34
    },
    {
        id:2, 
        projcetName: "Leading Page",
        projectOwner:"https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" ,
        teamMembers:{
                id:2,
                teamName:"Dev Team",
                image:[
                    "https://images.unsplash.com/photo-1602872246798-d0e48d73e204?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1611604072243-ee79622b2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=943&q=80",
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                ]
            },
        progress:90
    },
    {
        id:3, 
        projcetName: "Busness Compare",
        projectOwner:"https://images.unsplash.com/photo-1611604072243-ee79622b2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=943&q=80" ,
        teamMembers:{
                id:3,
                teamName:"Busness Team",
                image:[
                    "https://images.unsplash.com/photo-1602872246798-d0e48d73e204?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1611604072243-ee79622b2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=943&q=80",
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                ]
            },
        progress:78
    },
    {
        id:4, 
        projcetName: "Web design",
        projectOwner:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" ,
        teamMembers:{
                id:4,
                teamName:"Busness Team",
                image:[
                    "https://images.unsplash.com/photo-1602872246798-d0e48d73e204?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1611604072243-ee79622b2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=943&q=80",
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                ]
            },
        progress:16
    },

];

const AdminHome = () => {
    const Projectlist = NewFourProject.map(item => {
        return <TopProjects 
                    key={item.id}
                    projcetName={item.projcetName}
                    projectOwner={item.projectOwner}
                    teamMembers={item.teamMembers}
                    progress={item.progress}
                />
    })
    return (
        <div className="mx-auto ml-24  mr-0">
            <h1 className="text-3xl mt-2 ml-2 font-semibold text-gray-800">Overview</h1>
            <pre className=" ml-4 cursor-pointer text-base font-medium mt-4  text-gray-500">Overview  &gt;  <span className="hover:text-gray-900 cursor-pointer">Home</span></pre>
            <div className="flex  mb-8 justify-center md:justify-between xl:justify-between lg:justify-between">
                <div className="ml-20 grid grid-cols-4 gap-6 ">
                    {Projectlist}
                </div>

            </div>

            <div className="flex items-start justify-between">
            <div className="ml-20 w-full">
                <LineChart/>
                </div>
                <div className="w-full ml-4">

                </div>

            </div>
            <div className="ml-16 mr-16 mt-16">
            <div class="bg-white shadow-md rounded my-6">
                    <table class="table-auto w-full">
                        <thead>
                            <tr class="bg-gray-400  text-csi-bg-color uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-left">Project</th>
                                <th class="py-3 px-6 text-left">Client</th>
                                <th class="py-3 px-6 text-center">Users</th>
                                <th class="py-3 px-6 text-center">Status</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                            <Table/>
                            <Table/>
                            <Table/>
                            <Table/>
                            <Table/>
                            <Table/>
                            <Table/>
                            <Table/>
                            <Table/>
                            <Table/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminHome


/*


            <div className="flex justify-start">
                <div className="w-auto xl:wx-auto ml-6">
                    <Chart/>
                </div>
                <div className="w-full">
                    <div class="bg-white shadow-md rounded my-6">
                        <table class="w-full table-auto">
                            <thead>
                                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                    <th class="py-3 px-6 text-left">Project</th>
                                    <th class="py-3 px-6 text-left">Client</th>
                                    <th class="py-3 px-6 text-center">Users</th>
                                    <th class="py-3 px-6 text-center">Status</th>
                                    <th class="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-600 text-sm font-light">
                                <Table/>
                                <Table/>
                                <Table/>
                                <Table/>
                                <Table/>
                                <Table/>
                                <Table/>
                                <Table/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

*/