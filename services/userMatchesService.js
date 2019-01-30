import { getCurrentUser } from "./authService";

const userMatches = [
  {
    id: "5c02c4204d8a8b3a4f5aff3f",
    userId: "5bfb01a27a52c35626e94843",
    matchId: "5bfbb2663216bafb80a60855"
  },
  {
    id: "5c02c420b409a1633ac3582d",
    userId: "5bfb01a27a52c35626e94843",
    matchId: "5bfbb266a0bc21a66d0ba88f"
  },
  {
    id: "5c02c420578f104eb17bf1c6",
    userId: "5bfb01a27a52c35626e94843",
    matchId: "5bfbb26649b2b201e9de1942"
  },
  {
    id: "5c02c420f342bdf8e991b38a",
    userId: "5bfb01a27a52c35626e94843",
    matchId: "5bfbb2662b0d2a11b1cec27b"
  },
  {
    id: "5c02c420cf62e2c34c9cd81a",
    userId: "5bfb01a27a52c35626e94843",
    matchId: "5bfbb266336aec881fb77232"
  }
];

export async function getUserMatchesPromise() {
  return new Promise(resolve => setTimeout(() => resolve(userMatches), 1000));
}

export async function getUserMatches(userId) {
  const data = await getUserMatchesPromise();
  const userMatches = data.filter(m => m.userId === userId);

  if (!userMatches) return null;

  const matchesIds = userMatches.map(um => um.matchId);
  return []; //matchesService.getMatchesByIds(matchesIds);
}

export async function getCurrentUserMatches() {
  const currentUser = await getCurrentUser();
  return this.getUserMatches(currentUser._id);
}
