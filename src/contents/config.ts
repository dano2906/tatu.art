import { defineCollection } from 'astro:content';

const sampleCollection = defineCollection({});

export const collections = {
  'sample': sampleCollection,
};