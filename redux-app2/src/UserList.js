import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './actions';

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <h1>User List Page</h1>;
};

export default UserList;
