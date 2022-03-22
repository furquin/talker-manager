const fs = require('fs').promises;

const deleteTalker = async (req, res, next) => {
    const { id } = req.params;
    try {
        const fileContent = await fs.readFile('./talker.json', 'utf-8');
        const fileParse = JSON.parse(fileContent);
        const idInt = parseInt(id, 10);

        const talkerId = fileParse.findIndex((talker) => talker.id === idInt);
        fileParse.splice(talkerId, 1);

        const fileStringify = JSON.stringify(fileParse);
        await fs.writeFile('./talker.json', fileStringify);
        
        res.status(204).end();

        next();
    } catch (error) {
        return res.status(404).json(console.log(error));
    }
};

module.exports = deleteTalker;