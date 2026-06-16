const express = require('express')
const cors  = require('cors')
const minhasRotas = require('./routers/Router');
const app = express()

app.use(cors())
app.use(express.json())
const PORTA = 3000
app.use(minhasRotas);


app.get('/', (req, res) => {
    res.send("🚀 Servidor do Back-end está online e funcionando!");
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando perfeitamente em: http://localhost:${PORTA}`);
});