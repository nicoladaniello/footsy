import AppUser from "../common/appUser";

const users = [
  {
    _id: "5bfb01a27a52c35626e94843",
    isActive: true,
    balance: 89,
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ccc1801fd91dc9cf869fa6a09360c09&auto=format&fit=crop&w=200&q=80",
    age: 28,
    name: {
      first: "Jhon",
      last: "Doe"
    },
    email: "jhon.doe@undefined.tv",
    about:
      "Cupidatat ea aute eiusmod quis enim fugiat esse occaecat. Ad dolor labore do sint. Aute eiusmod ea nulla adipisicing consequat sint dolore elit officia. Sint quis mollit sit cillum incididunt enim exercitation consectetur mollit excepteur sint.",
    registered: "Wednesday, September 27, 2017 1:33 PM",
    latitude: "8.619338",
    longitude: "-6.953825"
  },
  {
    _id: "5bfb01a27cbc80214ac1441c",
    isActive: true,
    balance: 761,
    image: "http://placehold.it/32x32",
    age: 23,
    name: {
      first: "Craig",
      last: "Roberson"
    },
    email: "craig.roberson@undefined.biz",
    about:
      "Nostrud non velit do Lorem deserunt eiusmod consectetur aute qui velit enim enim non ea. Sint in ad sit cupidatat minim anim fugiat laboris eiusmod. Culpa enim irure dolor cupidatat. Nostrud officia irure eiusmod exercitation eu consectetur duis voluptate sit consectetur elit quis minim.",
    registered: "Sunday, September 23, 2018 8:01 AM",
    latitude: "42.301215",
    longitude: "-151.387841"
  },
  {
    _id: "5bfb01a2beb5b86bd3164860",
    isActive: true,
    balance: 303,
    image: "http://placehold.it/32x32",
    age: 36,
    name: {
      first: "Olson",
      last: "Soto"
    },
    email: "olson.soto@undefined.name",
    about:
      "Ipsum aliqua eiusmod enim enim nulla fugiat deserunt minim voluptate. Fugiat ut officia reprehenderit nulla. Ipsum aute nostrud adipisicing enim officia labore aliqua duis minim et occaecat pariatur amet et. Sit labore minim aute aute aute dolor sunt nulla excepteur pariatur amet sint veniam officia. Proident exercitation ad veniam non est reprehenderit aliqua minim qui. Eu voluptate quis proident est ullamco proident voluptate occaecat. Culpa non laborum dolore esse magna commodo culpa culpa ullamco adipisicing cillum laboris.",
    registered: "Sunday, February 19, 2017 5:00 AM",
    latitude: "12.915876",
    longitude: "86.949495"
  },
  {
    _id: "5bfb01a24fd279807ed611b8",
    isActive: true,
    balance: 620,
    image: "http://placehold.it/32x32",
    age: 27,
    name: {
      first: "Beck",
      last: "Avila"
    },
    email: "beck.avila@undefined.org",
    about:
      "Non exercitation minim ullamco sit laborum officia officia culpa esse officia labore id. Duis in velit aliqua labore est commodo qui elit. Anim commodo id excepteur occaecat est commodo veniam aute irure consectetur anim elit.",
    registered: "Tuesday, December 9, 2014 3:14 PM",
    latitude: "-79.831527",
    longitude: "91.80828"
  },
  {
    _id: "5bfb01a2bd2cd8befb7ab69c",
    isActive: true,
    balance: 184,
    image: "http://placehold.it/32x32",
    age: 35,
    name: {
      first: "Hodges",
      last: "Brock"
    },
    email: "hodges.brock@undefined.us",
    about:
      "Reprehenderit amet nisi anim proident laboris fugiat. Minim id ad commodo reprehenderit pariatur mollit. Duis nisi consequat mollit cillum Lorem do magna ullamco mollit voluptate. Deserunt laborum irure adipisicing sint Lorem aliquip voluptate tempor aute eu.",
    registered: "Monday, May 26, 2014 8:07 PM",
    latitude: "-44.514",
    longitude: "-144.998951"
  },
  {
    _id: "5bfb01a2d11cbf7bb589f845",
    isActive: false,
    balance: 69,
    image: "http://placehold.it/32x32",
    age: 33,
    name: {
      first: "Morton",
      last: "Quinn"
    },
    email: "morton.quinn@undefined.io",
    about:
      "Consequat consectetur nisi id in reprehenderit reprehenderit velit. Consectetur minim ipsum sint exercitation excepteur minim excepteur velit Lorem fugiat. Aute nulla incididunt veniam tempor velit incididunt eu eiusmod non proident dolor qui. Lorem ex magna officia id laborum est do dolore incididunt veniam ipsum irure. Qui incididunt nisi velit magna tempor velit aliqua qui nostrud. Mollit anim non qui pariatur velit. Id id aliqua consequat mollit fugiat aute qui.",
    registered: "Tuesday, February 6, 2018 3:33 PM",
    latitude: "-21.631086",
    longitude: "44.663422"
  },
  {
    _id: "5bfb01a24552cb0a37a9f47a",
    isActive: false,
    balance: 628,
    image: "http://placehold.it/32x32",
    age: 38,
    name: {
      first: "Watson",
      last: "Padilla"
    },
    email: "watson.padilla@undefined.net",
    about:
      "Elit duis occaecat et laboris sint esse consequat culpa minim qui ad dolore proident dolore. Eu officia sint velit incididunt et non sit qui dolor minim ut. Duis deserunt duis enim do sunt labore. Nostrud dolor ullamco et enim eiusmod enim officia aute voluptate.",
    registered: "Sunday, October 16, 2016 6:45 AM",
    latitude: "-88.190597",
    longitude: "-95.768029"
  }
];

export async function getUsers() {
  const data = users.map(m => new AppUser(m));
  return new Promise(resolve => setTimeout(() => resolve(data), 1000));
}

export async function getUser(id) {
  const data = await getUsers();
  return data.find(m => m._id === id);
}

export function getUserServerSide(id) {
  return users.find(m => m._id === id);
}
