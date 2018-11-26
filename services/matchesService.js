import { getCurrentUser } from "./authService";
import AppMatch from "../common/appMatch";
import moment from "moment";

const matches = [
  {
    _id: "5bfbb2663216bafb80a60855",
    private: true,
    eventDate: 1544062644471,
    teamSize: 7,
    price: 1690,
    description:
      "Occaecat aliqua deserunt aliquip reprehenderit id adipisicing ut id non incididunt nostrud mollit dolor. Enim enim veniam duis deserunt laboris officia non. Reprehenderit culpa reprehenderit magna labore amet tempor incididunt. Ex ut labore quis exercitation eiusmod velit non.",
    organiser: {
      _id: "5bfbb266788a1769800a448f",
      image: "http://placehold.it/64x64",
      name: {
        first: "Dawson",
        last: "Fernandez"
      },
      organised: "<TypeError: this.number is not a function>"
    },
    address: {
      description: "115 Virginia Place, Juntura, Illinois, 8382",
      latitude: 51.194488,
      longitude: 113.182821
    },
    players: [
      [
        {
          _id: "5bfbb266c5104da9a8ff3164",
          image: "http://placehold.it/64x64",
          name: {
            first: "Stein",
            last: "Wiley"
          }
        }
      ],
      [
        {
          _id: "5bfbb266364754ff59901b7e",
          image: "http://placehold.it/64x64",
          name: {
            first: "Fannie",
            last: "Willis"
          }
        }
      ],
      [
        {
          _id: "5bfbb266ab765323279752dc",
          image: "http://placehold.it/64x64",
          name: {
            first: "Jacquelyn",
            last: "Morrow"
          }
        }
      ]
    ],
    createdAt: 1541529839979
  },
  {
    _id: "5bfbb266a0bc21a66d0ba88f",
    private: true,
    eventDate: 1542368831732,
    teamSize: 9,
    price: 3131,
    description:
      "Eiusmod officia irure eu fugiat. Dolore adipisicing ad cupidatat non eiusmod duis dolor sit. Aliquip adipisicing culpa commodo excepteur ex deserunt amet duis non. Nisi aliqua excepteur officia incididunt cillum sunt culpa. Laboris ipsum sit amet irure aliqua incididunt in enim occaecat. Sunt magna reprehenderit in nulla adipisicing. Laborum nisi sint id sit.",
    organiser: {
      _id: "5bfbb266b7ddd491b7c05e40",
      image: "http://placehold.it/64x64",
      name: {
        first: "Johnson",
        last: "Barlow"
      },
      organised: "<TypeError: this.number is not a function>"
    },
    address: {
      description: "630 Kings Hwy, Clarksburg, Virginia, 4741",
      latitude: -7.192042,
      longitude: 113.081431
    },
    players: [
      [
        {
          _id: "5bfbb266ee39a889d42f4342",
          image: "http://placehold.it/64x64",
          name: {
            first: "Rene",
            last: "Peterson"
          }
        }
      ],
      [
        {
          _id: "5bfbb26691a8b3a83ce04b44",
          image: "http://placehold.it/64x64",
          name: {
            first: "Medina",
            last: "Hernandez"
          }
        }
      ],
      [
        {
          _id: "5bfbb266fa3762809a22282e",
          image: "http://placehold.it/64x64",
          name: {
            first: "Greene",
            last: "Mccarthy"
          }
        }
      ]
    ],
    createdAt: 1541514047875
  },
  {
    _id: "5bfbb26649b2b201e9de1942",
    private: true,
    eventDate: 1542934835567,
    teamSize: 8,
    price: 3999,
    description:
      "Labore Lorem culpa ut laborum occaecat nisi ipsum quis ipsum esse laboris. Lorem nostrud aliqua ipsum labore est amet ex consectetur voluptate. Labore veniam nostrud ut deserunt non incididunt qui ad. Anim ipsum cupidatat nostrud sint cillum dolor nostrud excepteur id voluptate. Elit elit adipisicing quis occaecat qui aute duis. Consectetur ad nostrud proident aliqua occaecat consequat duis.",
    organiser: {
      _id: "5bfbb2668bdcf7889378fe40",
      image: "http://placehold.it/64x64",
      name: {
        first: "Tammie",
        last: "Watson"
      },
      organised: "<TypeError: this.number is not a function>"
    },
    address: {
      description: "505 Sullivan Place, Chaparrito, Iowa, 9470",
      latitude: -58.231223,
      longitude: -69.638856
    },
    players: [
      [
        {
          _id: "5bfbb2660e946157fe914d4b",
          image: "http://placehold.it/64x64",
          name: {
            first: "Gretchen",
            last: "Morrison"
          }
        }
      ],
      [
        {
          _id: "5bfbb266ede082b039a34ad9",
          image: "http://placehold.it/64x64",
          name: {
            first: "Collier",
            last: "Clark"
          }
        }
      ],
      [
        {
          _id: "5bfbb266508e2f48b034cbac",
          image: "http://placehold.it/64x64",
          name: {
            first: "Nolan",
            last: "Swanson"
          }
        }
      ]
    ],
    createdAt: 1541877001102
  },
  {
    _id: "5bfbb2662b0d2a11b1cec27b",
    private: true,
    eventDate: 1542398521278,
    teamSize: 6,
    price: 2805,
    description:
      "Reprehenderit occaecat et eu voluptate ipsum ad sint consequat aliqua. Occaecat anim adipisicing qui sit consequat culpa culpa sunt. Magna veniam non sunt est est laborum veniam mollit laboris eu aliquip velit nisi. Quis et est amet amet ipsum culpa officia. Cupidatat et exercitation velit sint sit esse.",
    organiser: {
      _id: "5bfbb266601189d78352902f",
      image: "http://placehold.it/64x64",
      name: {
        first: "Barbara",
        last: "Meadows"
      },
      organised: "<TypeError: this.number is not a function>"
    },
    address: {
      description: "282 Hubbard Place, Slovan, Georgia, 4950",
      latitude: 18.032463,
      longitude: 126.617034
    },
    players: [
      [
        {
          _id: "5bfbb2664d7280a3cbbd3d40",
          image: "http://placehold.it/64x64",
          name: {
            first: "Johnnie",
            last: "Barnes"
          }
        }
      ],
      [
        {
          _id: "5bfbb266a9043ed483ee2f04",
          image: "http://placehold.it/64x64",
          name: {
            first: "Boyer",
            last: "Chapman"
          }
        }
      ],
      [
        {
          _id: "5bfbb266e7e3cfcd68e48ab6",
          image: "http://placehold.it/64x64",
          name: {
            first: "Keri",
            last: "Rivers"
          }
        }
      ]
    ],
    createdAt: 1542267474666
  },
  {
    _id: "5bfbb266336aec881fb77232",
    private: false,
    eventDate: 1544081140357,
    teamSize: 8,
    price: 2344,
    description:
      "Quis deserunt aliqua pariatur amet. Reprehenderit aute ipsum aliqua sunt eu consectetur ea Lorem occaecat cupidatat ipsum. Quis ut pariatur do ut dolore Lorem amet mollit.",
    organiser: {
      _id: "5bfbb26621bd198aafa19576",
      image: "http://placehold.it/64x64",
      name: {
        first: "Bobbie",
        last: "Mcbride"
      },
      organised: "<TypeError: this.number is not a function>"
    },
    address: {
      description: "842 Farragut Road, Robinette, South Dakota, 2596",
      latitude: 88.060375,
      longitude: -177.803174
    },
    players: [
      [
        {
          _id: "5bfbb2669dcf1cb8c5e874ba",
          image: "http://placehold.it/64x64",
          name: {
            first: "Frances",
            last: "Casey"
          }
        }
      ],
      [
        {
          _id: "5bfbb26698b2eb5d2fa3d268",
          image: "http://placehold.it/64x64",
          name: {
            first: "Alberta",
            last: "Hood"
          }
        }
      ],
      [
        {
          _id: "5bfbb266e8c16077a4992655",
          image: "http://placehold.it/64x64",
          name: {
            first: "Walls",
            last: "Reilly"
          }
        }
      ]
    ],
    createdAt: 1542904800615
  },
  {
    _id: "5bfbb266f46faa2cbcf466b0",
    private: true,
    eventDate: 1541433482950,
    teamSize: 7,
    price: 720,
    description:
      "Voluptate et anim magna elit nostrud eu eiusmod mollit. Occaecat adipisicing deserunt enim ipsum ea enim anim reprehenderit culpa adipisicing. Pariatur consequat labore adipisicing labore do.",
    organiser: {
      _id: "5bfbb2664e7c99336c155f03",
      image: "http://placehold.it/64x64",
      name: {
        first: "Cannon",
        last: "Travis"
      },
      organised: "<TypeError: this.number is not a function>"
    },
    address: {
      description: "815 Kings Place, Groveville, New York, 7154",
      latitude: -23.731317,
      longitude: 108.524542
    },
    players: [
      [
        {
          _id: "5bfbb2663b1b890aeebc7dbf",
          image: "http://placehold.it/64x64",
          name: {
            first: "Stacey",
            last: "Humphrey"
          }
        }
      ],
      [
        {
          _id: "5bfbb26657ea9dd055554d64",
          image: "http://placehold.it/64x64",
          name: {
            first: "Jeannette",
            last: "Gilbert"
          }
        }
      ],
      [
        {
          _id: "5bfbb266217ce3da9741c408",
          image: "http://placehold.it/64x64",
          name: {
            first: "Rosa",
            last: "Ratliff"
          }
        }
      ]
    ],
    createdAt: 1541649846800
  },
  {
    _id: "5bfbb266d6fc059ed56265b4",
    private: false,
    eventDate: 1542112813116,
    teamSize: 7,
    price: 3949,
    description:
      "Id consectetur anim amet id incididunt. Sit nulla amet est enim incididunt proident duis aliquip in velit labore do culpa. Commodo eu pariatur labore ea reprehenderit eiusmod reprehenderit excepteur mollit do.",
    organiser: {
      _id: "5bfbb2669b42610ed4452b18",
      image: "http://placehold.it/64x64",
      name: {
        first: "Calderon",
        last: "Chavez"
      },
      organised: "<TypeError: this.number is not a function>"
    },
    address: {
      description: "242 Baltic Street, Sultana, Alabama, 6961",
      latitude: -7.085624,
      longitude: -143.732348
    },
    players: [
      [
        {
          _id: "5bfbb2666f6ace9fd0c2f09b",
          image: "http://placehold.it/64x64",
          name: {
            first: "Rutledge",
            last: "Roy"
          }
        }
      ],
      [
        {
          _id: "5bfbb2664c7d47d02686fb2f",
          image: "http://placehold.it/64x64",
          name: {
            first: "Crawford",
            last: "Page"
          }
        }
      ],
      [
        {
          _id: "5bfbb2668d15e373e1b77919",
          image: "http://placehold.it/64x64",
          name: {
            first: "Caitlin",
            last: "Higgins"
          }
        }
      ]
    ],
    createdAt: 1541363907689
  },
  {
    _id: "5bfbb2661355dcd97b804fce",
    private: true,
    eventDate: 1545083305721,
    teamSize: 10,
    price: 2621,
    description:
      "Mollit ex consequat id quis amet. Cupidatat eu ullamco consectetur id incididunt labore exercitation labore minim id et nisi pariatur. Commodo tempor exercitation officia quis dolor. Veniam reprehenderit sunt velit exercitation commodo nostrud nulla.",
    organiser: {
      _id: "5bfbb266caf7af2f2b2322f2",
      image: "http://placehold.it/64x64",
      name: {
        first: "Russell",
        last: "Blackburn"
      },
      organised: "<TypeError: this.number is not a function>"
    },
    address: {
      description: "526 Benson Avenue, Osage, Maine, 5230",
      latitude: -10.714881,
      longitude: -56.646647
    },
    players: [
      [
        {
          _id: "5bfbb266945cc7dd13047e0b",
          image: "http://placehold.it/64x64",
          name: {
            first: "Lessie",
            last: "Rutledge"
          }
        }
      ],
      [
        {
          _id: "5bfbb2667aa3bed35290bf82",
          image: "http://placehold.it/64x64",
          name: {
            first: "Hooper",
            last: "Miller"
          }
        }
      ],
      [
        {
          _id: "5bfbb2668805d5686c34b9a3",
          image: "http://placehold.it/64x64",
          name: {
            first: "Lori",
            last: "Rivas"
          }
        }
      ]
    ],
    createdAt: 1542560024393
  }
];

const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const assignRandomDates = matches => {
  matches.forEach(d => {
    d.eventDate = randomDate(
      moment().toDate(),
      moment()
        .add(7, "days")
        .toDate()
    );
  });
};

assignRandomDates(matches);

export async function getMatches() {
  const data = matches.map(m => new AppMatch(m));
  console.log(matches);
  return new Promise(resolve => setTimeout(() => resolve(data), 1000));
}

export async function getMatchesByDate(date) {
  const data = await getMatches();
  return data.filter(m => moment(m.eventDate).isSame(date, "day"));
}

export async function getMatchesByCurrentUser() {
  const user = await getCurrentUser();
  const data = await getMatches();
  return data.filter(m => m.organiser._id === user.iat);
}

export async function getMatch(id) {
  const data = await getMatches();
  return data.find(m => m._id === id);
}

export async function saveMatch(match) {
  let matchInDb = (await matches.find(m => m._id === match._id)) || {};
  matchInDb.address = {
    place_id: match.address.place_id,
    description: match.address.description,
    latitude: match.address.latitude,
    longitude: match.address.longitude
  };
  matchInDb.duration = match.duration;
  matchInDb.eventDate = match.eventDate;
  matchInDb.isPrivate = match.isPrivate;
  matchInDb.price = match.price;
  matchInDb.teamSize = match.teamSize;

  user = await getCurrentUser();
  matchInDb.organiser = {
    _id: user.iat,
    name: user.name,
    image: user.image
  };

  if (!matchInDb._id) {
    matchInDb._id = Date.now();
    await matches.push(matchInDb);
    console.log(getMatches());
  }

  return matchInDb;
}

export function deleteMatch(id) {
  let matchInDb = matches.find(m => m._id === id);
  matches.splice(matches.indexOf(matchInDb), 1);
  return matchInDb;
}
