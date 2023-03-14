/**
 * @license
 * Copyright (c) TechAurelian
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Check if a link is external or not.
 *
 * This function considers a link as external if the link starts with a protocol or a double slash.
 *
 * @param href The link to check.
 * @returns True if the link is external, false otherwise.
 */
export function isExternalLink(href: string): boolean {
  return new RegExp('^(([a-z]+:)|(//))', 'i').test(href);
}

/**
 * Add UTM parameters to a link.
 *
 * @param href The link to add UTM parameters to.
 * @param utm_source The UTM source.
 * @param utm_medium The UTM medium.
 * @param utm_campaign The UTM campaign.
 * @param utm_term The UTM term.
 * @param utm_content The UTM content.
 * @returns The link with all the non-empty UTM parameters that were passed.
 */
export function addUtmParameters(
  href: string,
  utm_source: string,
  utm_medium: string,
  utm_campaign: string,
  utm_term: string,
  utm_content: string
): string {
  const url = new URL(href);
  let params = url.searchParams;
  if (utm_source) params.append('utm_source', utm_source);
  if (utm_medium) params.append('utm_medium', utm_medium);
  if (utm_campaign) params.append('utm_campaign', utm_campaign);
  if (utm_term) params.append('utm_term', utm_term);
  if (utm_content) params.append('utm_content', utm_content);
  return url.toString();
}
