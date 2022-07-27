import {
  CanvasOmittedDescriptive,
  CanvasOmittedLinking,
  CanvasOmittedStructural,
  CanvasOmittedTechnical,
  OmitProperties,
  Reference,
  TechnicalProperties,
} from '@iiif/presentation-3';
import { DescriptiveNormalized } from '../iiif/descriptive';
import { StructuralNormalized } from '../iiif/structural';
import { LinkingNormalized } from '../iiif/linking';

export declare type CanvasNormalized = OmitProperties<TechnicalProperties, CanvasOmittedTechnical> &
  OmitProperties<DescriptiveNormalized, CanvasOmittedDescriptive> &
  OmitProperties<StructuralNormalized<Reference<'AnnotationPage'>>, CanvasOmittedStructural> &
  OmitProperties<LinkingNormalized, CanvasOmittedLinking> & { type: 'Canvas' };
