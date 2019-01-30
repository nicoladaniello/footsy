import * as data from "../services/data/matches.json";
import * as firebase from "react-native-firebase";

async function populateMatches() {
  try {
    const batch = firebase.firestore().batch();
    /// add your operations here

    const ref = firebase.firestore().collection("matches");

    const formattedData = Object.keys(data).map(k => data[k]);
    formattedData.forEach(m => {
      delete m._id;
      delete m.players;
      batch.set(ref.doc(), m);
    });

    //   console.log(formattedData[0]);
    /// commit operations
    return batch.commit();
  } catch (ex) {
    console.error(ex);
  }
}

export default populateMatches;
