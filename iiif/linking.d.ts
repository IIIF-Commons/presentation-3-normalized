import { Reference, SpecificResource } from '@iiif/presentation-3';
import { ServiceNormalized } from '../resources/service';

export declare type LinkingNormalized = {
  seeAlso: Array<Reference<'ContentResource'>>;
  service: Array<ServiceNormalized>;
  services: Array<ServiceNormalized>;
  rendering: Array<Reference<'ContentResource'>>;
  partOf: Array<Reference<'Collection' | 'Manifest'>>;
  start: SpecificResource<Reference<'Canvas'>> | null;
  supplementary: Reference<'AnnotationCollection'> | null;
  homepage: Array<Reference<'ContentResource'>>;
};
