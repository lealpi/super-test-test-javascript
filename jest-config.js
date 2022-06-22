module.exports = {
  clearMocks: true,
  moduleFileExtensions: ["ts", "tsx", "js"],
  roots: ["src"],
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  setupFilesAfterEnv: ["jest-extended"],
  globals: {
    "ts-jest": {
      diagnostics: false,
      tsConfigFile: "tsconfig.json",
    },
  },
  testMatch: ["src/__test__/*.+(ts|tsx|js)"],
  transformIgnorePatterns: ["node_modules"],
};
