const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const sequelize = require('./config/database');
const userRouter = require('./routes/userRoutes');
const driverRouter = require('./routes/driverRoutes');

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', driverRouter);

sequelize.sync()
.then(() => console.log('Database criado'))
.catch(err => console.log('Erro ao criar o banco: '+err));

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log('Servidor na porta: ' + port);
})