const express = require('express');
const userRouter = require('./routes/user.routes.js');
const petProjectRouter = require('./routes/petProject.routes.js')
const PORT = 3000;

const app = express();

app.use(express.json());

app.use('/api', userRouter);
app.use('/api', petProjectRouter);


app.listen(PORT, () => console.log(`Server was started on ${PORT} PORT...`))