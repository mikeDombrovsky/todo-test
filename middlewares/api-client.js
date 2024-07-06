const pipedriveSdk = require('pipedrive');
require("dotenv").config();

async function oauthContext(req, res, next) {
    const apiClient = pipedriveSdk.ApiClient.instance;

    let oauth2 = apiClient.authentications.oauth2;
    oauth2.clientId = process.env.CLIENT_ID;
    oauth2.clientSecret = process.env.CLIENT_SECRET;
    oauth2.redirectUri = process.env.REDIRECT_URI;

    req.apiClient = apiClient;

    next();
}

module.exports = oauthContext;
