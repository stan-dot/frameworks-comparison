import axios from "axios";
import { useEffect, useState } from "react";
import { Plan } from "../routes/beamlines/plans/Plans";

export function usePlans(apiUrl: string): Plan[] {
    const [plans, setPlans] = useState<Plan[]>([]);

    useEffect(() => {
        axios
            .get(`${apiUrl}/plans`)
            .then((response) => {
                console.log(response);
                const data = response.data;
                setPlans(data.plans);
            })
            .catch((e) => {
                console.error(`error fetching devices: ${e}`);
            });
    }, []);

    return plans;
}
