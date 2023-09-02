import { writable } from 'svelte/store';
import cookie from 'cookie';
import { browser } from '$app/environment';

function createTheme() {
    const cookieTheme = browser ? cookie.parse(document.cookie)['theme'] : undefined;

    const { set, update, subscribe } = writable(cookieTheme as 'day' | 'night');

    subscribe((theme) => {
        if (browser && theme) {
            document.cookie = cookie.serialize('theme', theme, { path: '/', httpOnly: false });
            document.body.className = theme;
        }
    });

    return {
        toggle() {
            update((theme) => (theme === 'day' ? 'night' : 'day'));
        },
        set,
        subscribe
    };
}

export const theme = createTheme();
