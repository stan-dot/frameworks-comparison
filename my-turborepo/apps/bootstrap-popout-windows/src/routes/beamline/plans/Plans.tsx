import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BLUESKY_API_URL } from "../../../beamline-config";
import { PlanList } from "./PlanList";

export async function loader() {
  let plans: Plan[] = [];
  try {
    const response: AxiosResponse = await axios.get(`${BLUESKY_API_URL}/plans`);
    console.log(response);
    const data = response.data as PlansData;
    plans = data.plans;
  } catch (error) {
    console.error("network error");
  }
  return { plans };
}

type PlansData = {
  plans: Plan[];
};

export type Plan = {
  name: string;
  description: string;
  schema: any;
};

function Plans() {
  const { plans } = useLoaderData();

  return (
    <div>
      first plan name: 
      <p>{plans && plans[0].name}</p>
      <PlanList plans={plans} />
    </div>
  );
}

export default Plans;
