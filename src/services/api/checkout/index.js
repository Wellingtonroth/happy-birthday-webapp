import baseUrl from '../../baseUrl';
import api from '../../axios';

export default {
  createOrder(payload) {
    return api.post(baseUrl.checkout, payload);
  },
};
