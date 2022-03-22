const fs = require('fs').promises;

const newTalker = async (req, res) => {
    const { name, age, talk } = req.body;
    try {
        const fileContent = await fs.readFile('./talker.json', 'utf-8');
        const fileParse = JSON.parse(fileContent);
        const lastId = fileParse.length;
        const currentId = lastId + 1;
        fileParse.push({ id: currentId, name, age, talk });
        const fileStringify = JSON.stringify(fileParse);
        await fs.writeFile('./talker.json', fileStringify);

        return res.status(201).json(fileParse[lastId]);
    } catch (error) {
        return res.status(404).json(console.log(error));
    }
};

module.exports = newTalker;