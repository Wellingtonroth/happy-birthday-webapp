const serverUrl = 'http://localhost:5000'; // This should match your backend server's URL
// example const server = 'https://myapp.herokuapp.com';

const base = {
  checkout: `${serverUrl}/api/checkout`,
  getOrderById: `${serverUrl}/api/order/:id`,
  uploadImages: `${serverUrl}/api/upload-images`,
};

export default base;
