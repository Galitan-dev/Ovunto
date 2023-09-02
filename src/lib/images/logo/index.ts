import day from './day.svg';
import night from './night.svg';

import { theme } from '$lib/stores/preferences';
import { derived } from 'svelte/store';

export default derived(theme, (theme) => ({ day, night }[theme]));
