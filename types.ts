export interface SectionData {
  id: string;
  title: string;
  content: string[];
  type: 'info' | 'list' | 'highlight' | 'link';
  icon?: string;
}

export interface VectorPoint {
  x: number;
  y: number;
  id: number;
}
