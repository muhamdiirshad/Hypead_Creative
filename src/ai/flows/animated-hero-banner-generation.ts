'use server';

/**
 * @fileOverview A Genkit flow for generating animated hero banner content variations.
 *
 * - generateAnimatedHeroBanner - A function that generates content variations for animated hero banners based on a prompt.
 * - AnimatedHeroBannerInput - The input type for the generateAnimatedHeroBanner function.
 * - AnimatedHeroBannerOutput - The return type for the generateAnimatedHeroBanner function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnimatedHeroBannerInputSchema = z.object({
  theme: z
    .string()
    .describe('The theme or concept for the animated hero banner content.'),
  numVariations: z
    .number()
    .default(3)
    .describe('The number of content variations to generate.'),
});
export type AnimatedHeroBannerInput = z.infer<typeof AnimatedHeroBannerInputSchema>;

const AnimatedHeroBannerOutputSchema = z.object({
  variations: z.array(z.string()).describe('An array of generated hero banner content variations.'),
});
export type AnimatedHeroBannerOutput = z.infer<typeof AnimatedHeroBannerOutputSchema>;

export async function generateAnimatedHeroBanner(input: AnimatedHeroBannerInput): Promise<AnimatedHeroBannerOutput> {
  return animatedHeroBannerFlow(input);
}

const heroBannerPrompt = ai.definePrompt({
  name: 'heroBannerPrompt',
  input: {schema: AnimatedHeroBannerInputSchema},
  output: {schema: AnimatedHeroBannerOutputSchema},
  prompt: `You are a marketing expert specializing in creating engaging hero banner content for digital marketing agencies. Generate {{numVariations}} variations of hero banner content based on the following theme: {{{theme}}}. The variations should be concise, attention-grabbing, and suitable for use in animated hero banners. Return as an array of strings.

Variations:`, 
});

const animatedHeroBannerFlow = ai.defineFlow(
  {
    name: 'animatedHeroBannerFlow',
    inputSchema: AnimatedHeroBannerInputSchema,
    outputSchema: AnimatedHeroBannerOutputSchema,
  },
  async input => {
    const {output} = await heroBannerPrompt(input);
    return output!;
  }
);
