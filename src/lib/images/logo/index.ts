import './day.svg';
import './night.svg';

import { theme } from '$lib/stores/preferences';
import { derived } from 'svelte/store';

export default derived(theme, (theme) => `/src/lib/images/logo/${theme}.svg`);
