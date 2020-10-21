import React from "react";
import classnames from "classnames";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import colors from "../constants/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        borderRadius: 5,
    },
    image: {
        width: '100%'
    },
    button: {
        textTransform: 'none',
        color: colors.grey,
        border: `1px solid ${colors.lightGrey}`,
        '&:focus': {
            background: colors.dark
        }
    },
    buttonLeft: {
        borderRight: 'none',
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    buttonRight: {
        borderLeft: 'none',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
    active: {
        border: `1px solid ${colors.dark}`,
        background: colors.dark,
        color: colors.white
    },
}))

function CustomTabs(props) {
    const classes = useStyles()
    const { active, onClick } = props

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <Button fullWidth className={classnames(
                        classes.button,
                        classes.buttonLeft,
                        active === 0 && classes.active,
                    )} onClick={() => onClick(0)} color="primary">Lunch</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth className={classnames(
                        classes.button,
                        classes.buttonRight,
                        active === 1 && classes.active,
                    )} onClick={() => onClick(1)}>Dinner</Button>
                </Grid>
            </Grid>
        </Box>
    )
}

export default CustomTabs
