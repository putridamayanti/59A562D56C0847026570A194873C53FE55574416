import { createMuiTheme } from "@material-ui/core/styles";
import colors from "./colors";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: colors.pink,
            dark: '#eb443d'
        },
        secondary: {
            main: colors.red,
            dark: '#913631'
        },
    },
})

export default theme
