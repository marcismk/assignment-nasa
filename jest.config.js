module.exports = {
    preset: 'ts-jest',
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],
    moduleDirectories: ['node_modules', '.yalc', 'src'],
    testEnvironment: 'jest-environment-jsdom-sixteen',
    testPathIgnorePatterns: [
        '/node_modules/',
    ],
    testRegex:
        '(/(__tests__)/.*|(\\.|/)(test|spec))\\.(tsx?|ts?)$',
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
};
