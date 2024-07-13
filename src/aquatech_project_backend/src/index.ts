import { Server } from 'azle';
import express from 'express'
import cors from 'cors'

export default Server (() => {

    const app = express()
    app.use(cors());

    app.use(express.json());

    app.get('/greet', (req, res) => {
        return res.status(200).send({ message: 'Hello World from Azle!' });
    });
    // endpoints (la aplicacion pide que el consumo se convierta en pesos entonces multiplicamos los litros consumidos por el precio aprox)
    app.post('/calcular', (req, res) => {
        const litros = req.body.litros;
        const gasto = litros * 0.048;
        return res.status(200).send({ message: `Total a pagar: $${gasto}`});
        
    });

    return app.listen();
})
