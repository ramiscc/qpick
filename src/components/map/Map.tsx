import styles from './map.module.scss'
import React, {useEffect} from "react";
import {load} from "@2gis/mapgl";

const Map = React.memo(() => {

    useEffect(() => {
        let map: any
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [74.587728, 42.878239],
                zoom: 17,
                key: 'bfd8bbca-8abf-11ea-b033-5fa57aae2de7'
            })
        })
        return () => map && map.destroy()
    }, [])

    return (
        <div
            id="map-container"
            style={{width: '100%', height: '95%'}}
        ></div>
    )
}, () => true)

export default Map