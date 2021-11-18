import React from "react";
import classes from "./Navigation.module.scss";
import { Menu } from "@material-ui/icons";
import { Games } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Navigation = (props) => {
    return (
        <div className={classes.NavBar}>
            <span>
             <span  className={classes.SideBar}  onClick={props.sidebarhandler}>
            <Menu  className={classes.Icon} style={{fontSize:"2.5rem"}}/>
            </span>
            <Link to='/'>
            <span>
            <Games className={classes.Icon} style={{fontSize:"2.5rem"}}/> 
            <span className={classes.IconText}>GameNation</span>
            </span>
            </Link>
            </span>
            
        </div>
    );
};


export default Navigation;
