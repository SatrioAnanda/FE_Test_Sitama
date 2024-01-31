import NotFoundIllustration from "../assets/img/404-illustration.svg";
import { Button, Grid, Typography, styled } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

function NotFoundView() {
  const location = useLocation();

  const IMG = styled("img")(() => ({
    width: "50%",
    height: "50%",
    marginBlock: "15px",
  }));
  return (
    <Grid
      container
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ height: "100%" }}
    >
      <IMG src={NotFoundIllustration} />
      <Typography variant="h4" fontSize={25} fontWeight={"bold"} mb={1}>
        Page Not Found
      </Typography>
      <Button variant="contained" sx={{ mt: 2 }} component={RouterLink} to={location.pathname.split('/')[0]}>
        Go Back
      </Button>
    </Grid>
  );
}
export default NotFoundView;
