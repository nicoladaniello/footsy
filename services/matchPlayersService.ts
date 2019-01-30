import dbService, { QueryFn, CollectionPredicate } from "./firestoreService";
import AppMatch from "../models/appMatch";

const colRef: CollectionPredicate = dbService.col("match_players");

async function get(matchId: string) {
  const snap = await colRef.doc(matchId).get();
  if (!snap.exists)
    throw new Error("UserService.get(): document does not exist.");
  return snap.data;
}

export default {
  get
};
