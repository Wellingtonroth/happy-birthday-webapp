import baseUrl from "../../baseUrl";
import api from "../../axios";

export default {
  createOrder(payload) {
    return api.post(baseUrl.checkout, payload);
  },

  uploadImage(payload) {
    return api.post(baseUrl.uploadImage, payload, {
      headers: { 
        "Content-Type": "multipart/form-data"
      },
    });
  },
};
