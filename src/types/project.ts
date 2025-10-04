export interface Project {
    id: number;
    title: string;
    description: string;
    /**
     * Preferred: array of image URLs shown in gallery modal
     */
    thumbnails?: string[];
    /**
     * Back-compat: single image. If provided and `thumbnails` is empty,
     * the UI will treat this as `[thumbnail]`.
     */
    thumbnail?: string;
    skills: string[];
    tools: string[];
    playStoreUrl?: string;
    githubUrl?: string;
    isRecent: boolean;
}


