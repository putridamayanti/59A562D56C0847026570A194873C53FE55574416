import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import colors from "../constants/colors";
import {formatToRupiah} from "../common/currency";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0),\n' +
            '#ffffff)'
    },
    paper: {
        background: colors.red,
        margin: 16,
        padding: 8,
        display: 'flex',
        justifyContent: 'space-between',
        '& p': {
            margin: 0,
            color: colors.light,
            fontSize: 16
        },
        '& span': {
            color: colors.light,
            fontSize: 12
        }
    },
    iconBox: {
        display: 'flex',
        alignItems: 'center'
    },
    icon: {
        color: colors.light
    },
}))

function FloatingCard(props) {
    const classes = useStyles()
    const { qty, total } = props
    return (
        <Box className={classes.root}>
            <Paper className={classes.paper}>
                <Box>
                    <p>{qty} items | {formatToRupiah(total)}</p>
                    <span>Termasuk ongkos kirim</span>
                </Box>
                <Box className={classes.iconBox}>
                    <ShoppingCartIcon className={classes.icon} fontSize="large"/>
                    <ArrowForwardIosIcon className={classes.icon} fontSize="small"/>
                </Box>
            </Paper>
        </Box>
    )
}

export default FloatingCard
