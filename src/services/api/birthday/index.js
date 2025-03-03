import baseUrl from '../../baseUrl';
import api from '../../axios';

export default {
  getOrderById(payload) {
    console.log('payload', payload);
    const uriGet = baseUrl.getOrderById
      .replace(':id', payload);

    return api.get(uriGet);
  },
};
