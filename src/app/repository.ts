import { Developer } from './developer';

export class Repository {
    id: number;
    author: string;
    name: string;
    avatar: string;
    url: string;
    description: string;
    language: string;
    languageColor: string;
    stars: number;
    forks: number;
    currentPeriodStars: number;
    builtBy: Developer;
  }