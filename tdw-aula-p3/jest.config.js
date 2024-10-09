// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Certifique-se que o caminho está correto
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  '^.+\\.jsx?$': 'babel-jest', 
  },
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mockar arquivos CSS
  },
};



// module.exports = {
//   collectCoverage: true, // Ativa a coleta de cobertura

//   coverageThreshold: {
//     global: {
//       branches: 80,
//       functions: 80,
//       lines: 80,
//       statements: 80
//     }
//   },

//   transform: {
//     "^.+\\.jsx?$": "babel-jest", // Adiciona suporte para JSX
//   },
//   testEnvironment: "jest-environment-jsdom", // Necessário para testes de componentes React
//   moduleNameMapper: {
//     "\\.(css|less|sass|scss)$": "identity-obj-proxy",
//   },
// };
