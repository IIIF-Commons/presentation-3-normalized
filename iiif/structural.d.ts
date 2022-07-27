import { Reference } from '@iiif/presentation-3';

export declare type StructuralNormalized<T extends Reference<P>, P> = {
  items: T[];
  annotations: Array<Reference<'AnnotationPage'>>;
  structures: Array<Reference<'Range'>>;
};
