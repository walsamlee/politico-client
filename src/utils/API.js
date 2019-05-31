const apiUrl = 'https://sam-politico.herokuapp.com/api/v1/parties';
const authUrl = 'https://sam-politico.herokuapp.com/api/v1/auth/login';
const signupUrl = 'https://sam-politico.herokuapp.com/api/v1/auth/signup';
const addOfficeUrl = 'https://sam-politico.herokuapp.com/api/v1/offices';
const addPartyUrl = 'https://sam-politico.herokuapp.com/api/v1/parties';
const candidateUrl = 'https://sam-politico.herokuapp.com/api/v1/candidates';
const voteUrl = 'https://sam-politico.herokuapp.com/api/v1/votes';

const castVote = (voteData, token) => (
  fetch(voteUrl, {
    method: 'POST',
    body: JSON.stringify(voteData),
    headers: {
      'Content-Type': 'application/json',
      token,
    },
  })
);

const getCandidates = token => (
  fetch(candidateUrl, {
    method: 'GET',
    headers: {
      token,
    },
  })
    .then(res => res.json())
);

const addParty = (partyData, token) => (
  fetch(addPartyUrl, {
    method: 'POST',
    body: JSON.stringify(partyData),
    headers: {
      'Content-Type': 'application/json',
      token,
    },
  })
);

const addOffice = (officeData, token) => (
  fetch(addOfficeUrl, {
    method: 'POST',
    body: JSON.stringify(officeData),
    headers: {
      'Content-Type': 'application/json',
      token,
    },
  })
    .then(res => res.json())
);

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
  addOffice,
  addParty,
  getCandidates,
  castVote,
};

export default API;
