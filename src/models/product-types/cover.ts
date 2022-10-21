export default interface ICover{
    id: string
    type: 'cover'
    brandName: string
    description: string
    oldPrice: number
    newPrice: number
    color: string
    compatibility: string[]
    material: string
    rating: number
}