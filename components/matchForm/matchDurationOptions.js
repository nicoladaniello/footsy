const MATCH_DURATION_VALUES = [
  { text: "30 min" },
  { text: "60 min" },
  { text: "90 min" },
  { text: "Cancel" }
];

const MATCH_DURATION_CANCEL_INDEX = 4;

const MATCH_DURATION_OPTIONS = {
  options: MATCH_DURATION_VALUES,
  cancelButtonIndex: MATCH_DURATION_CANCEL_INDEX,
  title: "Match Duration"
};

export default MATCH_DURATION_OPTIONS;
