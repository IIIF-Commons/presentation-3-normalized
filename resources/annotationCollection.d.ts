import {
  AnnotationCollectionOmittedDescriptive,
  AnnotationCollectionOmittedLinking,
  AnnotationCollectionOmittedTechnical,
  OmitProperties,
  TechnicalProperties,
} from '@iiif/presentation-3';
import { LinkingNormalized } from '../iiif/linking';
import { DescriptiveNormalized } from '../iiif/descriptive';

export interface AnnotationCollectionNormalized
  extends OmitProperties<TechnicalProperties, AnnotationCollectionOmittedTechnical>,
    OmitProperties<DescriptiveNormalized, AnnotationCollectionOmittedDescriptive>,
    OmitProperties<LinkingNormalized, AnnotationCollectionOmittedLinking> {}
