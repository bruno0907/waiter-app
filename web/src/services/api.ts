import axios from "axios";

const baseURL = import.meta.env.DEV ? 'http://localhost:3333' : '';

export const api = axios.create({ baseURL })
