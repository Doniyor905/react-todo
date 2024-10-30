import React from 'react';
import { Button, ButtonGroup, List } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AddIcon from '@mui/icons-material/Add';
import TodoItems from './TodoItems';
import ModalItem from './ModalItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('all');

  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addTask = () => {
    dispatch(addTodo({ title, text }));
    handleClose();
    setTitle('');
    setText('');
  };

  const todos = useSelector((state) => state.todos.todo);

  const filteredTodo = filter === 'all' ? todos : todos.filter((todo) => todo.completed);
  console.log(filteredTodo);
  return (
    <div>
      <ButtonGroup sx={{ mt: '50px' }}>
        <Button
          onClick={() => setFilter('all')}
          variant={filter === 'all' ? 'contained' : 'outlined'}
          color="secondary"
          sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FormatListBulletedIcon />
          All
        </Button>

        <Button
          onClick={() => setFilter('completed')}
          variant={filter === 'completed' ? 'contained' : 'outlined'}
          color="secondary"
          sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ChecklistIcon />
          Completed
        </Button>
      </ButtonGroup>
      {filteredTodo.length === 0 ? (
        <h2>{filter === 'all' ? 'No tasks. Create a Todo!' : 'No completed tasks'}</h2>
      ) : (
        <List
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
            width: '100%',
            maxWidth: 700,
            bgcolor: 'background.paper',
            m: '0 auto',
            mt: '30px',
            gap: '20px',
          }}>
          {filteredTodo.map((todo) => (
            <TodoItems
              title={todo.title}
              text={todo.text}
              id={todo.id}
              key={todo.id}
              completed={todo.completed}
            />
          ))}
        </List>
      )}
      <Button
        onClick={handleOpen}
        sx={{
          width: '65px',
          height: '65px',
          ml: '0 auto',
          borderRadius: '50%',
        }}
        variant="contained"
        color="secondary">
        <AddIcon />
      </Button>
      <ModalItem
        title={title}
        text={text}
        setText={setText}
        open={open}
        setOpen={setOpen}
        addTask={addTask}
        handleInputText={setText}
        handleInputTitle={setTitle}
      />
    </div>
  );
};

export default TodoList;
