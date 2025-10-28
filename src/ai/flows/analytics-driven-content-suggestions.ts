'use server';

/**
 * @fileOverview A flow that uses GenAI to suggest content and design improvements based on analytics data.
 *
 * - suggestContentAndDesignImprovements - A function that suggests content and design improvements for the website.
 * - AnalyticsInput - The input type for the suggestContentAndDesignImprovements function.
 * - ContentSuggestionsOutput - The return type for the suggestContentAndDesignImprovements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyticsInputSchema = z.object({
  pageViews: z.number().describe('Number of page views.'),
  formSubmissions: z.number().describe('Number of contact form submissions.'),
  projectClicks: z.number().describe('Number of project clicks.'),
  currentContent: z.string().describe('Description of the current website content.'),
  currentDesign: z.string().describe('Description of the current website design.'),
});
export type AnalyticsInput = z.infer<typeof AnalyticsInputSchema>;

const ContentSuggestionsOutputSchema = z.object({
  contentSuggestions: z.string().describe('Suggestions for content to showcase.'),
  designImprovements: z.string().describe('Suggestions for design improvements.'),
});
export type ContentSuggestionsOutput = z.infer<typeof ContentSuggestionsOutputSchema>;

export async function suggestContentAndDesignImprovements(
  input: AnalyticsInput
): Promise<ContentSuggestionsOutput> {
  return analyticsDrivenContentSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyticsDrivenContentSuggestionsPrompt',
  input: {schema: AnalyticsInputSchema},
  output: {schema: ContentSuggestionsOutputSchema},
  prompt: `You are an expert in website optimization. Based on the following analytics data, suggest content to showcase and improvements to the website design.

Analytics Data:
Page Views: {{{pageViews}}}
Form Submissions: {{{formSubmissions}}}
Project Clicks: {{{projectClicks}}}

Current Content: {{{currentContent}}}
Current Design: {{{currentDesign}}}

Suggestions:
Content Suggestions:
Design Improvements:`, 
});

const analyticsDrivenContentSuggestionsFlow = ai.defineFlow(
  {
    name: 'analyticsDrivenContentSuggestionsFlow',
    inputSchema: AnalyticsInputSchema,
    outputSchema: ContentSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
