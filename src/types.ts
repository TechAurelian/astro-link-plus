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
  addUtm?: boolean;
  newTab?: boolean;
  noFollowRel?: boolean;
  noReferrerRel?: boolean;
  sponsoredRel?: boolean;
  ugcRel?: boolean;
  utmAsReferrer?: boolean;
  utmCampaign?: string;
  utmContent?: string;
  utmMedium?: string;
  utmSource?: string;
  utmTerm?: string;
};