import axios from 'axios';

axios.defaults.baseURL = 'https://642987835a40b82da4d4dd2d.mockapi.io/contacts';

export default async function fetchUsers() {
  try {
    const response = await axios.get('/users');

    //   console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
