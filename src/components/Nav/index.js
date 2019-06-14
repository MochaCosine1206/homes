import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AvailableCard from "../AvailableCard"
import InventoryCard from "../InventoryCard"
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';
import "./style.css";


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
})


export function Nav(props) {
    let search = ""
    let allHomes = props.allHomes
    let availableHomes = allHomes.filter(home => home.IsModel === true)
    let inventoryHomes = allHomes.filter(home => home.IsModel === false)
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue)
    }


    function searchChange (event, value) {
        search = event.target.value;
        console.log(search)
        props.filterData(search)
    }

    

    return (   
        <div className={ classes.root }>
            <AppBar position="static" color="default">
                    <h2 className="left-align">Home Inventory</h2>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Available" />
                        <Tab label="Inventory" />
                    </Tabs>
            </AppBar>
            <FormControl 
            className={classes.margin} value={search} 
            onChange={searchChange}>
            <InputLabel htmlFor="input-with-icon-adornment">Search</InputLabel>
            <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start">
                <Search />
                </InputAdornment>
            }
            />
        </FormControl>
            {value === 0 && availableHomes.map(home => (
                    <AvailableCard
                    key={home.Id}
                    id={home.Id}
                    name={home.Description}
                    modelNumber={home.HomeId}
                    thumbnail={home.ThumbnailImage}
                     />
                ))}
            {value === 1 && inventoryHomes.map(home => (
                    <InventoryCard
                    key={home.Id}
                    id={home.Id}
                    name={home.Description}
                    modelNumber={home.HomeId}
                    thumbnail={home.ThumbnailImage}
                     />
                ))}
        </div>
    );
}


export default Nav