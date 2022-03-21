const fs = require('fs').promises;

const getTalkerById = async (req, res) => {
    try {
        const { id } = req.params;
        const fileContent = await fs.readFile('./talker.json', 'utf-8');
        const fileParse = JSON.parse(fileContent);
        const talkerId = fileParse.find((talker) => talker.id === parseInt(id, 10));

        if (!talkerId) {
            return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
        }

        return res.status(200).json(talkerId);
    } catch (error) {
         return res.status(404).json(console.log(error));
    }
};

module.exports = getTalkerById;