<script lang="ts">
	import type {
		ComponentType,
		SvelteComponent,
		SvelteComponentTyped,
	} from "svelte";

	const supportedElements = ["div", "section"] as const;
	type SupportedElement = typeof supportedElements[number];
	type SupportedAs = SupportedElement | typeof SvelteComponent | undefined;
	type RenderProps<TAsProp> = (TAsProp extends string
		? svelteHTML.IntrinsicElements[TAsProp]
		: TAsProp extends ComponentType<SvelteComponentTyped<infer P>>
		? P
		: never) & { as?: TAsProp };

	type T = $$Generic<SupportedAs>;
	type A = RenderProps<T> & { anotherProp: string };
	type $$Props = A;

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
