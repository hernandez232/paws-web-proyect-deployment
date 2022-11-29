import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";

class Anchor extends Component {
    render() {
        return(
           <div className="h-20 sm:h-auto my-5" >
                <div className=" text-white font-Dm font-regular text-xl h-full ">
               <ul className=" flex flex-1 flex-row flex-wrap-nowrap gap-6 items-center justify-center sm:inline-block sm:w-full xl:h-full h-full  ">
                   <li className="w-2/12 sm:w-full xl:my-1  h-full"> <NavLink  to="/NewPet" className={({isActive}) => (isActive ? 'hidden bg-inherit ' : '')} ><button  className="bg-newpink hover:bg-pink-800 py-4 px-4 rounded  w-full  h-full ">Agregar mascota </button></NavLink> </li>
                   <li className="w-2/12 sm:w-full xl:my-1  h-full"> <NavLink  to="/Dates" className={({isActive}) => (isActive ? 'hidden bg-inherit' : '')} > <button className="bg-newblue hover:bg-blue-800 py-4 px-4 rounded  w-full  h-full"> Citas Programadas</button></NavLink> </li>
                   <li className="w-2/12 sm:w-full xl:my-1  h-full"> <NavLink  to="/DateHistory" className={({isActive}) => (isActive ? 'hidden bg-inherit' : '')} > <button className="bg-newpurple hover:bg-purple-800 py-4 px-4 rounded w-full  h-full"> Historial de citas</button></NavLink> </li>
                   <li className="w-2/12 sm:w-full xl:my-1 h-full"> <NavLink  to="/FavoritePost" className={({isActive}) => (isActive ? 'hidden bg-inherit' : '')} > <button className="bg-newgolden hover:bg-yellow-800 py-4 px-4 rounded w-full h-full"> Opciones</button></NavLink> </li>
               </ul>
    
            </div>
            <div>
                
            </div>
           </div>
        )
    }
}
export default Anchor;