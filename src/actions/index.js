import axios from "axios";

export const SET_LOGGED_IN = "SET_LOGGED_IN";
export const SET_LOGGED_OUT = "SET_LOGGED_OUT";

export const GET_PLANTS_START = "GET_PLANTS_START";
export const GET_PLANTS_SUCCESS = "GET_PLANTS_SUCCESS";
export const GET_PLANTS_FAIL = "GET_PLANTS_FAIL";

export const DELETE_PLANT_START = "DELETE_PLANT_START";
export const DELETE_PLANT_SUCCESS = "DELETE_PLANT_SUCCESS";
export const DELETE_PLANT_FAIL = "DELETE_PLANT_FAIL";

export const ADD_PLANT_START = "ADD_PLANT_START";
export const ADD_PLANT_SUCCESS = "ADD_PLANT_SUCCESS";
export const ADD_PLANT_FAIL = "ADD_PLANT_START";

export const SET_EDITING = "SET_EDITING";
export const UNSET_EDITING = "UNSET_EDITING";

export const SUBMIT_EDIT_START = "SUBMIT_EDIT_START";
export const SUBMIT_EDIT_SUCCESS = "SUBMIT_EDIT_SUCCESS";
export const SUBMIT_EDIT_FAIL = "SUBMIT_EDIT_FAIL";

export const setLoggedIn = () => {
  return { type: SET_LOGGED_IN };
};

export const setLoggedOut = () => {
  return { type: SET_LOGGED_OUT };
};

export const getPlants = () => (dispatch) => {
  dispatch({ type: GET_PLANTS_START });

  //change to axiosWithAuth after login functional with protected route
  //needs initial data for payload from get request, using dummyData to intialize in reducer
  axios
    .get("https://reqres.in/api/unknown")
    .then((res) => {
      console.log("Get Plants res: ", res);
      dispatch({ type: GET_PLANTS_SUCCESS });
    })
    .catch((err) => {
      console.log("Get Plants err: ", err);
      dispatch({ type: GET_PLANTS_FAIL, payload: err });
    });
};

export const deletePlant = (id) => (dispatch) => {
  dispatch({ type: DELETE_PLANT_START });

  axios
    .delete("https://reqres.in/api/users/2")
    .then((res) => {
      dispatch({ type: DELETE_PLANT_SUCCESS, payload: id });
    })
    .catch((err) => {
      dispatch({ type: DELETE_PLANT_FAIL });
    });
};

export const addPlant = (newPlant) => (dispatch) => {
  dispatch({ type: ADD_PLANT_START });

  axios
    .post("https://reqres.in/api/users", newPlant)
    .then((res) => {
      console.log("Add plant res: ", res);
      dispatch({ type: ADD_PLANT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Add plant fail : ", err);
      dispatch({ type: ADD_PLANT_FAIL, payload: err });
    });
};

export const setEditing = () => {
  return { type: SET_EDITING };
};

export const unsetEditing = () => {
  return { type: UNSET_EDITING };
};

export const submitEdit = (updatedPlant) => (dispatch) => {
  dispatch({ type: SUBMIT_EDIT_START });

  axios
    .put("https://reqres.in/api/users/2", updatedPlant)
    .then((res) => {
      console.log("PUT res: ", res.data);
      dispatch({ type: SUBMIT_EDIT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("PUT err: ", err);
      dispatch({ type: SUBMIT_EDIT_FAIL, payload: err });
    });
};
