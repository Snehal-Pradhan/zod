import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { PlayerValidator } from './validators/player.validator.js';
import { Player } from './models/player.model.js';
import { validate } from './middlewares/validate.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', async (req, res) => {
    const query = {};
    if (req.query.id) {
        query._id = req.query.id;
    }
    const players = await Player.find(query);
    res.status(200).json(players);
});


app.post("/", validate(PlayerValidator), async (req, res) => {
    try {
        const player = await Player.create(req.validatedBody);
        res.status(201).json(player);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});