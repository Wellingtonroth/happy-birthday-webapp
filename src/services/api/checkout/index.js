import baseUrl from '../../baseUrl';
import api from '../../axios';

export default {
  example(payload) {
    console.log('entrei service');
    return api.post(baseUrl.example, payload);
  },
};
