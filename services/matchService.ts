import dbService, { QueryFn, CollectionPredicate } from "./firestoreService";
import AppMatch from "../models/appMatch";

const colRef: CollectionPredicate = dbService.col("matches");

async function find(queryFn?: QueryFn) {
  const queryRef: CollectionPredicate = queryFn ? queryFn(colRef) : colRef;

  const snap = await queryRef.get();
  const docs = [];
  snap.forEach(doc => docs.push({ id: doc.id, ...doc.data() }));
  return docs;
}

async function get(matchId: string) {
  const snap = await colRef.doc(matchId).get();
  if (!snap.exists) throw new Error(`document ${matchId} does not exist.`);
  return { id: snap.id, ...snap.data() };
}

function save(match: AppMatch) {
  return dbService.add(colRef, match);
}

export default {
  find,
  get,
  save
};
