import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "dayjs/locale/id";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import {
  DarkBlue,
  Dark_LightBlue,
  Light_LightBlue,
  Light_Grey,
  Gold,
  Red,
  LandingLayoutAppBarColor,
} from "../src/assets/theme/colors.js";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: '"Nunito", "Arial", "sans-serif"',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: Nunito, Arial, sans-serif;
        }
      `,
    },
  },
  palette: {
    primary: {
      main: DarkBlue,
    },
    secondary: {
      main: Dark_LightBlue,
    },
    tertiary: {
      main: Gold,
    },
    error: {
      main: Red,
    },
    info: {
      main: Light_LightBlue,
    },
    warning: {
      main: Gold,
    },
    lightGrey: {
      main: Light_Grey,
    },
    appBarGrey: {
      main: LandingLayoutAppBarColor,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="id">
      <App />
    </LocalizationProvider>
  </ThemeProvider>
);
