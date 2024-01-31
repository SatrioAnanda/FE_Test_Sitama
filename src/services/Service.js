import axios from "axios";
import baseUrl from "../utils/base-url";

const segmentPath = "api/dynamic-render";
const url = `${baseUrl()}/${segmentPath}`;

export default {
  getDynamicJson: function (id) {
    return axios.get(`${url}/${id}`);
  },
};
