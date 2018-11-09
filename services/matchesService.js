const matches = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    place: "842 Whitmore Gardens, London NW10 5HJ",
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Mike",
      img:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ccc1801fd91dc9cf869fa6a09360c09&auto=format&fit=crop&w=200&q=80"
    },
    numberOfPlayers: 12,
    eventDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    place: "123 Kickstart Street",
    price: 17,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471777",
      name: "Francesco",
      img:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6de094989d0cf912f189ad8b7322d6d2&auto=format&fit=crop&w=200&q=80"
    },
    numberOfPlayers: 14
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    place: "123 Kickstart Street",
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471123",
      name: "Matt",
      img:
        "https://images.unsplash.com/photo-1522230130022-498e355165c5?ixlib=rb-0.3.5&s=ed7432766bea7599b70175f67cb59e84&auto=format&fit=crop&w=200&q=80"
    },
    numberOfPlayers: 16
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    place: "123 Kickstart Street",
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471987",
      name: "Anthony",
      img:
        "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-0.3.5&s=0c174fa9ae5edba809100c5f57a7a563&auto=format&fit=crop&w=200&q=80"
    },
    numberOfPlayers: 16
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    place: "123 Kickstart Street",
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471443",
      name: "Jake",
      img:
        "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=964d58042165011dc41fcc8d88098c38&auto=format&fit=crop&w=200&q=80g"
    },
    numberOfPlayers: 16
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    place: "123 Kickstart Street",
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471987",
      name: "Anthony",
      img:
        "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-0.3.5&s=0c174fa9ae5edba809100c5f57a7a563&auto=format&fit=crop&w=200&q=80"
    },
    numberOfPlayers: 12
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    place: "123 Kickstart Street",
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471777",
      name: "Francesco",
      img:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6de094989d0cf912f189ad8b7322d6d2&auto=format&fit=crop&w=200&q=80"
    },
    numberOfPlayers: 10
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    place: "123 Kickstart Street",
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Mike",
      img:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ccc1801fd91dc9cf869fa6a09360c09&auto=format&fit=crop&w=200&q=80"
    },
    numberOfPlayers: 10
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    place: "123 Kickstart Street",
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471987",
      name: "Anthony",
      img:
        "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-0.3.5&s=0c174fa9ae5edba809100c5f57a7a563&auto=format&fit=crop&w=200&q=80"
    },
    numberOfPlayers: 10
  }
];

export function getMatches() {
  return matches;
}

export function getMatch(id) {
  return matches.find(m => m._id === id);
}

export function saveMatch(match) {
  let matchInDb = matches.find(m => m._id === match._id) || {};
  //   matchInDb.organiser = genresAPI.genres.find(g => g._id === match.genreId);
  matchInDb.numberOfPlayers = match.numberOfPlayers;

  if (!matchInDb._id) {
    matchInDb._id = Date.now();
    matches.push(matchInDb);
  }

  return matchInDb;
}

export function deleteMatch(id) {
  let matchInDb = matches.find(m => m._id === id);
  matches.splice(matches.indexOf(matchInDb), 1);
  return matchInDb;
}
