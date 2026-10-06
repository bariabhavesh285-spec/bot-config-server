const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/config', (req, res) => {
    res.json({
        bot_token: process.env.BOT_TOKEN || "8464531509:AAHjS9ChpQB4-TaWak3KXYgzqNOryLRluFY",
        admin_chat_id: process.env.ADMIN_CHAT_ID || "6251271940"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
