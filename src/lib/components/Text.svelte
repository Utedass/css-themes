<script lang="ts">
	import { onMount } from 'svelte';

	let data = $props();

	onMount(() => {
		console.log(Object.keys(data));
	});
</script>

<div class={data.class}>{@render data.children?.()}</div>

<pre>
{JSON.stringify(data, null, 2)}
</pre>

<a href="https://google.com">Go to google!</a>

<p>And here is some other text that also get affected by the current global theme.</p>