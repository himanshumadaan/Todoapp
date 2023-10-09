import axios from "axios";
let backendapi = 'your url';
export const login = async (body) => {
  return await axios.post(`${backendapi}`, body);
};
