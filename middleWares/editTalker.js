const fs = require('fs').promises;

const editTalker = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const fileContent = await fs.readFile('./talker.json', 'utf-8');
    const fileParse = JSON.parse(fileContent);
    const idInt = parseInt(id, 10);
  
    const talkerId = fileParse.findIndex((talker) => talker.id === idInt);
    const editedTalker = { ...fileParse[talkerId], name, age, talk };
    fileParse[talkerId] = editedTalker;
  
    const fileStringify = JSON.stringify(fileParse);
          await fs.writeFile('./talker.json', fileStringify);
  
         return res.status(200).json(editedTalker);
  } catch (error) {
        return res.status(404).json(console.log(error));
    }
};

module.exports = editTalker;