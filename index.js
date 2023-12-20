const Koa = require('koa');
const nunjucks = require('koa-nunjucks-async');

const app = new Koa();

app.use(nunjucks('views', {
    ext: '.njk'
}));

app.use(async ctx => {
    await ctx.render('home', {
        message: 'Greetings, the universe!'
    });
});

app.listen(6969);