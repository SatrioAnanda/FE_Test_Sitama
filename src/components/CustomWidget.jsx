import { Button, Grid, Typography } from "@mui/material";
import * as Colors from "../assets/theme/colors";

const WidgetCard = (props) => {
  console.log(props?.data);
  return (
    <Grid
      key={`widget-card-${props.index}`}
      item
      container
      xs={12}
      sx={{
        marginTop: 4,
        backgroundColor: Colors.Light_Grey,
        borderRadius: "20px",
        paddingY: "30px",
      }}
      alignItems={"center"}
    >
      <Grid item xs={2} sx={{}}>
        <Typography
          align="center"
          fontWeight={"bold"}
          sx={{ color: "#222D64", fontSize: 18 }}
        >
          {props.index}
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography
          align="left"
          fontWeight={"bold"}
          sx={{ color: "#222D64", fontSize: 18 }}
        >
          {props?.data?.service_id?.service_name}
        </Typography>
      </Grid>
      <Grid item xs={2} textAlign={"center"}>
        <Button
          variant="contained"
          size={"small"}
          style={{
            backgroundColor: Colors.BlueLight,
            color: Colors.White,
            borderRadius: "15px",
          }}
          onClick={() =>
            props.fieldTestFormModalOpenHandler(props.fieldTestData)
          }
        >
          Edit
        </Button>
      </Grid>
    </Grid>
  );
};

export default WidgetCard;
