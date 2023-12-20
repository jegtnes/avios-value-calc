const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Greetings, the universe!';
});

app.listen(6969);