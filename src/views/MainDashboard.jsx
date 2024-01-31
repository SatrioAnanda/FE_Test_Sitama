import NotFoundIllustration from "../assets/img/404-illustration.svg";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Service from "../services/Service";
import * as Colors from "../assets/theme/colors";

function MainDashboard() {
  const [dynamicRender, setDynamicRender] = useState();
  const [formState, setFormState] = useState();

  const retrieveDynamicRender = async () => {
    const response = await Service.getDynamicJson(2);
    setDynamicRender(response.data);
    setFormState(response.data);
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
              justifyContent: "space-between",
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
                Field Test
              </Typography>
            </Box>
            <Button
              variant="contained"
              size={"small"}
              style={{
                backgroundColor: Colors.BluePrimary,
                color: Colors.White,
                borderRadius: "15px",
                width: "25%",
              }}
              onClick={() =>
                fieldTestNoteModalOpenHandler(fieldTestData?.notes)
              }
            >
              Add Remarks / Notes
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ marginY: "25px" }}>
          <Grid container>
            <Grid item xs={1}>
              <Typography
                align={"center"}
                fontWeight={"bold"}
                sx={{ color: Colors.BluePrimary, fontSize: 18 }}
              >
                #
              </Typography>
            </Grid>
            {fieldTestColumns.map((fieldTestColumns, i) => (
              <Grid item xs={1.7} key={i}>
                <Typography
                  align={fieldTestColumns.align}
                  fontWeight={"bold"}
                  sx={{ color: fieldTestColumns.color, fontSize: 18 }}
                >
                  {fieldTestColumns.label}
                </Typography>
              </Grid>
            ))}
            <Grid item xs={0.1}></Grid>
            <Grid item xs={12}>
              <BackdropComponent loading={loading}>
                {fieldTestData?.fields?.map((data, index) => (
                  <WidgetCard
                    key={index}
                    index={index + 1}
                    collapseId={collapseId}
                    toggleCollapse={toggleCollapse}
                    fieldTestData={data}
                    fieldTestFormModalOpenHandler={
                      fieldTestFormModalOpenHandler
                    }
                    fieldTestFeedbackModalOpenHandler={
                      fieldTestFeedbackModalOpenHandler
                    }
                    setShowPreview={setShowPreview}
                  />
                ))}
              </BackdropComponent>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item xs={12} textAlign={'right'}>
      <Button
        variant="contained"
        size={'small'}
        startIcon={<SaveIcon />}
        style={{ backgroundColor: Colors.BluePrimary, color: Colors.White, borderRadius: '5px' }}>
        Save Progress
      </Button>
    </Grid> */}
      </Grid>
      <FieldTestDialog
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
      />
    </>
    // <Box>
    //   <Grid
    //     container
    //     direction={"column"}
    //     alignItems={"center"}
    //     justifyContent={"center"}
    //     sx={{ height: "100%" }}
    //   >
    //     <Grid item ></Grid>
    //     <Typography variant="h4" fontSize={25} fontWeight={"bold"} mb={1}>
    //       Page Not Found
    //     </Typography>
    //     <Button
    //       variant="contained"
    //       sx={{ mt: 2 }}
    //       component={RouterLink}
    //       to={location.pathname.split("/")[0]}
    //     >
    //       Go Back
    //     </Button>
    //   </Grid>
    // </Box>
  );
}
export default MainDashboard;
