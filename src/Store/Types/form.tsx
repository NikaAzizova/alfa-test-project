//export interface newCardProps {
   // url: string,
   // name: string,
   // origin: string,
   // adaptability: string,
  //  description: string
//}

//export interface BreedsError {
  //  name: boolean,
  ////  origin: boolean,
  //  adaptability: boolean,
  //  description: boolean
//}

//export interface ErrorData {
  //  url: boolean,
  //  breeds: BreedsError[],
//}

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


}

export interface newCardProps {
    id: string,
    url: string,
    breeds: Breeds[],
}