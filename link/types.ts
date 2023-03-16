/**
 * @license
 * Copyright (c) TechAurelian {@link https://techaurelian.com}
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { z } from "astro/zod";

/**
 * The link button schema.
 */
export const linkSchema = z
  .object({
    href: z.string().refine((val) => new URL(val, "http://localhost")),

    addUtm: z.boolean().optional(),
    newTab: z.boolean().optional(),
    noFollowRel: z.boolean().optional(),
    noReferrerRel: z.boolean().optional(),
    sponsoredRel: z.boolean().optional(),
    ugcRel: z.boolean().optional(),
    utmAsReferrer: z.boolean().optional(),
    utmCampaign: z.string().optional(),
    utmContent: z.string().optional(),
    utmMedium: z.string().optional(),
    utmSource: z.string().optional(),
    utmTerm: z.string().optional(),
  })
  .strict();

export type LinkType = z.infer<typeof linkSchema>;
