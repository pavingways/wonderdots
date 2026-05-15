/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Ambient module declarations for project path aliases (no baseUrl in tsconfig)
declare module "@lib/*" {
	const value: any;
	export default value;
}

declare module "@utils/*" {
	const value: any;
	export default value;
	// Known named exports from utility modules (helps TS recognize imports like `import { getFormattedDate } from "@utils/all"`)
	export const getFormattedDate: any;
}

declare module "@components/*" {
	const value: any;
	export default value;
}

declare module "@layouts/*" {
	const value: any;
	export default value;
}

declare module "@assets/*" {
	const value: any;
	export default value;
}

declare module "@pages/*" {
	const value: any;
	export default value;
}

// Allow bare 'assets/...' imports
declare module "assets/*" {
	const value: any;
	export default value;
}

// Generic static asset types
declare module "*.svg" {
	const content: any;
	export default content;
}
