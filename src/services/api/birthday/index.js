import baseUrl from '../../baseUrl';
import api from '../../axios';

export default {
  getOrderById(payload) {
    const uriGet = baseUrl.getOrderById
      .replace(':id', payload);

    return api.get(uriGet);
  },
};
