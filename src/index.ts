import Koa from 'koa';
// @ts-ignore
import nunjucks from 'koa-nunjucks-async';

const app = new Koa();

app.use(nunjucks('src/views', {
    ext: '.njk'
}));

app.use(async (ctx: any) => {
    await ctx.render('home', {
        title: "Avios value calculator",
        message: 'Greetings, the universe!'
    });
});

app.listen(6969);