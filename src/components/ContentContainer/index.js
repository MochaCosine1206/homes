import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AvailableCard from '../AvailableCard'
import InventoryCard from '../InventoryCard'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import MultipleSelect from '../MultipleSelect'
import Grid from '@material-ui/core/Grid'
import "./style.css";


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
})


export function ContentContainer(props) {
    let search = "";
    let filter= [];
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
        props.filterData(search)
    }

    function filterChange (feature) {
        filter = feature;
        props.filterFeatures(feature)
    }

    

    return (   
        <div className={ classes.root }>
            
            <AppBar position="static" color="default">
            <Container maxWidth="md">
                    <Typography variant="h5" id="brand">Home Inventory</Typography>
                    <Tabs indicatorColor="primary" textColor="primary" value={value} onChange={handleChange}>
                        <Tab label="Inventory" />
                        <Tab label="Available" />
                    </Tabs>
                    </Container>
            </AppBar>
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
            <FormControl
            id="searchBar" 
            className={classes.margin} value={search} 
            onChange={searchChange}>
            <InputLabel htmlFor="input-with-icon-adornment">Search for a home</InputLabel>
            <Input
            startAdornment={
                <InputAdornment position="start">
                <Search />
                </InputAdornment>
            }
            />
        </FormControl>
        </Grid>
        <Grid item xs={6}>
        <MultipleSelect
        value={filter} 
        allFeatures={props.allFeatures}
        filterChange={filterChange}
        />
        </Grid>
        </Grid>
        </Container>
            {value === 0 && inventoryHomes.map(home => (
                    <InventoryCard
                    key={home.Id}
                    id={home.Id}
                    name={home.Description}
                    modelNumber={home.HomeId}
                    thumbnail={home.ThumbnailImage}
                     />
                ))}
            {value === 1 && availableHomes.map(home => (
                    <AvailableCard
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


export default ContentContainer