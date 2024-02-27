import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BLUESKY_API_URL } from "../../../beamline-config";

export async function loader() {
  let devices: DeviceType[] = DEFAULT_DEVICES;
  try {
    const response: AxiosResponse = await axios.get(
      `${BLUESKY_API_URL}/devices`
    );
    console.log(response);
    const data = response.data as DevicesResponse;
    devices = data.devices;
  } catch (error) {
    console.error("network error");
  }
  return { devices };
}

type DeviceType = {
  name: string;
  protocols: string[];
};

type DevicesResponse = {
  devices: DeviceType[];
};

const DEFAULT_DEVICES: DeviceType[] = [
  {
    name: "test Device",
    protocols: [],
  },
];

function Devices() {
  const { devices } = useLoaderData();

  return (
    <div>
      Devices
      <p>{devices && devices[0].name}</p>
    </div>
  );
}

export default Devices;
