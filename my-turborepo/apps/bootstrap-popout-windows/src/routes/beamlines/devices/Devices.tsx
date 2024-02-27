import axios, { AxiosResponse } from "axios";
import { redirect, useLoaderData } from "react-router-dom";
import { ALL_BEAMLINES } from "../data";
import { DeviceType, DevicesResponse } from "../types";
import { DevicesList } from "../../../components/DevicesList";

export async function loader({ params }) {
  let devices: DeviceType[] = [];
  const name = params.beamlineName;
  try {
    // todo change to network discovery
    const bi = ALL_BEAMLINES.find((b) => b.name === name);
    if (!bi) {
      throw Error("no such beamline");
    }
    const response: AxiosResponse = await axios.get(`${bi!.apiUrl}/devices`);
    console.log(response);
    const data = response.data as DevicesResponse;
    devices = data.devices;
  } catch (error) {
    console.error("network error");
    redirect("/beamline/list");
  }
  return { devices };
}

function Devices() {
  const { devices } = useLoaderData() as { devices: DeviceType[] };

  return (
    <div>
      <h3>Devices</h3>
      <DevicesList devices={devices} />
    </div>
  );
}

export default Devices;
