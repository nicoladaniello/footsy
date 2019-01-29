import * as firebase from "react-native-firebase";

export type DatabasePredicate = firebase.RNFirebase.firestore.Firestore;
export type CollectionPredicate = firebase.RNFirebase.firestore.CollectionReference;
export type DocumentPredicate = firebase.RNFirebase.firestore.DocumentReference;
export type QueryFn = (col?: CollectionPredicate) => CollectionPredicate;

const db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});

/// **************
/// Get a Reference
/// **************

function col(ref: CollectionPredicate | string): CollectionPredicate {
  return typeof ref === "string" ? db.collection(ref) : ref;
}
function doc(ref: DocumentPredicate | string): DocumentPredicate {
  return typeof ref === "string" ? db.doc(ref) : ref;
}

/// **************
/// Get Data
/// **************

function geopoint(lat: number, lng: number) {
  return new firebase.firestore.GeoPoint(lat, lng);
}

/// Firebase Server Timestamp
function _timestamp() {
  return firebase.firestore.FieldValue.serverTimestamp();
}

/// **************
/// Write Data
/// **************

function set(ref: DocumentPredicate, data: any, merge: boolean = false) {
  return doc(ref).set(
    {
      ...data,
      updatedAt: _timestamp(),
      createdAt: _timestamp()
    },
    { merge }
  );
}

function update(ref: DocumentPredicate, data: any) {
  return doc(ref).update({
    ...data,
    updatedAt: _timestamp()
  });
}

function _delete(ref: DocumentPredicate) {
  return doc(ref).delete();
}

function add(ref: CollectionPredicate, data) {
  return col(ref).add({
    ...data,
    updatedAt: _timestamp(),
    createdAt: _timestamp()
  });
}

export default {
  col,
  doc,
  set,
  update,
  delete: _delete,
  add,
  geopoint,
  timestamp: _timestamp
};
