const matches = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    address: {
      place_id: 123,
      description: "842 Whitmore Gardens, London NW10 5HJ"
    },
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Mike",
      img:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ccc1801fd91dc9cf869fa6a09360c09&auto=format&fit=crop&w=200&q=80"
    },
    teamSize: 12,
    eventDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    address: {
      place_id: 123,
      description: "842 Whitmore Gardens, London NW10 5HJ"
    },
    price: 17,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471777",
      name: "Francesco",
      img:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6de094989d0cf912f189ad8b7322d6d2&auto=format&fit=crop&w=200&q=80"
    },
    teamSize: 14
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    address: {
      place_id: 123,
      description: "842 Whitmore Gardens, London NW10 5HJ"
    },
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471123",
      name: "Matt",
      img:
        "https://images.unsplash.com/photo-1522230130022-498e355165c5?ixlib=rb-0.3.5&s=ed7432766bea7599b70175f67cb59e84&auto=format&fit=crop&w=200&q=80"
    },
    teamSize: 16
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    address: {
      place_id: 123,
      description: "842 Whitmore Gardens, London NW10 5HJ"
    },
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471987",
      name: "Anthony",
      img:
        "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-0.3.5&s=0c174fa9ae5edba809100c5f57a7a563&auto=format&fit=crop&w=200&q=80"
    },
    teamSize: 16
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    address: {
      place_id: 123,
      description: "842 Whitmore Gardens, London NW10 5HJ"
    },
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471443",
      name: "Jake",
      img:
        "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=964d58042165011dc41fcc8d88098c38&auto=format&fit=crop&w=200&q=80g"
    },
    teamSize: 16
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    address: {
      place_id: 123,
      description: "842 Whitmore Gardens, London NW10 5HJ"
    },
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471987",
      name: "Anthony",
      img:
        "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-0.3.5&s=0c174fa9ae5edba809100c5f57a7a563&auto=format&fit=crop&w=200&q=80"
    },
    teamSize: 12
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    address: {
      place_id: 123,
      description: "842 Whitmore Gardens, London NW10 5HJ"
    },
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471777",
      name: "Francesco",
      img:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6de094989d0cf912f189ad8b7322d6d2&auto=format&fit=crop&w=200&q=80"
    },
    teamSize: 10
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    address: {
      place_id: 123,
      description: "842 Whitmore Gardens, London NW10 5HJ"
    },
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471818",
      name: "Mike",
      img:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3ccc1801fd91dc9cf869fa6a09360c09&auto=format&fit=crop&w=200&q=80"
    },
    teamSize: 10
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    address: {
      place_id: 123,
      description: "842 Whitmore Gardens, London NW10 5HJ"
    },
    duration: "60",
    price: 5.5,
    organiser: {
      _id: "5b21ca3eeb7f6fbccd471987",
      name: "Anthony",
      img:
        "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-0.3.5&s=0c174fa9ae5edba809100c5f57a7a563&auto=format&fit=crop&w=200&q=80"
    },
    teamSize: 10
  }
];

export function getMatches() {
  return matches;
}

export function getMatch(id) {
  return matches.find(m => m._id === id);
}

export async function saveMatch(match) {
  try {
    let matchInDb = (await matches.find(m => m._id === match._id)) || {};
    //   matchInDb.organiser = genresAPI.genres.find(g => g._id === match.genreId);
    matchInDb.address = {
      place_id: match.address.place_id,
      description: match.address.description
    };
    matchInDb.duration = match.duration;
    matchInDb.eventDate = match.eventDate;
    matchInDb.isPrivate = match.isPrivate;
    matchInDb.price = match.price;
    matchInDb.teamSize = match.teamSize;

    if (!matchInDb._id) {
      matchInDb._id = Date.now();
      await matches.push(matchInDb);
    }

    return matchInDb;
  } catch (ex) {
    return null;
  }
}

export function deleteMatch(id) {
  let matchInDb = matches.find(m => m._id === id);
  matches.splice(matches.indexOf(matchInDb), 1);
  return matchInDb;
}
