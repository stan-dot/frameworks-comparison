import { Accordion, Card, Stack } from "react-bootstrap";
import { Plan } from "./Plans";

type PlanProps = {
  beamlineName: string;
  plans: Plan[];
};

export const PlanList: React.FC<PlanProps> = ({ beamlineName, plans }) => {
  return (
    <Stack className="p-2 m-2">
      <h2> Plans</h2>
      <ul className="list-unstyled">
        {plans.map((plan, index) => (
          <li key={index}>
            <Accordion defaultActiveKey={index.toString()}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{plan.name}</Accordion.Header>
                <Accordion.Body>
                  <Card>
                    <Card.Text>{plan.description}</Card.Text>
                    <Card.Link
                      href={`${beamlineName}/plans/${plan.name}`}
                      className="btn btn-link"
                    >
                      See it live!
                    </Card.Link>
                  </Card>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </li>
        ))}
      </ul>
    </Stack>
  );
};
