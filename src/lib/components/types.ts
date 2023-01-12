import type {
	ComponentType,
	SvelteComponent,
	SvelteComponentTyped,
} from "svelte";

const supportedElements = ["div", "section", "a"] as const;
export type SupportedElement = typeof supportedElements[number];
export type SupportedAs = SupportedElement | typeof SvelteComponent | undefined;
export type RenderProps<TAsProp> =
	| ((TAsProp extends string
			? svelteHTML.IntrinsicElements[TAsProp]
			: TAsProp extends ComponentType<SvelteComponentTyped<infer P>>
			? P
			: never) & { as?: TAsProp })
	| {};
