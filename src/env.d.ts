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

