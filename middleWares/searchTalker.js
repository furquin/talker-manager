const fs = require('fs').promises;

const searchTalker = async (req, res) => {
     const { q } = req.query;
    try {
        const fileContent = await fs.readFile('./talker.json', 'utf-8');
        const fileParse = JSON.parse(fileContent);

        const filteredTalker = fileParse.filter((talker) => talker.name.includes(q));

        return res.status(200).json(filteredTalker);
    } catch (error) {
        return res.status(401).json(console.log(error));
    }
};

module.exports = searchTalker;