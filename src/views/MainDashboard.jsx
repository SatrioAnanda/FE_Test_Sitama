import NotFoundIllustration from "../assets/img/404-illustration.svg";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Service from "../services/Service";
import * as Colors from "../assets/theme/colors";
import WidgetCard from "../components/CustomWidget";
import SaveIcon from "@mui/icons-material/Save";

function MainDashboard() {
  const [dynamicRender, setDynamicRender] = useState();
  const retrieveDynamicRender = async () => {
    const response = await Service.getDynamicJson(2);
    setDynamicRender(response.data.data);
  };

  useEffect(() => {
    retrieveDynamicRender();
  }, []);
  return (
    <>
      <Grid container sx={{ marginY: 2 }}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "25px",
            }}
          >
            <Box>
              <Typography
                color={Colors.BluePrimary}
                sx={{ fontWeight: "700" }}
                variant="h5"
                fontSize={18}
              >
                List Pengerjaan
              </Typography>
              <Typography
                mt={3}
                color={Colors.BluePrimary}
                sx={{ fontWeight: "700" }}
                variant="h6"
                fontSize={18}
              >
                Silakang Selesaikan Pengerjaan Service Ini, Jika Sudah Selesai
                Klik Tombol "Order Selesai"
              </Typography>
              <Typography
                mt={3}
                color={Colors.Red}
                sx={{ fontWeight: "700" }}
                variant="h6"
                fontSize={18}
              >
                * Mandatory (Harus Dilengkapi)
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ marginY: "25px" }}>
          <Grid container>
            <Grid item xs={12}>
              {dynamicRender &&
                dynamicRender?.services_json?.map((data, index) => (
                  <>
                    <WidgetCard
                      key={index}
                      index={index + 1}
                      data={data}
                      //   fieldTestFormModalOpenHandler={fieldTestFormModalOpenHandler}
                      //   fieldTestFeedbackModalOpenHandler={
                      //     fieldTestFeedbackModalOpenHandler
                      //   }
                      //   setShowPreview={setShowPreview}
                    />
                  </>
                ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} textAlign={"right"}>
          <Button
            variant="contained"
            size={"small"}
            startIcon={<SaveIcon />}
            style={{
              backgroundColor: Colors.BluePrimary,
              color: Colors.White,
              borderRadius: "5px",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
      {/* <FieldTestDialog
        modalProps={fieldTestFormModalProps}
        closeModalHandler={fieldTestFormModalCloseHandler}
        submitModalHandler={handleFormSubmitFieldTest}
        validationSchema={validationSchemaFieldTest}
      />
      <NotesDialog
        modalProps={fieldTestNoteModalProps}
        closeModalHandler={fieldTestNoteModalCloseHandler}
        submitModalHandler={handleNoteSubmitFieldTest}
      />
      <FeedbackDialog
        modalProps={fieldTestFeedbackModalProps}
        closeModalHandler={fieldTestFeedbackModalCloseHandler}
        submitModalHandler={handleFeedbackSubmitFieldTest}
        validationSchema={validationSchemaFeedback}
      /> */}
    </>
  );
}
export default MainDashboard;
