const voteData = {
  office: 1,
  candidate: 1,
  voter: 1,
};

const data = {
  candidate: {
    candidates: [
      {
        officeid: 4,
        firstname: 'Admin',
        lastname: 'Admin',
        othername: 'Sam',
        passporturl: 'https://res.cloudinary.com/walsam/image/upload/v1559164438/IMG_5704.jpg',
        userid: 1,
        partyid: 9,
        name: 'Legislative',
        logourl: 'https://res.cloudinary.com/walsam/image/upload/v1550613166/difd2f30syyz5fynogsz.png',
      },
      {
        officeid: 6,
        firstname: 'Hassan',
        lastname: 'Hadji',
        othername: 'Chikaso',
        passporturl: '',
        userid: 2,
        partyid: 8,
        name: 'Chairman',
        logourl: 'https://res.cloudinary.com/walsam/image/upload/v1550612284/zausu6uc1iet2lo4fsqr.png',
      },
    ],
  },
  getOffices: {
    offices: [],
  },
  parties: {
    parties: [],
  },
};

const details = {
  office: 1,
  candidate: 2,
};

const token = '';

const login = {
  login: {
    token: '',
    user: [
      {
        user: {
          isAdmin: '',
          id: 1,
          passportUrl: '',
          email: '',
          name: '',
          phoneNumber: 14141414441,
        },
      },
    ],
  },
};

const partiesData = {
  parties: {
    fetching: '',
    fetched: '',
    parties: [
      {
        logoUrl: 'https://res.cloudinary.com/walsam/image/upload/v1550613166/difd2f30syyz5fynogsz.png',
        name: 'wrrryery',
        id: 1,
        fetching: true,
      },
      {
        logoUrl: 'https://res.cloudinary.com/walsam/image/upload/v1550613166/difd2f30syyz5fynogsz.png',
        name: 'uiyt',
        id: 2,
        fetching: true,
      },
    ],
  },
};

const partyData = {
  id: '',
  image: '',
  partyname: '',
  parthqaddress: '',
};

const profileData = {
  picture: '',
  name: '',
  email: '',
  phone: '',
};

const registerData = {
  preview: '',
  firstname: '',
  lastname: '',
  othername: '',
  telephone: '',
  email: '',
  password: '',
};

const candidate = {
  passporturl: '',
  firstname: '',
  lastname: '',
  name: '',
  logourl: '',
};

const party = {
  id: '',
  name: '',
};

const aspirantData = {
  id: '',
  office: '',
  party: '',
};

const setPartyState = [
  {
    id: 1,
    logoUrl: '',
    name: '',
    hqAddress: '',
  },
];

const mock = {
  voteData,
  data,
  details,
  token,
  login,
  partiesData,
  partyData,
  profileData,
  registerData,
  candidate,
  party,
  aspirantData,
  setPartyState,
};

export default mock;
