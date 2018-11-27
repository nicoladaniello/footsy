import AppUser from "../common/appUser";

const users = [
  {
    _id: "5bfb01a27a52c35626e94843",
    isActive: true,
    balance: 1137,
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ccc1801fd91dc9cf869fa6a09360c09&auto=format&fit=crop&w=1600&q=80",
    age: 20,
    name: {
      first: "Jhon",
      last: "Doe"
    },
    email: "antonia.mcneil@undefined.me",
    about:
      "Cillum esse mollit velit amet qui incididunt in culpa dolore duis quis quis ad Lorem. Cillum excepteur esse proident dolore eiusmod dolor aliqua tempor excepteur ullamco. Labore ipsum nisi exercitation consequat proident laboris ad. Veniam sint ad labore tempor fugiat cupidatat aliqua non. Exercitation dolore esse officia excepteur do nostrud nisi ad Lorem ullamco velit consequat incididunt.",
    registered: "<TypeError: this.moment(...).getTime is not a function>",
    friends: [
      {
        _id: 0,
        name: {
          first: "Selma",
          last: "Kane"
        },
        image: "http://placehold.it/32x32"
      },
      {
        _id: 1,
        name: {
          first: "Genevieve",
          last: "Mcintyre"
        },
        image: "http://placehold.it/32x32"
      },
      {
        _id: 2,
        name: {
          first: "Allyson",
          last: "Marsh"
        },
        image: "http://placehold.it/32x32"
      }
    ]
  },
  {
    _id: "5bfbdbdbb5df47048b65412f",
    isActive: false,
    balance: 1864,
    image: "http://placehold.it/32x32",
    age: 31,
    name: {
      first: "Lora",
      last: "Bruce"
    },
    email: "lora.bruce@undefined.name",
    about:
      "Culpa in tempor nisi nostrud Lorem magna commodo eiusmod amet. Voluptate officia consequat do nisi aliquip quis. Proident sit velit anim in eu duis ex dolore aute eu laborum ipsum nisi. Aliquip culpa quis velit irure irure esse.",
    registered: "<TypeError: this.moment(...).getTime is not a function>",
    friends: [
      {
        _id: 0,
        name: {
          first: "Nancy",
          last: "Franco"
        },
        image: "http://placehold.it/32x32"
      },
      {
        _id: 1,
        name: {
          first: "Jeri",
          last: "Sawyer"
        },
        image: "http://placehold.it/32x32"
      },
      {
        _id: 2,
        name: {
          first: "Christie",
          last: "Pollard"
        },
        image: "http://placehold.it/32x32"
      }
    ]
  },
  {
    _id: "5bfbdbdbe87918afc5879d78",
    isActive: false,
    balance: 1807,
    image: "http://placehold.it/32x32",
    age: 31,
    name: {
      first: "Adeline",
      last: "Crane"
    },
    email: "adeline.crane@undefined.ca",
    about:
      "Enim in ipsum elit dolore officia. Sit non mollit irure do enim. Deserunt nostrud duis non nisi pariatur labore anim reprehenderit duis est.",
    registered: "<TypeError: this.moment(...).getTime is not a function>",
    friends: [
      {
        _id: 0,
        name: {
          first: "Gayle",
          last: "Hendricks"
        },
        image: "http://placehold.it/32x32"
      },
      {
        _id: 1,
        name: {
          first: "Murphy",
          last: "Mejia"
        },
        image: "http://placehold.it/32x32"
      },
      {
        _id: 2,
        name: {
          first: "Dodson",
          last: "Yates"
        },
        image: "http://placehold.it/32x32"
      }
    ]
  },
  {
    _id: "5bfbdbdb96d13e6f9a2224e8",
    isActive: false,
    balance: 1443,
    image: "http://placehold.it/32x32",
    age: 31,
    name: {
      first: "Kim",
      last: "Walters"
    },
    email: "kim.walters@undefined.org",
    about:
      "Id incididunt ea officia ex eiusmod sint in quis ea quis aute duis laborum. Velit dolor velit nostrud labore adipisicing ut incididunt cillum ut enim qui in aute irure. Nostrud esse eiusmod nostrud non esse dolore minim officia deserunt officia ipsum minim ea mollit. Quis labore esse minim cupidatat pariatur incididunt est dolore. Ad sint Lorem irure ad duis do ea minim occaecat sit. Do labore elit sunt eu id excepteur aliquip ipsum anim reprehenderit consequat.",
    registered: "<TypeError: this.moment(...).getTime is not a function>",
    friends: [
      {
        _id: 0,
        name: {
          first: "Nicholson",
          last: "Anthony",
          image: "http://placehold.it/32x32"
        }
      },
      {
        _id: 1,
        name: {
          first: "Madge",
          last: "Ferguson",
          image: "http://placehold.it/32x32"
        }
      },
      {
        _id: 2,
        name: {
          first: "Tracy",
          last: "Strong",
          image: "http://placehold.it/32x32"
        }
      }
    ]
  },
  {
    _id: "5bfbdbdbdfac166bedcfbe6b",
    isActive: true,
    balance: 650,
    image: "http://placehold.it/32x32",
    age: 27,
    name: {
      first: "Harper",
      last: "Booker"
    },
    email: "harper.booker@undefined.tv",
    about:
      "Non exercitation excepteur proident aliqua. Dolor deserunt dolor sunt aliqua do incididunt elit proident sit. Exercitation sit incididunt minim dolor laboris enim id dolore aute consequat amet culpa.",
    registered: "<TypeError: this.moment(...).getTime is not a function>",
    friends: [
      {
        _id: 0,
        name: {
          first: "Green",
          last: "Griffin",
          image: "http://placehold.it/32x32"
        }
      },
      {
        _id: 1,
        name: {
          first: "Deleon",
          last: "Bradley",
          image: "http://placehold.it/32x32"
        }
      },
      {
        _id: 2,
        name: {
          first: "Alma",
          last: "Beard",
          image: "http://placehold.it/32x32"
        }
      }
    ]
  }
];

export async function getUsers() {
  return new Promise(resolve => setTimeout(() => resolve(users), 1000));
}

export async function getUser(id) {
  const data = await getUsers();
  return data.find(m => m._id === id);
}

export async function getUserFriends(id) {
  const user = await this.getUser(id);
  return user.friends;
}

export function getUserServerSide(id) {
  return users.find(m => m._id === id);
}
