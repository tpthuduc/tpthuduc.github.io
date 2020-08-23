const dev = {
    base: "http://localhost:4000",
    apiGateway: {
      REGION: "local",
      URL: "http://localhost:4000/api"
    },
    news: {
        REGION: "local",
        URL: "http://localhost:4000/api/news"
    },
    post:{
        REGION: "local",
        URL: "http://localhost:4000/api/post"
    }
  };
  
  const prod = {
    base: "http://54.169.227.141:4000",
    apiGateway: {
        REGION: "public",
        URL: "http://54.169.227.141:4000/api"
      },
      news: {
          REGION: "public",
          URL: "http://54.169.227.141:4000/api/news"
      },
      post:{
        REGION: "public",
        URL: "http://54.169.227.141:4000/api/post"
    }
  };
  
  const config = process.env.REACT_APP_STAGE === 'production'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };