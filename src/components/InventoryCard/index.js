import React from "react";
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import "./style.css";

const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 20,
    },
    root: {
        flexGrow: 1,
    }
})


export function InventoryCard(props) {
    const classes = useStyles();
    return (
            <Container maxWidth="md">
            <Card className={classes.card, classes.pos} id="houseCards">
                <div className={classes.root}>
                    <Grid container spacing={2}>
                    <Grid item xs={8} id="cardText">
                        <h5 id="cardName">{props.name}</h5>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Id # </TableCell>
                                        <TableCell>Model #</TableCell>
                                    </TableRow>
                                </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="left-align">{props.id}</TableCell>
                                    <TableCell className="left-align">{props.modelNumber}</TableCell>
                                </TableRow>
                            </TableBody>
                            </Table>
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