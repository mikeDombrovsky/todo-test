require("dotenv").config()
const db = require('../../database/oauth');

async function handler(req, res) {
    const basicAuthHeader = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64');

    if (`Basic ${basicAuthHeader}` !== req.headers.authorization) {
        res.status(401);
        return res.send('Unauthorized');
    }

    const { user_id: userId, company_id: companyId } = req.body;

    await db.deleteInstallation(userId, companyId);

    res.send('ok');

}

module.exports = handler;
