import React from "react";
import classnames from "classnames";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GridListTile from "@material-ui/core/GridListTile";
import Box from "@material-ui/core/Box";
import colors from "../constants/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 60,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        background: 'transparent',
        textTransform: 'none',
        borderRadius: 50
    },
    active: {
        background: colors.dark,
        borderRadius: 50,
        '& span': { margin: 0, fontSize: 12, color: `${colors.white} !important` },
        '& p': { margin: 0, fontSize: 18, fontWeight: 500, color: `${colors.white} !important` }
    },
    day: {
        height: '100%',
        textAlign: 'center',
        padding: 5,
        '& span': { margin: 0, fontSize: 12, color: colors.dark },
        '& p': { margin: 0, fontSize: 18, fontWeight: 500, color: colors.dark }
    },
    disabled: {
        '& span': { margin: 0, fontSize: 12, color: `${colors.lightGrey} !important` },
        '& p': { margin: 0, fontSize: 18, fontWeight: 500, color: `${colors.lightGrey} !important` }
    },
}))

function CustomDateButton(props) {
    const classes = useStyles()
    const { date, day, active, disabled, onClick } = props

    return (
        <GridListTile className={classnames(
            classes.root,
            active && classes.active,
        )} onClick={!disabled && onClick}>
            <Box className={classnames(
                classes.day,
                disabled && classes.disabled
            )}>
                <span>{day}</span>
                <p>{date}</p>
            </Box>
        </GridListTile>
    )
}

export default CustomDateButton
