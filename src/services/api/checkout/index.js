import baseUrl from "../../baseUrl";
import api from "../../axios";

export default {
  createOrder(payload) {
    return api.post(baseUrl.checkout, payload);
  },

  uploadImages(payload) {
    return api.post(baseUrl.uploadImages, payload, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  getTemplateImages() {
    return api.get(baseUrl.getTemplateImages);
  },
};
