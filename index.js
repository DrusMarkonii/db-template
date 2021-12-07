const express = require('express');
const userRouter = require('./routes/user.routes.js');
const postRouter = require('./routes/post.routes')
const PORT = 5000;

const app = express();

app.use(express.json())
app.use('/api', userRouter);
app.use('/api', postRouter);


app.listen(PORT, () => console.log(`Server was started on ${PORT} PORT...`))