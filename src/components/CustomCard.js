import React from "react";
import classnames from "classnames";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Rating from '@material-ui/lab/Rating';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AddIcon from '@material-ui/icons/Add';
import colors from "../constants/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '16px 0',
        boxShadow: '0px 8px 10px 0px rgba(10,31,68,0.1)',
        borderRadius: 8
    },
    hide: {
        display: 'none'
    },
    image: {
        width: '100%',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8
    },
    content: {
        padding: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: 500,
        color: colors.dark
    },
    subtext: {
        fontSize: 14,
        color: colors.grey
    },
    ratings: {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            color: colors.grey,
            marginRight: 4
        },
        '& .MuiRating-label': {
            zIndex: '0 !important'
        },
        '& .MuiRating-iconFilled': {
            color: colors.pink
        }
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 16px 16px 16px',
    },
    cartButton: {
        background: colors.pink
    }
}))

function CustomCard(props) {
    const classes = useStyles()
    const { image, name, price, rating, hide, action } = props

    return (
        <Paper className={classnames(classes.root, hide && classes.hide)}>
            <img src={image} className={classes.image} alt="product"/>
            <Box className={classes.content}>
                <Box className={classes.ratings}>
                    <Typography>{rating.toFixed(1)}</Typography>
                    <Rating size="small" defaultValue={0.0} value={parseFloat(rating)} precision={0.5} />
                </Box>
                <Typography variant="h6" className={classes.name}>{name}</Typography>
                <Typography variant="body2" className={classes.subtext}>by Kulina &bull; Uptown Lunch </Typography>
            </Box>
            <Box className={classes.actions}>
                <Typography variant="h6" className={classes.name}>{price}</Typography>
                <Button variant="contained" color="primary"
                        disableElevation
                        className={classes.cartButton}
                    endIcon={<AddIcon/>} onClick={action}>
                    Add
                </Button>
            </Box>
        </Paper>
    )
}

export default CustomCard
