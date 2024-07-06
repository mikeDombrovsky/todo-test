module.exports = {
  clientId: "235e1a79863e095e", // Your Pipedrive App OAuth 2 Client ID
  clientSecret: "3ef6ac869a548aaad921b15a800b93d734f51e70", // Your Pipedrive App OAuth 2 Client Secret
  redirectUri: "https://localhost:3000/callback", // Your Pipedrive App OAuth 2 Redirection endpoint or Callback Uri
  surfaceJwt:
    "204c4be0e1e12742da21e5ec4f39e45681f61757efba58ac23f3bd723aa05da9", // The JWT you have to set in Pipedrive Marketplace Manager to check security of Surface request
  embeddedActionJwt:
    "135ad6d49d87eea352877a040896175fbe1b7166a456b2e7ad32ccc474036046", // The JWT you have to set in Pipedrive Marketplace Manager to check security of Embedded action request
};
