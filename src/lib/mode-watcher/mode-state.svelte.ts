type modeType = { mode : 'light' | 'dark' | 'system'; };

// Holds the current mode state, globally, in a svelte state-rune. Works since this is a .svelte.ts file
export const mode = $state<modeType>({ mode: 'system' });

export function toggleMode() {
	mode.mode = mode.mode === 'dark' ? 'light' : 'dark';
}
