import path from 'path';

import Koa from 'koa';
import koaBody from 'koa-body';
import mount from 'koa-mount';
import Router from '@koa/router';
import serve from 'koa-static';

// @ts-ignore
import nunjucks from 'koa-nunjucks-async';

import { parseText, calculateTotalValue, VALUE_TRESHOLDS } from './utils';

const app = new Koa();
const router = new Router();

app.use(koaBody());

app.use(nunjucks('src/views', {
    ext: '.njk'
}));

app.use(mount('/assets', serve('src/assets')));

app.use(router.routes());
app.use(router.allowedMethods());



router.get('/', async (ctx: Koa.Context, next: Koa.Next) => {
    await ctx.render('home', {
        title: "Avios redemption value calculator",
    });

    next();
});

router.get('/calculator', async (ctx: Koa.Context, next: Koa.Next) => {
    await ctx.render('calculator', {
        title: "Avios redemption value calculator",
        valueTresholds: VALUE_TRESHOLDS,
    });

    next();
});

router.post('/calculator', async (ctx: Koa.Context, next: Koa.Next) => {
    const submittedValues: any = ctx.request.body?.submittedValues;
    const aviosValue: any = ctx.request.body?.aviosValue || 100;
    const processed: any = parseText(ctx.request.body.submittedValues).map((i: any) => {
        return {
            input: i,
            value: calculateTotalValue(i, aviosValue),
        }
    });

    await ctx.render('calculator', {
        title: "Avios redemption value calculator",
        submittedValues,
        processed,
        valueTresholds: VALUE_TRESHOLDS,
        aviosValue,
    });

    next();
});

app.listen(6969);