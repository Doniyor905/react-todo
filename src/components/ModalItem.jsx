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

const ModalItem = ({
  handleClose,
  open,
  setOpen,
  text,
  title,
  handleInputText,
  handleInputTitle,
  addTask,
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
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}>
        <Fade in={open}>
          <Box sx={style}>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ position: 'absolute', right: '10px', top: '10px' }}>
              <CloseIcon />
            </IconButton>

            <Typography color="secondary" variant="h6" component="h3">
              Add New ToDo
            </Typography>
            <FormControl sx={{ width: '100%', gap: '20px', mt: '20px' }}>
              <TextField
                value={title}
                onChange={(e) => handleInputTitle(e.target.value)}
                color="secondary"
                id="standard-basic"
                label="Title"
                variant="standard"
              />
              <TextField
                value={text}
                onChange={(e) => handleInputText(e.target.value)}
                color="secondary"
                id="standard-basic"
                label="Description"
                variant="standard"
              />
              <Button onClick={addTask} variant="outlined" color="secondary">
                Add Todo
              </Button>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalItem;
