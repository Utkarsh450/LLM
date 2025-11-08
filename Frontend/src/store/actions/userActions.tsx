// thunk (fixed)
import axios from "../../utils/axiosConfig";
import { loaduser, removeuser } from "../reducers/userReducer";
import type { AppDispatch } from "../store";
interface registerUser {
  fullName: {
    firstName: string,
    lastName: string,
  },
  email: string,
  password: string,
}
export const asyncLoadUserFromLocalStorage = () => (dispatch: AppDispatch) => {
  try {
    const userData = localStorage.getItem("userData");
    if (!userData) return;

    const parsedUser = JSON.parse(userData);

    dispatch(
      loaduser({
        user: {
          id: parsedUser.id,
          username: parsedUser.username,
          email: parsedUser.email,
        },
      })
    );
  } catch (error) {
    console.log("Error restoring user:", error);
  }
};

export const asyncloginuser = (email: string, password: string) =>
    async (dispatch: AppDispatch) => {
      try {
        const { data } = await axios.post("auth/login", { email, password });
        const user = data.user;
        localStorage.setItem("userData", JSON.stringify( {id: user._id, username: user.fullName.firstName,email: user.email}))

        if (data.message === "User logged in successfully") {
          dispatch(
            loaduser({
              user: {
                id: user._id,
                username: user.fullName.firstName,
                email: user.email,
              },
            })
          );
        }
      } catch (err) {
        console.log(err);
      }
    };


export const asyncregisteruser = (obj: registerUser) => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.post("auth/register", obj)
    const user = response.data.user;
            localStorage.setItem("userData", JSON.stringify( {id: user._id, username: user.fullName.firstName,email: user.email}))
    dispatch(loaduser({
      user: {
        id: user._id,
        username: user.fullName.firstName,
        email: user.email,
      }
    }))
  } catch (err) {
    console.log(err);

  }
}


export const asynclogoutuser = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get("auth/logout")
    if (response.data.message === "User logged out successfully")
      localStorage.removeItem("userData")
      dispatch(removeuser())

  } catch (err) {
    console.log(err);

  }
}
