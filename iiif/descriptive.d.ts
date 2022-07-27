import { DescriptiveProperties, OmitProperties, Reference } from '@iiif/presentation-3';

export declare type DescriptiveNormalized = OmitProperties<
  DescriptiveProperties,
  'provider' | 'thumbnail' | 'accompanyingCanvas' | 'placeholderCanvas' | 'posterCanvas'
> & {
  thumbnail: Array<Reference<'ContentResource'>>;
  placeholderCanvas: Reference<'Canvas'> | null;
  accompanyingCanvas: Reference<'Canvas'> | null;
  provider: Array<Reference<'Agent'>>;

  /**
   * @deprecated since 3.0-beta - use placeholderCanvas or accompanyingCanvas
   */
  posterCanvas: never;
};
