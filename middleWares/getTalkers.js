const fs = require('fs').promises;

const getTalkers = async (_req, res) => {
    try {
        const fileContent = await fs.readFile('./talker.json', 'utf-8');
        const fileParse = JSON.parse(fileContent);

        return res.status(200).json(fileParse);
    } catch (error) {
        return res.status(200).json(console.log(error));
    }
};

module.exports = getTalkers;