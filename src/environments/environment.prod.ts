declare var $ENV: any;

export const environment = {
  production: true,
  backendUrl: process.env.API_URL || "http://localhost:8080"
};
