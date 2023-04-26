import axios from 'axios';

axios.defaults.baseURL = 'https://642987835a40b82da4d4dd2d.mockapi.io/contacts';

export async function fetchUsers() {
  try {
    const response = await axios.get('/users');

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export function updateFollowers(id, user) {
  try {
    const response = axios.put(`/users/${id}`, user);

    return response.then(response => {
      return response.data;
    });
  } catch (error) {
    console.log(error);
  }
}

const fetchFunctions = { fetchUsers, updateFollowers };
export default fetchFunctions;
