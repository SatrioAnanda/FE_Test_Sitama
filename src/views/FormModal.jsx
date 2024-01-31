import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import * as Colors from "../assets/theme/colors";

const FormModal = ({
  modalProps,
  closeModalHandler,
  submitModalHandler,
  validationSchema,
}) => {
  return (
    <>
      <Dialog open={modalProps?.isOpen}>
        {/* <FormProvider {...methods}>
          <form onSubmit={handleSubmit(submitModalHandler)}> */}
        <DialogTitle>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography
              fontWeight={"bold"}
              variant="h6"
              sx={{ color: "black" }}
            >
              Edit
            </Typography>
            <IconButton
              onClick={() => {
                closeModalHandler();
              }}
            >
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Divider />
        </DialogContent>
        <DialogActions>
          <Button
            size="small"
            variant="outlined"
            onClick={() => {
              closeModalHandler();
            }}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            size="small"
            variant="contained"
            sx={{
              marginInlineStart: 1,
              backgroundColor: Colors.BluePrimary,
            }}
          >
            Save
          </Button>
        </DialogActions>
        {/* </form>
        </FormProvider> */}
      </Dialog>
    </>
  );
};

export default FormModal;
