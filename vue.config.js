module.exports = {
  devServer: {
    proxy: {
      'http://localhost:8080': {
        target: 'https://osh-restapi.azurewebsites.net/',
        changeOrigin: true,
      },
      'http://localhost:8080/test': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
    },
  },
};
