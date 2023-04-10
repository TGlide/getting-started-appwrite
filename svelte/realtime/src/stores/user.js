import { writable } from 'svelte/store';

/** @type {import('svelte/store').Writable<string | null>} */
export const userId = writable(null);
