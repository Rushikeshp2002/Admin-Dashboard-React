import React from 'react'
import './Sidebar.css'
import Logo from '../../imgs/Shop-Logo.jpg'
import {UilSignOutAlt} from "@iconscout/react-unicons"
import {UilBars} from "@iconscout/react-unicons"
import {SidebarData} from "../../Data/Data"
import { useState } from 'react'
import { motion } from 'framer-motion'

export const Sidebar = () => {

    const [selected,setSelected] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const SidebarVariants={
        true:{
            left:'0'
        },
        false:{
            left:'-60%'
        }
    }
  return (
    <>
        <div className='bars' style={expanded?{left:'60%'}:{left:'5%'}}
        onClick={()=>setExpanded(!expanded)}
        >
            <UilBars/>
        </div>
    <motion.div className='Sidebar' 
        variants={SidebarVariants}
        animate={window.innerWidth<=768?`${expanded}`:''}
    >
       <div className="logo">
            <img src={Logo} alt="logo-shop" />
            <span>
                Urban <span>Utopia</span>
            </span>
       </div>

       <div className="Menu">
            {SidebarData.map((item,index)=>{
                return(
                    <div className={selected===index?'MenuItem active':'MenuItem'}
                    key={index}
                    onClick={()=>setSelected(index)}
                    >
                        <item.icon/>
                        <span>
                            {item.heading}
                        </span>
                    </div>
                )
            })}

            <div className='MenuItem'>
                <UilSignOutAlt/>
            </div>
       </div>
    </motion.div>
    </>
  )
}
