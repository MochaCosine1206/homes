import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import "./style.css";

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 12,
    },
    root: {
        flexGrow: 1,
    }
})


export function InventoryCard(props) {
    const classes = useStyles();
    return (
            <Container maxWidth="false">
            <Card className={classes.card, classes.pos} id="houseCards">
                <div className={classes.root}>
                    <Grid container spacing={2}>
                    <Grid item xs={8} id="cardText">
                        <h5 className="left-align">{props.name}</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id # </th>
                                        <th>Model #</th>
                                    </tr>
                                </thead>
                            <tbody>
                                <tr>
                                    <td className="left-align">{props.id}</td>
                                    <td className="left-align">{props.modelNumber}</td>
                                </tr>
                            </tbody>
                            </table>
                    </Grid>
                    <Grid item xs>
                        <img id="houseThumbnail" src={props.ThumbnailImage || "https://via.placeholder.com/200X150"} alt="..." />
                    </Grid>
                    </Grid>
                </div>
            </Card>
        </Container>  
    );
}


export default InventoryCard