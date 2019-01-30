import dbService, { CollectionPredicate, QueryFn } from "./firestoreService";
import AppUser from "../models/appUser";

const colRef: CollectionPredicate = dbService.col("users");

async function find(queryFn?: QueryFn) {
  const queryRef: CollectionPredicate = queryFn ? queryFn(colRef) : colRef;

  const snap = await queryRef.get();
  const docs = [];
  snap.forEach(doc => docs.push(doc.data()));
  return docs;
}

async function get(userId: string) {
  const snap = await colRef.doc(userId).get();
  if (!snap.exists)
    throw new Error("UserService.get(): document does not exist.");
  return snap.data;
}

function save(userId: string, user: AppUser) {
  const doc = colRef.doc(userId);
  return dbService.set(doc, user, true);
}

export default {
  find,
  get,
  save
};
