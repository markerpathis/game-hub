import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6990f24baf064bf780a3c5bd00656833",
  },
});
