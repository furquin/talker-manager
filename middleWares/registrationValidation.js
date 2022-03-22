const tokenValidation = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ message: 'Token não encontrado' });
    }
    if (authorization.length !== 16) {
        return res.status(401).json({ message: 'Token inválido' });
    }

    next();
};

const nameValidation = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }

    if (name.length < 3) {
        return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }

    next();
};

const ageValidation = (req, res, next) => {
    const { age } = req.body;
    const intAge = parseInt(age, 10);
    if (typeof age !== 'number' || !age) {
        return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }
    if (intAge < 18) {
        return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }

    next();
};

const formatValidation = (req, res, next) => {
    const { talk: { watchedAt, rate } } = req.body;
    const validFormat = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/;
    const parseIntRate = parseInt(rate, 10);
    
    if (parseIntRate < 1 || parseIntRate > 5) {
        return res.status(400).json(
            { message: 'O campo "rate" deve ser um inteiro de 1 à 5' },
        );
    }
    if (validFormat.test(watchedAt) === false) {
        return res.status(400).json(
            { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' },
        );
    }

    next();
};
