import axios from 'axios';

const apiBase = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos',
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
});

export const fetchTodos = async () => {
  try {
    const res = await apiBase({
      method: 'get',
      url: '/',
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
