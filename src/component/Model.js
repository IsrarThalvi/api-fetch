import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { updateUser, deleteUser, addUser } from './redux/actions';
// import { fetchUsers } from '../../redux/actions'; // Adjust the path according to your project structure

import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';

const CustomerModal = ({ open, handleClose, handleSubmit, userData }) => {
  console.log("user data : ", userData)
  console.log("oprnrf  : ", open)
  const [formData, setFormData] = useState({
    avatar: '',
    id: '',
    first_name: '',
    last_name: '',
    email: ''
  });

  
  useEffect(() => {
    if (userData) {
      setFormData({
        avatar: userData.avatar,
        id: userData.id || '',
        first_name: userData.first_name || '',
        last_name: userData.last_name || '',
        email: userData.email || ''
      });
    } else {
      // Reset form data when userData becomes null or undefined
      setFormData({
        avatar: '',
        id: '',
        first_name: '',
        last_name: '',
        email: ''
      });
    }
  }, [userData]);

  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    handleSubmit(formData);
    setFormData({
      avatar: '',
      id: '',
      first_name: '',
      last_name: '',
      email: ''
    });
  };

  return (
    <Dialog open={open } onClose={handleClose}>
      <DialogTitle>Add New Customer</DialogTitle>
      <DialogContent>
        <TextField
          label="Avatar"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="ID"
          name="id"
          value={formData.id}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="First Name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">Cancel</Button>
        <Button onClick={handleFormSubmit} color="primary">Submit</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomerModal;
