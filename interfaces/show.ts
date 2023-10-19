export interface TrendingShow {
  category: string;
  rating: string;
  title: string;
  isBookmarked: boolean;
  isTrending: boolean;
  year: number;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  large: string;
  medium: string;
  small: string;
  trending?: Trending;
}

export interface Trending {
  small: string;
  large: string;
}
