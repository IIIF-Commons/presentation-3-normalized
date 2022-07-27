import {
  ItemSchemas,
  OmitProperties,
  RangeOmittedDescriptive,
  RangeOmittedLinking,
  RangeOmittedStructural,
  RangeOmittedTechnical,
  Reference,
  TechnicalProperties,
} from '@iiif/presentation-3';
import { StructuralNormalized } from '../iiif/structural';
import { DescriptiveNormalized } from '../iiif/descriptive';
import { LinkingNormalized } from '../iiif/linking';

export declare type RangeNormalized = OmitProperties<TechnicalProperties, RangeOmittedTechnical> &
  OmitProperties<DescriptiveNormalized, RangeOmittedDescriptive> &
  OmitProperties<StructuralNormalized<Reference<ItemSchemas>, ItemSchemas>, RangeOmittedStructural> &
  OmitProperties<LinkingNormalized, RangeOmittedLinking> & { type: 'Range' };
