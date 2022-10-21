export default interface IHeadphone{
    id: string
    brandName: string
    type: 'headphone'
    description: string
    oldPrice: number
    newPrice: number
    connectionType: 'wireless' | 'wired'
    batteryRunTime: number
    microphone: boolean
    weight: number
    connector: 'jack' | 'mini jack' | 'micro-jack' | 'usb'
    rating: number
}