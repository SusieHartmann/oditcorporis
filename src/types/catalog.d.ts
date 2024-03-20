/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import type { StacExtensions, StacLink, StacVersion } from './common.js';

/**
 * This object represents Catalogs in a SpatioTemporal Asset Catalog.
 *
 * https://github.com/radiantearth/stac-spec/tree/master/catalog-spec
 */
export interface StacCatalog {
  /**
   * The STAC version the Catalog implements.
   *
   */
  stac_version: StacVersion;
  /**
   * A list of extension identifiers the Catalog implements
   *
   */
  stac_extensions?: StacExtensions;
  /**
   * Set to 'Catalog' if this Catalog only implements the Catalog spec.
   *
   */
  type: 'Catalog';
  /**
   * Identifier for the Catalog.
   *
   */
  id: string;
  /**
   * A short descriptive one-line title for the Catalog.
   *
   */
  title?: string;
  /**
   * Detailed multi-line description to fully explain the Catalog.
   *
   * [CommonMark 0.29](http://commonmark.org/) syntax MAY be used for rich text representation.
   */
  description: string;
  /**
   * A list of references to other documents.
   *
   */
  links: StacLink[];
  [k: string]: unknown;
}