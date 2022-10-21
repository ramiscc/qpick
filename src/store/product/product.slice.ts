import {createSlice} from "@reduxjs/toolkit";
import IPhone from "../../models/product-types/phone";
import ICover from "../../models/product-types/cover";
import IHeadphone from "../../models/product-types/headphone";

interface ProductState {
    phones: IPhone[]
    covers: ICover[]
    headphones: IHeadphone[]
}

const initialState: ProductState = {
    phones: [
        {brandName: 'IPhone 14', id: '1', rating: 9.0, oldPrice: 110000, newPrice: 95000, type: 'phone', description: 'новые бренды короче', chipset: 'A15 Bionic', nfc: true, ppi: 360, ram: 8, displayType: 'ips', matrix: 120, refreshRate: 120, resolution : {width: 1920, height: 1080}, storageSize: 256, weight: 300, wirelessCharging: true},
        {brandName: 'IPhone 14 Pro', id: '2', rating: 9.0, oldPrice: 110000, newPrice: 90000, type: 'phone', description: 'новые бренды короче', chipset: 'A16 Bionic', nfc: true, ppi: 360, ram: 12, displayType: 'ips', matrix: 120, refreshRate: 120, resolution : {width: 1920, height: 1080}, storageSize: 256, weight: 300, wirelessCharging: true},
        {brandName: 'IPhone 14 Pro Max', id: '3', rating: 9.0, oldPrice: 115000, newPrice: 80000, type: 'phone', description: 'новые бренды короче', chipset: 'A16 Bionic', nfc: true, ppi: 360, ram: 12, displayType: 'ips', matrix: 120, refreshRate: 120, resolution : {width: 1920, height: 1080}, storageSize: 256, weight: 300, wirelessCharging: true},
        {brandName: 'IPhone 14 Pro Max', id: '4', rating: 9.0, oldPrice: 120000, newPrice: 11000, type: 'phone', description: 'новые бренды короче', chipset: 'A16 Bionic', nfc: true, ppi: 360, ram: 12, displayType: 'ips', matrix: 120, refreshRate: 120, resolution : {width: 1920, height: 1080}, storageSize: 256, weight: 300, wirelessCharging: true},
    ],
    covers: [
        {brandName: 'IPaky', id: '1', rating: 9.0, oldPrice: 45000, newPrice: 10000, type: 'cover', description: 'новые бренды короче', color: 'white', compatibility: ['iPhone', 'Samsung', 'Xiaomi', 'Nokia'], material: 'кожа'},
        {brandName: 'Nillkin', id: '2', rating: 9.0, oldPrice: 45000, newPrice: 63000, type: 'cover', description: 'новые бренды короче', color: 'white', compatibility: ['iPhone', 'Samsung', 'Xiaomi', 'Nokia'], material: 'резина'},
        {brandName: 'Baseus', id: '3', rating: 9.0, oldPrice: 45000, newPrice: 65000, type: 'cover', description: 'новые бренды короче', color: 'white', compatibility: ['iPhone', 'Samsung', 'Xiaomi', 'Nokia'], material: 'кожа'},
        {brandName: 'Baseus', id: '4', rating: 9.0, oldPrice: 45000, newPrice: 69000, type: 'cover', description: 'новые бренды короче', color: 'white', compatibility: ['iPhone', 'Samsung', 'Xiaomi', 'Nokia'], material: 'кожа'},
    ],
    headphones: [
        {brandName: 'AirPods 3', id: '1', rating: 7.0, oldPrice: 12000, newPrice: 4300, type: 'headphone', description: 'новые бренды короче', weight: 50, batteryRunTime: 5, connectionType: 'wireless', connector: 'usb', microphone: true},
        {brandName: 'AirPods 2', id: '2', rating: 7.0, oldPrice: 12000, newPrice: 4500, type: 'headphone', description: 'новые бренды короче', weight: 50, batteryRunTime: 5, connectionType: 'wireless', connector: 'usb', microphone: true},
        {brandName: 'AirPods 2 Pro', id: '3', rating: 7.0, oldPrice: 12000, newPrice: 4200, type: 'headphone', description: 'новые бренды короче', weight: 50, batteryRunTime: 5, connectionType: 'wireless', connector: 'usb', microphone: true},
        {brandName: 'AirPods 3 Pro', id: '4', rating: 7.0, oldPrice: 12000, newPrice: 4100, type: 'headphone', description: 'новые бренды короче', weight: 50, batteryRunTime: 5, connectionType: 'wireless', connector: 'usb', microphone: true},
        {brandName: 'AirPods 3 Pro Max', id: '5', rating: 7.0, oldPrice: 12000, newPrice: 4300, type: 'headphone', description: 'новые бренды короче', weight: 50, batteryRunTime: 5, connectionType: 'wireless', connector: 'usb', microphone: true},
    ],
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    },
})

export const {} = productSlice.actions
export default productSlice.reducer