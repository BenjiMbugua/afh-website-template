import path from 'path'
import sharp from 'sharp'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import {
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  SubscriptFeature,
  SuperscriptFeature,
  InlineCodeFeature,
  ParagraphFeature,
  HeadingFeature,
  BlockquoteFeature,
  LinkFeature,
  OrderedListFeature,
  UnorderedListFeature,
  ChecklistFeature,
  IndentFeature,
  AlignFeature,
  RelationshipFeature,
  UploadFeature,
  HorizontalRuleFeature,
} from '@payloadcms/richtext-lexical'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Testimonials } from './collections/Testimonials'
import { FAQItems } from './collections/FAQItems'
import { SiteSettings } from './globals/SiteSettings'
import { Navigation } from './globals/Navigation'
import { FooterSettings } from './globals/FooterSettings'

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '— CMS',
    },
  },
  collections: [Users, Media, Services, Testimonials, FAQItems],
  globals: [SiteSettings, Navigation, FooterSettings],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI ?? '',
    },
  }),
  editor: lexicalEditor({
    features: () => [
      ParagraphFeature(),
      BoldFeature(),
      ItalicFeature(),
      UnderlineFeature(),
      StrikethroughFeature(),
      SubscriptFeature(),
      SuperscriptFeature(),
      InlineCodeFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
      BlockquoteFeature(),
      LinkFeature(),
      OrderedListFeature(),
      UnorderedListFeature(),
      ChecklistFeature(),
      IndentFeature(),
      AlignFeature(),
      RelationshipFeature(),
      UploadFeature(),
      HorizontalRuleFeature(),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET ?? 'dev-secret-change-me',
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL ?? 'http://localhost:3000',
  upload: {
    limits: {
      fileSize: 10_000_000, // 10MB
    },
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  sharp,
})
