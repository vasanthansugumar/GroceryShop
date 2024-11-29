import axios from 'axios';

// Set the base URL for the API
const API_URL = 'http://localhost:3001/users';

// Function to fetch all users
export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Function to register a new user
export const registerUser = async (username, password) => {
  const response = await axios.post(API_URL, { username, password });
  return response.data;
};

// Function to log in a user
export const loginUser = async (username, password) => {
  const response = await axios.get(`${API_URL}?username=${username}&password=${password}`);
  return response.data;
};

// Function to update user data
export const updateUser = async (id, updatedData) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
};

// Function to delete a user
export const deleteUser = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
