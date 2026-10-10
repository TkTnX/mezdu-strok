export interface IFilters {
    genres: Array<{ id: number; name: string }>;
    authors: Array<{ id: number; name: string }>;
    publishers: Array<{ id: number; name: string }>
}