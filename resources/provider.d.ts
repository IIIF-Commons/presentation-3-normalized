import { InternationalString, Reference } from '@iiif/presentation-3';

export declare type ResourceProviderNormalized = {
  id: string;
  type: 'Agent';
  label: InternationalString;
  homepage: Array<Reference<'ContentResource'>>;
  logo: Array<Reference<'ContentResource'>>;
  seeAlso: Array<Reference<'ContentResource'>>;
};
