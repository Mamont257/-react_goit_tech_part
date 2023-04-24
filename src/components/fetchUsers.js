import axios from 'axios';

axios.defaults.baseURL = 'https://642987835a40b82da4d4dd2d.mockapi.io/contacts';

export async function fetchUsers() {
  try {
    const response = await axios.get('/users');

    //   console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export function updateFollowers(id, user) {
  try {
    // console.log(id, user);
    const response = axios.put(`/users/${id}`, user);

    return response.then(data => {
      return data.data;
    });

    // console.log(response);
  } catch (error) {}
}

const fetchFunctions = { fetchUsers, updateFollowers };
export default fetchFunctions;
