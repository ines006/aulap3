// jest.config.js


module.exports = {
  testEnvironment: 'jsdom',
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
