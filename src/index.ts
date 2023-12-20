import Koa from 'koa';
const { koaBody } = require('koa-body');
// @ts-ignore
import nunjucks from 'koa-nunjucks-async';

import { parseText, calculateTotalValue } from './utils';

const app = new Koa();
app.use(koaBody());

app.use(nunjucks('src/views', {
    ext: '.njk'
}));

app.use(async (ctx: Koa.Context) => {
    const processed: any = parseText(ctx.request.body.value).map((i: any) => {
        return {
            input: i,
            value: calculateTotalValue(i, 100),
        }
    });
    console.log(processed);
    await ctx.render('home', {
        title: "Avios value calculator",
        value: ctx.request.body.value,
        processed,
    });
});

app.listen(6969);