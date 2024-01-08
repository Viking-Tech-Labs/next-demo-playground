module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[VIK-([0-9]{0,6}\]) ?- ?(.+)$/,
      headerCorrespondence: ["type", "scope", "subject"],
    },
  },
  rules: {
    "header-match-team-pattern": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "header-match-team-pattern": (parsed) => {
          const { type, scope, subject } = parsed;
          if (type === null && scope === null && subject === null) {
            return [
              false,
              "header must be in format '[VIK-<TICKET_NUM>] - subject'",
            ];
          }
          return [true, ""];
        },
      },
    },
  ],
};
