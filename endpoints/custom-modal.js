import AppExtensionsSDK from "@pipedrive/app-extensions-sdk";
import "dotenv/config";

async function handler(req, res) {
  const sdk = await new AppExtensionsSDK({
    identifier: process.env.CUSTOM_MODAL_ID,
  }).initialize({
    size: { height: 500 },
  });

  res.json({
    msg: "hello, modal is running",
  });
}

module.exports = handler;
