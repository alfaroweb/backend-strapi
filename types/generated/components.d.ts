import type { Struct, Schema } from '@strapi/strapi';

export interface ElementsSeo extends Struct.ComponentSchema {
  collectionName: 'components_elements_seos';
  info: {
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    shareImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    keywords: Schema.Attribute.Text;
  };
}

export interface ElementsPostSection extends Struct.ComponentSchema {
  collectionName: 'components_elements_post_sections';
  info: {
    displayName: 'Post Section';
  };
  attributes: {
    sectionTitle: Schema.Attribute.Text;
    sectionBody: Schema.Attribute.Blocks;
  };
}

export interface ElementsCover extends Struct.ComponentSchema {
  collectionName: 'components_elements_covers';
  info: {
    displayName: 'Cover';
    description: '';
  };
  attributes: {
    coverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    src: Schema.Attribute.String;
    alt: Schema.Attribute.Text;
    width: Schema.Attribute.Integer;
    height: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.seo': ElementsSeo;
      'elements.post-section': ElementsPostSection;
      'elements.cover': ElementsCover;
    }
  }
}
