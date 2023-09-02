import type { Provider } from '@auth/core/providers';
import Email from '@auth/core/providers/email';
import Github from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import Twitter from '@auth/core/providers/twitter';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { SvelteKitAuth, type SvelteKitAuthConfig } from '@auth/sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';

import {
    AUTH_SECRET,
    EMAIL_FROM,
    EMAIL_SERVER,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    TWITTER_CLIENT_ID,
    TWITTER_CLIENT_SECRET,
    VERCEL_ENV
} from '$env/static/private';
import prisma from '$lib/prisma';
import { sequence } from '@sveltejs/kit/hooks';

const config: SvelteKitAuthConfig = {
    adapter: PrismaAdapter(prisma),
    providers: [
        Github({
            clientId: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET
        }),
        Twitter({
            clientId: TWITTER_CLIENT_ID,
            clientSecret: TWITTER_CLIENT_SECRET
        }),
        Google({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        }),
        Email({
            server: EMAIL_SERVER,
            from: EMAIL_FROM
        }) as Provider
    ],
    secret: AUTH_SECRET,
    debug: VERCEL_ENV !== 'production',
    session: {
        maxAge: 1800
    }
};

const authorization = (async ({ event, resolve }) => {
    if (event.url.pathname.startsWith('/app')) {
        const session = await event.locals.getSession();
        if (!session) {
            throw redirect(303, '/auth');
        }
    }

    return resolve(event);
}) satisfies Handle;

const theme = (({ event, resolve }) => {
    const theme = event.cookies.get('theme') ?? 'day';
    return resolve(event, {
        transformPageChunk: ({ html }) => html.replace('%theme%', theme)
    });
}) satisfies Handle;

export const handle = sequence(SvelteKitAuth(config), authorization, theme);
