export interface ErrorData {
  url: boolean,
  name: boolean,
  origin: boolean,
  adaptability: boolean,
  description: boolean
}

export interface Breeds {
  name: string,
  adaptability: string,
  description: string,
  origin: string,
  id: string,
}

export interface newPostType {
  id: string,
  url: string,
  width: number,
  height: number,
  breeds: Breeds[],
}