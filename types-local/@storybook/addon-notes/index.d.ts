import * as Vue from 'vue';
import { StoryFunction } from '@storybook/vue';

export function withNotes(textOrOptions: string | object): (getStory: StoryFunction) => StoryFunction;

export interface WithNotesProps extends Vue.PropOptions<HTMLDivElement> {
    notes?: string;
}

export const WithNotes: Vue.Component<WithNotesProps>;