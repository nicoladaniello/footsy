import * as data from "../services/data/matches.json";
import * as firebase from "react-native-firebase";

async function populateMatches() {
  try {
    const batch = firebase.firestore().batch();
    /// add your operations here

    const ref = firebase.firestore().collection("matches");

    console.log(Object.keys(data.default));

    const formattedData = Object.keys(data.default).map(k => data[k]);
    formattedData.forEach(m => {
      console.log("m:", m);
      m.coords = new firebase.firestore.GeoPoint(
        m.address.latitude,
        m.address.longitude
      );
      delete m.id;
      delete m.address.latitude;
      delete m.address.longitude;
      batch.set(ref.doc(), m);
    });

    console.log("formattedData", formattedData);
    /// commit operations
    return batch.commit();
  } catch (ex) {
    console.error(ex);
  }
}

export default populateMatches;
