export default interface IPhone{
    id: string
    brandName: string
    type: 'phone'
    description: string
    oldPrice: number
    newPrice: number
    ppi: number
    ram: number
    displayType: 'lcd' | 'tft' | 'ips' | 'amoled' | 'p-oled' | 'qled'
    resolution: {
        width: number
        height: number
    }
    refreshRate: number
    weight: number
    chipset: string
    storageSize: number
    matrix: number
    nfc: boolean
    wirelessCharging: boolean
    rating: number
}