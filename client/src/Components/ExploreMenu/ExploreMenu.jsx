import React from 'react';
import './ExploreMenu.css';
import {menu_list} from '../../assets/assets';


const url = "http://localhost:8006/products";

const fetchData = async ()=>{
  try{
    const response = await axios(url);
    const data = response.data;
    console.log(data);

  }catch(error)
  {
    console.log(error.response);
}};

useEffect(()=>{
  fetchData();
},[])


const ExploreMenu = ({category,setCategory}) =>{
    return(
        <div className='explore-menu' id = 'explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array</p>
            <div className='explore-menu-list'>
                {menu_list.map((item,index) =>{
                    return(
                        < div onClick = {()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?"active":""} src = {item.menu_list} alt=''/>
                            <p> {item.menu_name}</p>

                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default ExploreMenu;
