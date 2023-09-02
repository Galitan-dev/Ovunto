import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
import type { Session } from '@auth/core/types';

export const load = (async ({ parent }) => {
    const { session } = await parent();

    if (!session) {
        throw redirect(302, '/auth');
    }

    return {
        session: session as Session
    };
}) satisfies LayoutServerLoad;
