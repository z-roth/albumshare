import axios from "axios";
import {
  getUserByUsernameRoute,
  loginRoute,
  signupRoute,
  updateUserRoute,
} from "./routes";

const api = axios.create({
  withCredentials: true,
});

const signup = (user) =>
  api.post(signupRoute, user).then((response) => response.data);

const login = (user) =>
  api.post(loginRoute, user).then((response) => response.data);

const getUserByUsername = (username) =>
  api.get(getUserByUsernameRoute(username)).then((response) => response.data);

const updateUser = (username, user) =>
  api.put(updateUserRoute(username), user).then((response) => response.data);

export { signup, login, getUserByUsername, updateUser };
