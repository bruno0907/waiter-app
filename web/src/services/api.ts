import axios from "axios";

const baseURL = import.meta.env.DEV ? 'http://localhost:3333' : import.meta.env.API_URL;

export const api = axios.create({ baseURL })
