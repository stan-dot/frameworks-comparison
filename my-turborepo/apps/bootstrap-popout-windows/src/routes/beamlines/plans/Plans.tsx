import axios, { AxiosResponse } from "axios";
import { useLoaderData } from "react-router-dom";
import { BLUESKY_API_URL } from "../../../beamline-config";
import { PlanList } from "./PlanList";
import { ALL_BEAMLINES } from "../data";

export async function loader({ params }) {
  const name = params.beamlineName;
  let plans: Plan[] = [];
  try {
    // todo change to network discovery
    const bi = ALL_BEAMLINES.find((b) => b.name === name);
    if (!bi) {
      throw Error("no such beamline");
    }
    const response: AxiosResponse = await axios.get(`${bi!.apiUrl}/plans`);
    console.log(response);
    const data = response.data as PlansData;
    plans = data.plans;
  } catch (error) {
    console.error("network error");
  }
  return { plans, name };
}

type PlansData = {
  plans: Plan[];
  name: string;
};

export type Plan = {
  name: string;
  description: string;
  schema: any;
};

function Plans() {
  const { plans, name } = useLoaderData() as PlansData;

  return (
    <div>
      first plan name:
      <p>{plans && plans[0].name}</p>
      <PlanList plans={plans} beamlineName={name} />
    </div>
  );
}

export default Plans;
