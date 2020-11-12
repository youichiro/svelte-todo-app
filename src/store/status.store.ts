import { writable } from 'svelte/store';
import type { Status } from '../domain/models';

export const status = writable<Status>('all');
