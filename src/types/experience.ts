export interface Experience {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    isRecent: boolean;
    /** e.g., "Remote", "Hybrid", "On-site" */
    workSetting?: string;
}


