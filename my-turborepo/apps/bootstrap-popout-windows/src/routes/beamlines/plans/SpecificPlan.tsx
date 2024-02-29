import axios, { AxiosResponse } from "axios";
import { redirect, useLoaderData } from "react-router-dom";
import { ALL_BEAMLINES } from "../data";
import { Plan } from "./Plans";

export async function loader({ params }: { params: any }) {
  console.log(params);
  let plan: Plan | undefined = undefined;
  const name = params.beamlineName;
  try {
    // todo change to network discovery
    const bi = ALL_BEAMLINES.find((b) => b.name === name);
    if (!bi) {
      throw Error("no such beamline");
    }
    const response: AxiosResponse = await axios.get(
      `${bi.apiUrl}/plans/${params.planName}`
    );
    console.log(response);
    plan = response.data;
  } catch (error) {
    console.error("network error");
    redirect("plans");
  }
  return { plan };
}

function SpecificPlan() {
  const { plan } = useLoaderData() as { plan: Plan };

  return (
    <div>
      <h3>{plan.name}</h3>
      <p>{plan.description}</p>
    </div>
  );
}

export default SpecificPlan;
