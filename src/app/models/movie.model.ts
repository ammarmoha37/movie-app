export interface Movie {
  id: number,
  title: string,
  backdrop_path: string,
  poster_path: string,
  year: number,
  duration: number,
  rate: string,
  about: string,
  genres: string[]
}

export interface Genre {
  id: number,
  name: string
}
