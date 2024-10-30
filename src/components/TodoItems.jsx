import {
  Alert,
  Box,
  ButtonGroup,
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleCompleted, updateTodo } from '../redux/todoSlice';
import React from 'react';
import ModalEditItem from './ModalEditItem';
import CheckIcon from '@mui/icons-material/Check';

const style = {
  height: '100%',
  borderRadius: '5px',
  p: '15px',
};

const styleCheked = {
  height: '100%',
  borderRadius: '5px',
  p: '15px',
  bgcolor: '#F5F5F7',
  color: '#B7B7B7',
  position: 'relative',
  '&:hover': {
    color: '#B7B7B7',
    backgroundColor: '#F5F5F7',
  },
};

const TodoItems = ({ completed, title, text, id }) => {
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState(title);
  const [newText, setNewText] = React.useState(text);
  const [isUpdate, setIsUpdate] = React.useState(false);

  const handleUpdate = () => {
    dispatch(updateTodo({ id, title: newTitle, text: newText }));
    setIsUpdate(true);
    setTimeout(() => {
      setIsUpdate(false);
    }, 2000);
    setOpenEdit(false);
  };

  return (
    <>
      <ListItem sx={{ boxShadow: 1, pr: '10px', borderRadius: '5px' }} disablePadding>
        <ListItemButton sx={completed ? styleCheked : style} role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              onChange={() => dispatch(toggleCompleted({ id }))}
              checked={completed}
              edge="start"
              tabIndex={-1}
              disableRipple
              color="default"
            />
          </ListItemIcon>

          <Box>
            <Typography variant="h6">{title}</Typography> {/* Исправлено */}
            <Typography variant="body2">{text}</Typography> {/* Исправлено */}
          </Box>
        </ListItemButton>

        <ButtonGroup sx={{ gap: '15px' }}>
          <IconButton onClick={() => setOpenEdit(true)} edge="end" aria-label="edit">
            <EditIcon />
          </IconButton>

          <IconButton onClick={() => dispatch(removeTodo({ id }))} edge="end" aria-label="delete">
            <DeleteIcon color="error" />
          </IconButton>
        </ButtonGroup>
      </ListItem>
      <ModalEditItem
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newText={newText}
        setNewText={setNewText}
        setOpenEdit={setOpenEdit}
        openEdit={openEdit}
        handleUpdate={handleUpdate}
      />
      {isUpdate && (
        <Alert
          sx={{ m: '0 auto', mb: '20px' }}
          icon={<CheckIcon fontSize="inherit" />}
          severity="success">
          Your task has been changed!
        </Alert>
      )}
    </>
  );
};

export default TodoItems;
