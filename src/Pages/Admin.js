import React from 'react'
import NavItems from "./widgets/NavItems"
import {
    BrowserRouter as Router,
    Switch, Route, Link,useLocation 
  } from "react-router-dom";
import AdminNav from "./widgets/admin/AdminNav";
import AdminHome from "./widgets/admin/AdminHome"
import TeamList from "./widgets/team/TramList";

const Admin = () => {    

    return (
        <Router>
        <div className="flex font-Roboto justify-between bg-white">
            <aside className=" h-full fixed  xl:flex md:hidden lg:flex flex-col bg-csi-bg-color shadow hidden">
                <div className="h-16 flex items-center w-full">
                    <Link className="h-6 w-16 mx-auto" to="google.com">
                        <img 
                            className="h-12 w-12 mx-auto"
                            src="https://csi-maghreb.com/media/2020/06/cropped-FAVICON-1-192x192.png"
                            alt="logo"
                        />
                    </Link>
                </div>
                <ul className="pt-4">
                    <NavItems />
                </ul>
            <div className="mt-auto h-16 flex items-center w-full">
                <button
                    className="h-16 w-10 mx-auto flex justify-center items-center
                    focus:text-orange-500 hover:bg-red-200 focus:outline-none">
                    <svg
                        className="h-5 w-5 text-red-700"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                       >
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>

                </button>
		    </div>
            </aside>

            <section className="w-screen flex flex-col">
                <AdminNav/>
                <Switch>
                    <Route exact path="/admin">
                        <AdminHome/>
                    </Route>
                    <Route exact path="/admin/team">
                        <TeamList/>
                    </Route>
                </Switch>
            </section>
            
            
        </div>

        </Router>
    )
}

export default Admin
