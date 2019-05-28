const apiUrl = 'https://sam-politico.herokuapp.com/api/v1/parties';
const authUrl = 'https://sam-politico.herokuapp.com/api/v1/auth/login';
const signupUrl = 'https://sam-politico.herokuapp.com/api/v1/auth/signup';

const getAllParties = () => (
  fetch(apiUrl)
    .then(res => res.json())
);

const authLogin = userData => (
  fetch(authUrl, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
);

const authSignup = userData => (
  fetch(signupUrl, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
);

const API = {
  getAllParties,
  authLogin,
  authSignup,
};

export default API;
