<script lang="ts">
	import { mode } from './mode-state.svelte';
	import { browser } from '$app/environment';

	// Retrieve browser-stored setting on load
	$effect(() => {
		if (!browser) return;

		const saved = localStorage.getItem('mode-watcher-mode');
		if (saved === 'light' || saved === 'dark' || saved === 'system') {
			mode.mode = saved;
		}
	});

	// React to changed setting and store that to browser storage
	$effect(() => {
		const root = document.documentElement;

		let dark =
			mode.mode === 'dark' ||
			(mode.mode === 'system' && window?.matchMedia('(prefers-color-scheme: dark)').matches);

		root.classList.toggle('dark', dark);
		root.dataset.mode = dark ? 'dark' : 'light';
		root.style.colorScheme = dark ? 'dark' : 'light';

		// Store setting to browser
		localStorage.setItem('mode-watcher-mode', mode.mode);
	});
</script>
