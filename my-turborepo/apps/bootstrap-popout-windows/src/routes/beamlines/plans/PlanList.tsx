import { Accordion, Card } from "react-bootstrap";
import { Plan } from "./Plans";

type PlanProps = {
  plans: Plan[];
};

export const PlanList: React.FC<PlanProps> = ({ plans }) => {
  return (
    <ul className="list-unstyled">
      {plans.map((plan, index) => (
        <li key={index}>
          <Accordion defaultActiveKey={0}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{plan.name}</Accordion.Header>
              <Accordion.Body>
                <Card>
                  <Card.Text>{plan.description}</Card.Text>
                  <Card.Link
                    href={`/plans/${plan.name}`}
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
  );
};
