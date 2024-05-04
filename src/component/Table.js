
// function UserTable() {
//   const [users, setUsers] = useState([]);
//   const [modalOpen,setModelOpen] = useState(false);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch("https://reqres.in/api/users?page=1");
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');  
//         }
//         const data = await response.json();
//         setUsers(data.data); // Assuming the user data is stored in the 'data' property
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);


// }

// export default UserTable;

  
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, Stack, Grid, Typography, Button } from '@mui/material';
import CustomerModal from './Model';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, setUsers, updateUser } from './Reducer';
// import { fetchUsers } from './redux/actions';

function UserTable() {
  const users = useSelector(state => state.user.users);
  console.log("redux data :  ", users)
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        dispatch(setUsers(data.data))
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleOpenModal = (userData) => {
    setModalData(userData);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalData(null);
  };
  

  const handleSubmit = (formData) => {
    // Handle form submission logic here
    console.log(formData);
    dispatch(addUser(formData))
    localStorage.setItem('formData', JSON.stringify(formData));
    // add your logic to save updated data to redux store or local storage
    setModalOpen(false);
    setModalData(null);
  };


  const handleUpdateUser = (userId, updatedData) => {
    // Logic to update user data based on userId and updatedData
    console.log(`Update user with ID ${userId}:`, updatedData);
    // Here you can send a request to update the user data to your backend
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
    // Logic to delete user data based on userId
    console.log(`Delete user with ID ${userId}`);
    // Here you can send a request to delete the user data from your backend
  };

  return (
    <Stack style={{ textAlign: 'center' }}>
      <Grid>
        <Typography variant='h2'>MUI Table</Typography>
      </Grid>
      <Grid>
        <TableContainer component={Paper}>
          <Grid>
            <h1>My App</h1>
            <Table aria-label="user table">
              <TableHead>
              <Button onClick={handleOpenModal}>Add New Customer</Button>
                <TableRow>
                  <TableCell>Avatar</TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Function</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users?.map(user => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <img src={user.avatar} alt="avatar" style={{ width: 50, borderRadius: '50%' }} />
                    </TableCell>
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.first_name}</TableCell>
                    <TableCell>{user.last_name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleOpenModal(user)}>Update</Button>
                      <Button onClick={() => handleDeleteUser(user.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </TableContainer>
      </Grid>
      <CustomerModal
        open={modalOpen}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
        userData={modalData}
      />
    </Stack>
  );
}

export default UserTable;



