/**
 * @license
 * Copyright (c) TechAurelian
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { HTMLAttributes } from 'astro/types';

export interface IntegrationOptions {
  urlMap?: Record<string, string>;
}

export interface LinkProps extends HTMLAttributes<'a'> {
  newTab?: boolean;
  addUtm?: boolean;
  utmAsReferrer?: boolean;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};