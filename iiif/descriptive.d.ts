import { DescriptiveProperties, OmitProperties, Reference } from '@iiif/presentation-3';

export declare type DescriptiveNormalized = OmitProperties<
  DescriptiveProperties,
  'provider' | 'thumbnail' | 'accompanyingCanvas' | 'placeholderCanvas'
> & {
  thumbnail: Array<Reference<'ContentResource'>>;
  placeholderCanvas: Reference<'Canvas'> | null;
  accompanyingCanvas: Reference<'Canvas'> | null;
  provider: Array<Reference<'Agent'>>;
};
