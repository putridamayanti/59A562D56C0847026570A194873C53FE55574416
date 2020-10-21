import React, {useEffect, useRef, useState} from "react";
import classnames from "classnames";
import {connect} from "react-redux";
import moment from "moment";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {convertDate, generateWeeks} from "../common/datetime";
import CustomDateButton from "../components/CustomDateButton";
import GridList from "@material-ui/core/GridList";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import CustomCard from "../components/CustomCard";
import FloatingCard from "../components/FloatingCard";
import colors from "../constants/colors";
import CustomTabs from "../components/CustomTabs";
import BottomDrawer from "../components/BottomDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import {formatToRupiah} from "../common/currency";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        background: colors.white
    },
    location: {
        '& span, h6': { color: colors.dark },
        '& h6': {
            fontSize: 16,
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            '& .MuiSvgIcon-fontSizeSmall': {
                color: colors.red
            }
        }
    },
    dateToolbar: {
        minHeight: 70,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        height: 70
    },
    tabs: {
        background: colors.white,
    },
    hideTabs: {
        display: 'none'
    },
    content: {
        padding: 16,
        marginBottom: 24,
        marginTop: 185
    },
    sectionTitle: {
        color: colors.dark,
        fontWeight: 700,
    },
    input: {
        margin: '16px 0',
        '& .MuiOutlinedInput-input': {
            padding: 16,
            paddingLeft: 0,
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: colors.lightGrey
            },
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.lightGrey,
        },
        "& .Mui-focused": {
            '& .MuiSvgIcon-root': {
                color: colors.pink
            }
        }
    },
    list: {
        '& .MuiListItem-root': {
            padding: 0
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 30,
            height: 30,
            marginRight: 16,
            background: colors.lightGrey,
            borderRadius: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& .MuiSvgIcon-root': {
                color: colors.grey
            }
        },
        '& .MuiListItemText-multiline': {
            paddingBottom: 16,
            borderBottom: `1px solid ${colors.light}`
        },
        '& .MuiTypography-colorTextSecondary': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        }
    },
}))

function MainScreen(props) {
    const { window, products, carts, locations } = props
    const classes = useStyles()
    const weeks = generateWeeks()

    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    const [drawer, setDrawer] = useState(false)
    const [query, setQuery] = useState({
        date: moment()
    })
    const [lunch, setLunch] = useState(0)

    const mounted = useRef()
    useEffect(() => {
        if (!mounted.current) {
            props.fetchProducts(query)
            mounted.current = true;
        }
    })

    const changeDate = (date) => {
        setQuery({ ...query, date: date })
        props.fetchProducts({ date: date })
    }

    const changeLocation = (e) => {
        const value = e.target.value
        if (value.length >= 3) {
            props.fetchLocation({ keyword: value })
        }
    }

    return (
        <Box className={classes.root}>
            <AppBar position="fixed" elevation={0} className={classes.appBar} >
                <Toolbar className={classes.toolbar}>
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                    <Box className={classes.location} onClick={() => setDrawer(true)}>
                        <Typography variant="caption">Location</Typography>
                        <Typography variant="subtitle2">
                            Tokopedia Tower
                            <ExpandMoreIcon fontSize="small"/>
                        </Typography>
                    </Box>
                </Toolbar>
                <Toolbar className={classes.dateToolbar}>
                    <GridList className={classes.gridList} cols={2.5}>
                        {weeks.map((item) => (
                            <CustomDateButton
                                date={item.date}
                                day={item.name}
                                active={moment(item.full).format('L') === moment(query.date).format('L')}
                                disabled={item.day === 6 || item.day === 7}
                                onClick={() => changeDate(item.full)}/>
                        ))}
                    </GridList>
                </Toolbar>
                <Toolbar className={classnames(classes.tabs, trigger && classes.hideTabs)}>
                    <CustomTabs active={lunch} onClick={(val) => setLunch(val)}/>
                </Toolbar>
            </AppBar>

            <BottomDrawer open={drawer} onClose={() => setDrawer(false)}>
                <Typography variant="h6">Cari makanan yang tersedia di lokasi kamu!</Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Cari lokasi ..."
                    className={classes.input}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocationOnIcon />
                            </InputAdornment>
                        ),
                    }}
                    onChange={(e) => changeLocation(e)}
                />
                { locations && (
                    <List className={classes.list}>
                        { locations.map(location => (
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <LocationOnIcon fontSize="small"/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={location.name}
                                    secondary={location.address}
                                />
                            </ListItem>
                        ))}
                    </List>
                )}
            </BottomDrawer>

            <Box className={classes.content}>
                { (products && products.length === 0) && (
                    <Typography style={{ textAlign: 'center' }}>No Data</Typography>
                ) }
                {products.map(({date, data}, i) => (
                    <Box>
                        <Typography variant="subtitle2" className={classes.sectionTitle}>
                            {convertDate(date)}
                        </Typography>
                        {data.map((item, j) => (
                            <CustomCard image={item.image} name={item.name} price={formatToRupiah(item.price)}
                                        rating={item.rating}
                                        hide={item.category !== lunch} action={() => props.addCart({ item: item })}/>
                        ))}
                    </Box>
                ))}
                { (products && products.length !== 0)  && (
                    <Typography style={{ textAlign: 'center' }}>- End of Data -</Typography>
                )}
            </Box>

            { (carts && carts.qty !== 0) && (
                <FloatingCard qty={carts.qty} total={carts.total}/>
            )}
        </Box>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (query) => dispatch({ type: 'FETCH_PRODUCTS', payload: query }),
        addCart: (query) => dispatch({ type: 'ADD_ITEM', payload: query }),
        fetchLocation: (query) => dispatch({ type: 'FETCH_LOCATION', payload: query })
    }
}

const mapStateToProps = (state) => {
    const { product, cart, location } = state
    return {
        products: product.data,
        carts: cart,
        locations: location.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
