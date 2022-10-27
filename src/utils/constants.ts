export interface BookProps {
  id: number;
  title: string;
  category_id: number;
  authors: string[];
  cover_url: string;
  description: string;
  sections: {
    title: string;
    content: string;
  }[];
  audio_length: number;
}
