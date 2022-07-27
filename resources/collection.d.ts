import {
  CollectionOmittedDescriptive,
  CollectionOmittedLinking,
  CollectionOmittedStructural,
  CollectionOmittedTechnical,
  OmitProperties,
  Reference,
  TechnicalProperties,
} from '@iiif/presentation-3';
import { DescriptiveNormalized } from '../iiif/descriptive';
import { StructuralNormalized } from '../iiif/structural';
import { LinkingNormalized } from '../iiif/linking';

export type NormalizedCollectionItemSchemas = Reference<'Collection'> | Reference<'Manifest'>;

export declare type CollectionNormalized = OmitProperties<TechnicalProperties, CollectionOmittedTechnical> &
  OmitProperties<DescriptiveNormalized, CollectionOmittedDescriptive> &
  OmitProperties<StructuralNormalized<NormalizedCollectionItemSchemas>, CollectionOmittedStructural> &
  OmitProperties<LinkingNormalized, CollectionOmittedLinking> & {
    type: 'Collection';
  };
