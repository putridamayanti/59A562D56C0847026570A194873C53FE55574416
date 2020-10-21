import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import Box from "@material-ui/core/Box";
import colors from "../constants/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0),\n' +
            '#ffffff)',

    },
    paper: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    close: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    icon: {
        color: colors.dark
    },
    content: {
        padding: 16
    }
}))

function BottomDrawer(props) {
    const classes = useStyles()
    const { open, onClose, children } = props
    return (
        <Drawer
            anchor="bottom"
            open={open}
            onClose={onClose}
            classes={{
                paper: classes.paper
            }}>
            <Box className={classes.close}>
                <IconButton onClick={onClose}>
                    <CloseIcon fontSize="small" className={classes.icon}/>
                </IconButton>
            </Box>
            <Box className={classes.content}>
                { children }
            </Box>
        </Drawer>
    )
}

export default BottomDrawer
