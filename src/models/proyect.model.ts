export interface IProyect {
  id: string
  title: string
  src: string
  slug: string
  description: string
  images: IImage[]
}

export interface IImage {
  id: string
  src: string
}
