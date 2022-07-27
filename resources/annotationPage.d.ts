import {
  AnnotationPageItemSchemas,
  AnnotationPageOmittedDescriptive,
  AnnotationPageOmittedLinking,
  AnnotationPageOmittedStructural,
  AnnotationPageOmittedTechnical,
  OmitProperties,
  Reference,
  TechnicalProperties,
} from '@iiif/presentation-3';
import { LinkingNormalized } from '../iiif/linking';
import { StructuralNormalized } from '../iiif/structural';
import { DescriptiveNormalized } from '../iiif/descriptive';

export declare type AnnotationPageNormalized = OmitProperties<TechnicalProperties, AnnotationPageOmittedTechnical> &
  OmitProperties<DescriptiveNormalized, AnnotationPageOmittedDescriptive> &
  OmitProperties<
    StructuralNormalized<Reference<AnnotationPageItemSchemas>, AnnotationPageItemSchemas>,
    AnnotationPageOmittedStructural
  > &
  OmitProperties<LinkingNormalized, AnnotationPageOmittedLinking> & {
    type: 'AnnotationPage';
  };
