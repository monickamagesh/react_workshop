
import axios from 'axios';

export const setUsers = (users) => ({
  type: 'SET_USERS',
  payload: users,
});

export const fetchUsers = () => {
  return (dispatch) => {
    axios.get('https://reqres.in/api/users?page=2')
      .then((response) => {
        dispatch(setUsers(response.data.data));
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };
};
