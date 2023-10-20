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

export interface RecommendedShow {
  category: string;
  isBookmarked: boolean;
  isTrending: boolean;
  rating: string;
  thumbnail: Regular;
  title: string;
  year: number;
}

export interface Regular {
  regular: RegularImage;
}

export interface RegularImage {
  small: string;
  medium: string;
  large: string;
}
