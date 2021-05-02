import Express from 'express';
import CORS from 'cors';
import Database from './Database.js';

const App = Express();
const port = 45030;

App.use(Express.json());
App.use(CORS());

const db = new Database();
db.connect("portfolio2", "HalieChalkley");


App.put("/pokemon/:id", async (req, res) => {
    const id = req.params.id;

    const name = req.body.name;
    const nickname = req.body.nickname;
    
    const result = await db.createOne( id, name, nickname );

    res.json({ result });
});

App.get("/pokemon/:ISBN", async (req, res) => {
    const ISBN = req.params.ISBN;

    const result = await db.readOne( ISBN );

    res.json( result );
});

App.post("/pokemon/", async (req, res) => {
    const query = req.query;
    console.log(query);
    const result = await db.readMany( query );

    res.json ( result );
});

App.patch("/pokemon/:name", async (req, res) => {
    const name = req.params.name;

    const nickname = req.body.nickname;

    const result = await db.updateOne( name, nickname );

    res.json( result );
});

// works
App.delete("/pokemon/:id", async (req, res) => {
    const id = req.params.id;

    const result = await db.deleteOne( id );

    res.json( result );
});

App.listen(port);