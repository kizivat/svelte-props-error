<script lang="ts">
	import type { RenderProps, SupportedAs } from "./types";

	type T = $$Generic<SupportedAs>;
	// type $$Props = RenderProps<T> & { anotherProp: string }; // error

	type Props = RenderProps<T> & { anotherProp: string };
	type $$Props = Props;

	export let as: SupportedAs | undefined = undefined;
	export let anotherProp: string = "default value";
</script>

{anotherProp}
{#if typeof as === "string"}
	<svelte:element this={as} {...$$restProps}>
		<slot />
	</svelte:element>
{:else if as}
	<svelte:component this={as} {...$$restProps}>
		<slot />
	</svelte:component>
{:else}
	<slot />
{/if}
