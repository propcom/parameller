const path = require("path");

module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    modulePaths: ["node_modules"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    coverageDirectory: "<rootDir>/coverage/jest",
    setupTestFrameworkScriptFile: path.resolve(__dirname, "jest.setup.js"),
    collectCoverageFrom: [
        "<rootDir>/src/**/*.ts",
        "!**/*.d.ts",
        "!<rootDir>/src/app.ts"
    ],
    unmockedModulePathPatterns: [
        path.resolve(__dirname, "node_modules", "jasmine-reporters")
    ]
};
