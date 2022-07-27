import {
  ManifestItemSchemas,
  ManifestOmittedDescriptive,
  ManifestOmittedLinking,
  ManifestOmittedTechnical,
  OmitProperties,
  Reference,
  TechnicalProperties,
} from '@iiif/presentation-3';
import { DescriptiveNormalized } from '../iiif/descriptive';
import { StructuralNormalized } from '../iiif/structural';
import { LinkingNormalized } from '../iiif/linking';

export declare type ManifestNormalized = OmitProperties<TechnicalProperties, ManifestOmittedTechnical> &
  OmitProperties<DescriptiveNormalized, ManifestOmittedDescriptive> &
  StructuralNormalized<Reference<ManifestItemSchemas>, ManifestItemSchemas> &
  OmitProperties<LinkingNormalized, ManifestOmittedLinking> & {
    type: 'Manifest';
  };
