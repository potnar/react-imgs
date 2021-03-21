import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 2fc3301a48e265634bb3759fbe4493c09c1c9fb2f861ae9e3252b8a43603295e"
  }
});
