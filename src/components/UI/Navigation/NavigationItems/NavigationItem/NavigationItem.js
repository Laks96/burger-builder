import React from 'react'
import classes from './NavigationItem.module.css'
import {NavLink} from 'react-router-dom'


const NavigationItem = (props) => {
return <li className={classes.NavigationItem}>
<NavLink to={props.link}
className = {props.active} {...props}>{props.children}
</NavLink>
</li>
}


export default NavigationItem
