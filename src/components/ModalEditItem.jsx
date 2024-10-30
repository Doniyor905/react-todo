import {
  Backdrop,
  Box,
  Button,
  Fade,
  FormControl,
  IconButton,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const ModalEditItem = ({
  setOpenEdit,
  openEdit,
  newTitle,
  setNewTitle,
  newText,
  setNewText,
  handleUpdate,
}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={openEdit}>
          <Box sx={style}>
            <IconButton
              onClick={() => setOpenEdit(false)}
              sx={{ position: 'absolute', right: '10px', top: '10px' }}>
              <CloseIcon />
            </IconButton>

            <Typography color="secondary" variant="h6" component="h3">
              Update Todo
            </Typography>
            <FormControl sx={{ width: '100%', gap: '20px', mt: '20px' }}>
              <TextField
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                color="secondary"
                id="standard-basic"
                label="Title"
                variant="standard"
              />
              <TextField
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                color="secondary"
                id="standard-basic"
                label="Description"
                variant="standard"
              />
              <Button onClick={handleUpdate} variant="outlined" color="secondary">
                Add Todo
              </Button>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalEditItem;
