const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/api/greet', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`))