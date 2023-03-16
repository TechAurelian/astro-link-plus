/**
 * @license
 * Copyright (c) TechAurelian {@link https://techaurelian.com}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { AstroIntegration } from 'astro';

export { linkSchema } from "./src/types";
export type { LinkType } from "./src/types";

export interface AstroLinkPlusOptions {
  urlMap?: Record<string, string>;
}

declare global {
  // eslint-disable-next-line no-var
  var astroLinkPlusOptions: AstroLinkPlusOptions;
}

export default function integration(options: AstroLinkPlusOptions = {}): AstroIntegration {
  globalThis.astroLinkPlusOptions = options;
  console.log('Options passed to me (astro-link-plus)', astroLinkPlusOptions);

  return {
    name: 'astro-link-plus',
    hooks: {},
  };
}
