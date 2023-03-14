/// <reference types="astro/astro-jsx" />

// Re-export components that the user needs to access from this Astro integration.
export { default as Link } from './Link.astro';
export type { LinkProps } from '../src/types';