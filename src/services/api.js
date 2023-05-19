import axios from "axios";

axios.defaults.baseURL = "https://64671e2d2ea3cae8dc25ee76.mockapi.io/users";

export const getUsers = async () => {
  const { data } = await axios.get("users");
  return data;
};
