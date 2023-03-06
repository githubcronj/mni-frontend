import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import Typography from "@mui/material/Typography";
import "./notecard.css";
import { Button } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "70%",
  left: "30%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #7070702E",
  boxShadow: 24,
  p: 4,
};

const NoteCard = () => {
  return (
    <Box sx={style}>
      <Typography variant="h6" component="div" className="note-card-container">
        <ClearIcon fontSize="large" className="green" /> <b>Note</b>
      </Typography>
      <Typography variant="body1" className="book" sx={{ mt: 2 }}>
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type
        specimen book.
      </Typography>
      <Box className="modal-btn-align">
        <Button className="modal-reject-btn btn green" size="small">
          Reject
        </Button>
        <Button className="modal-accept-btn btn bg-green white" size="small">
          Accept
        </Button>
      </Box>
    </Box>
  );
};

export default NoteCard;
