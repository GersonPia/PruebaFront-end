export interface NewsTrending {
  page:          number;
  results:       Result[];
  total_pages:   number;
  total_results: number;
}

export interface Result {
  video?:            boolean;
  title?:            string;
  overview:          string;
  release_date?:     Date;
  adult?:            boolean;
  backdrop_path:     string;
  vote_count:        number;
  genre_ids:         number[];
  vote_average:      number;
  original_language: OriginalLanguage;
  original_title?:   string;
  poster_path:       string;
  id:                number;
  popularity:        number;
  media_type:        MediaType;
  first_air_date?:   Date;
  name?:             string;
  origin_country?:   string[];
  original_name?:    string;
}

export enum MediaType {
  Movie = "movie",
  Tv = "tv",
}

export enum OriginalLanguage {
  Da = "da",
  En = "en",
  Es = "es",
  Ko = "ko",
}
