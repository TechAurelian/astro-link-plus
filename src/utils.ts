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
 * Replaces any parts of the url between '{' and '}' with the corresponding value from the url map.
 *
 * @param href The link to parse.
 * @param urlMap The url map to use.
 * @returns The parsed link.
 */
export function parseWithUrlMap(href: string, urlMap: Record<string, string>): string {
  return href.replace(/\{([^}]+)\}/g, (match, key) => urlMap[key] || match);
}

/**
 * Add UTM parameters to a link.
 *
 * @param href The link to add UTM parameters to.
 * @param utmSource The UTM source.
 * @param utmMedium The UTM medium.
 * @param utmCampaign The UTM campaign.
 * @param utmTerm The UTM term.
 * @param utmContent The UTM content.
 * @returns The link with all the non-empty UTM parameters that were passed.
 */
export function addUtmParameters(
  href: string,
  utmAsReferrer: boolean,
  utmSource: string,
  utmMedium: string,
  utmCampaign: string,
  utmTerm: string,
  utmContent: string
): string {
  const url = new URL(href);
  // let params = url.searchParams;

  const params = new URLSearchParams();
  if (utmSource) params.append('utm_source', utmSource);
  if (utmMedium) params.append('utm_medium', utmMedium);
  if (utmCampaign) params.append('utm_campaign', utmCampaign);
  if (utmTerm) params.append('utm_term', utmTerm);
  if (utmContent) params.append('utm_content', utmContent);

  if (utmAsReferrer) {
    url.searchParams.append('referrer', params.toString());
  } else {
    // Append params to url.searchParams, one by one, because no `appendAll` method exists
    // See https://github.com/whatwg/url/issues/461
    params.forEach((value, key) => {
      url.searchParams.append(key, value);
    });
  }

  return url.toString();
}
