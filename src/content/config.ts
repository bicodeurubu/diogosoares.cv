import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        role: z.string(),
        year: z.string(),
        tags: z.array(z.string()),
        featured: z.boolean().default(false),
    }),
});

export const collections = {
    work: workCollection,
};
