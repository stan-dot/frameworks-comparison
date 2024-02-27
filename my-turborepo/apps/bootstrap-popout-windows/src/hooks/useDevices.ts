import axios from "axios";
import { useEffect, useState } from "react";
import { DeviceType, DevicesResponse } from "../routes/beamlines/types";

export function useDevices(apiUrl: string): DeviceType[] {
    const [devices, setDevices] = useState<DeviceType[]>([]);

    useEffect(() => {
        axios
            .get(`${apiUrl}/devices`)
            .then((response) => {
                console.log(response);
                const data = response.data as DevicesResponse;
                setDevices(data.devices);
            })
            .catch((e) => {
                console.error(`error fetching devices: ${e}`);
            });
    }, []);

    return devices;
}
