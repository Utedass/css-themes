<script lang="ts">
	import { resolve } from '$app/paths';
	import Text from '$lib/components/Text.svelte';
	import { toggleMode } from 'mode-watcher';

</script>

<button onclick={toggleMode}>Ehm..</button>

<Text greger="banan" class="sten">Men vi måste ju ha nåt här..</Text>

<div class="sten">En annan div</div>

<div class="themed" data-mode="dark" data-theme="alt">
	<p>Vi ska försöka ändra på det här..</p>
	<span>Så att det fungerar där det är <a href={resolve('/')}>tänkt</a></span>
</div>

<div class="themed" data-theme="alt2">
	<p>Vi ska försöka ändra på det här..</p>
	<span>Så att det fungerar där det är <a href={resolve('/')}>tänkt</a></span>
</div>

<div class="themed dark" data-theme="alt2">
	<p>Vi ska försöka ändra på det här..</p>
	<span>Så att det fungerar där det är <a href={resolve('/')}>tänkt</a></span>
</div>

<style>
	.sten {
		background-color: var(--fg);
		color: var(--bg);
	}
</style>
