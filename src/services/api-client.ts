import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "089bbcee7e3a41789e4fbc5691f7cd75",
  },
});
