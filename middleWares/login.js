const randomToken = require('rand-token');

const token = randomToken.generate(16);

const login = (_req, res) => {
    try {
        return res.status(200).json({ token: `${token}` });
    } catch (error) {
        return res.status(404).json(console.log(error));
    }
};

module.exports = login;