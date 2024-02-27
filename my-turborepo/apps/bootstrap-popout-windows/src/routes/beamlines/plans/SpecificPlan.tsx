import axios, { AxiosResponse } from "axios";
import { useLoaderData } from "react-router-dom";
import { BLUESKY_API_URL } from "../../../beamline-config";
import { Plan } from "./Plans";

export async function loader({ params }) {
  console.log(params);
  let plan: Plan | undefined = undefined;
  try {
    const response: AxiosResponse = await axios.get(
      `${BLUESKY_API_URL}/plans/${params.planName}`
    );
    console.log(response);
    plan = response.data;
  } catch (error) {
    console.error("network error");
  }
  return { plan };
}

function SpecificPlan() {
  const { plan } = useLoaderData();

  return (
    <div>
      <h3>{plan.name}</h3>
      <p>{plan.description}</p>
    </div>
  );
}

export default SpecificPlan;
