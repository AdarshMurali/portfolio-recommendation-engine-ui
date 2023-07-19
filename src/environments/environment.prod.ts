declare var $ENV: any;

export const environment = {
  production: true,
  API_URL: $ENV.API_URL || "http://localhost:8080"
};
