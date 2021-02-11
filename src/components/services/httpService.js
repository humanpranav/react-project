import axios from "axios";
import { toast } from "react-toastify";
import logService from "./logService";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.reponse &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    logService.log(error);
    toast.error("An unexpected error occured ");
  }

  return Promise.reject(error);
});
export default {
  get: axios.get,
  post: axios.post,
  put: axios.post,
  delete: axios.delete,
};
