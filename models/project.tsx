export enum ProjectCategory {
    android,
    flutter,
    unity
}

export enum UrlType {
    none,
    github,
    googlePlay,
    demo,
    youtube,
}

export type Project = {
    id: number,
    name: string;
    category: ProjectCategory;
    description: string;
    imagePath: string;
    url: string;
    urlType: UrlType;
    screenshots: string[];
}