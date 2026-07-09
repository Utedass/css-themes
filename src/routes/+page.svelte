<script lang="ts">
	import { resolve } from '$app/paths';
	import Text from '$lib/components/Text.svelte';
	import { mode, toggleMode } from '$lib/mode-watcher';
</script>

<button onclick={toggleMode}>Toggle</button>

<Text greger="banan" class="sten">Det fungerar inte att kasta lokal scopad styling på en komponent.</Text>

<div class="sten">En div där vi kastar om textfärg med bakgrund med lokal scopad svelte-styling.</div>

<div class="themed" data-mode="dark" data-theme="alt">
	<p>Här är lite lokalt temad text</p>
	<span>Av någon anledning <a href={resolve('/')}>byter länktext färg när man växlar dark/light</a>. Men men..</span>
</div>

<div class="themed" data-theme="alt2">
	<p>Här är lite lokalt temad text</p>
</div>

<div class="themed" data-mode="dark" data-theme="alt2">
	<p>Här är lite lokalt temad text</p>
</div>

<button onclick={() => mode.mode = "dark"}>Släck för fan!</button>

<style>
	.sten {
		background-color: var(--fg);
		color: var(--bg);
	}
</style>
