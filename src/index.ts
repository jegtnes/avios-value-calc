import Koa from 'koa';
const { koaBody } = require('koa-body');
// @ts-ignore
import nunjucks from 'koa-nunjucks-async';

const app = new Koa();
app.use(koaBody());

app.use(nunjucks('src/views', {
    ext: '.njk'
}));

app.use(async (ctx: Koa.Context) => {
    await ctx.render('home', {
        title: "Avios value calculator",
        value: ctx.request.body.value,
    });
});

app.listen(6969);