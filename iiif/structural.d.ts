import { Reference, SpecificResource } from '@iiif/presentation-3';

export declare type StructuralNormalized<T extends Reference | SpecificResource> = {
  items: T[];
  annotations: Array<Reference<'AnnotationPage'>>;
  structures: Array<Reference<'Range'>>;
};
