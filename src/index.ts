import Koa from 'koa';
const { koaBody } = require('koa-body');
// @ts-ignore
import nunjucks from 'koa-nunjucks-async';

import { parseText, calculateTotalValue, VALUE_TRESHOLDS } from './utils';

const app = new Koa();
app.use(koaBody());

app.use(nunjucks('src/views', {
    ext: '.njk'
}));

app.use(async (ctx: Koa.Context) => {
    const submittedValues: any = ctx.request.body?.submittedValues;
    const aviosValue: any = ctx.request.body?.aviosValue || 100;
    const processed: any = parseText(ctx.request.body.submittedValues).map((i: any) => {
        return {
            input: i,
            value: calculateTotalValue(i, aviosValue),
        }
    });

    await ctx.render('home', {
        title: "Avios value calculator",
        submittedValues,
        processed,
        valueTresholds: VALUE_TRESHOLDS,
        aviosValue,
    });
});

app.listen(6969);