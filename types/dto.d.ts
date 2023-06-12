interface BookInfo {
  name: string
  cover: string
  size: string
  binding: string
  imgUrl: string
  bookType: string
  details: {
    maxPhotoPerBook: number
    minPhotoPerBook: number
    maxAIAdd: number
    pageNo: number
    price: number
  }[]
}
