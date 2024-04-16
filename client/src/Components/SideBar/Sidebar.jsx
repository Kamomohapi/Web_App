import React from 'react';
import './Sidebar';
import {BsCart3,BsGrid1X2Fill,BsFillArchieveFill,BsFillGrid3X3Fill,BsPeopleFill,
    BsListCheck,BsMenuButtonWideFill,BsFillGearFill} from 'react-icons'

const Sidebar = () => {
    return(
    <>

        <aside id = "sidebar">
            <div className = "sidebar-title">

                <div className="sidebar-brand">
                    <BsCart3 className ="icon-header"/> SHOP
                </div>
                <span className="icon close_icon"></span>
            </div>

            <ul className = "sideber-list">
                <li className ="sidebar-list-item">
                    <a href = "">
                        <BsGrid1X2Fill className ='icon'/>DASHBOARD
                    </a>

                </li>

                 <li className ="sidebar-list-item">
                    <a href = "">
                        <BsFillArchieveFill className ='icon'/>PRODUCTS
                    </a>
                    
                </li>

                  <li className ="sidebar-list-item">
                    <a href = "">
                        <BsFillGrid3X3Fill className ='icon'/>CATEGORIES
                    </a>
                    
                </li>

                 <li className ="sidebar-list-item">
                    <a href = "">
                        <BsListCheck className ='icon'/>ORDERS
                    </a>
                    
                </li>
                <li className ="sidebar-list-item">
                    <a href = "">
                        <BsPeopleFill className ='icon'/>CUSTOMERS
                    </a>
                    
                </li>
                <li className ="sidebar-list-item">
                    <a href = "">
                        <BsMenuButtonWideFill className ='icon'/>REPORTS
                    </a>
                    
                </li>

                <li className ="sidebar-list-item">
                    <a href = "">
                        <BsFillGearFill className ='icon'/>SETTINGS
                    </a>
                    
                </li>


            </ul>
        </aside>
    </>    
    
    );
} 

export default Sidebar;