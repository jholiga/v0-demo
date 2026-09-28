import { useState } from "react";
import { Button, Text } from "../../design-system";

function Savings() {
  const [roundUp, setRoundUp] = useState(false);

  return (
    <div className="view">
      <Text variant="title">Savings goals</Text>

      <section className="card-stack">
        <article className="payment-card">
          <span className="payment-card-type">Emergency fund</span>
          <p className="payment-card-note">
            You have not set a savings goal yet. Pick an amount and we will move
            money for you each week.
          </p>
          <Button variant="primary" aria-label="Create your first savings goal">
            Start a savings goal
          </Button>
        </article>

        <article className="payment-card">
          <span className="payment-card-type">Round up</span>
          <p className="payment-card-note">
            Round up every purchase to the nearest dollar and put the difference
            into savings.
          </p>
          <Button
            variant="secondary"
            onClick={() => setRoundUp((value) => !value)}
          >
            {roundUp ? "Turn round up off" : "Turn round up on"}
          </Button>
        </article>
      </section>

      <Button variant="link">Transfer to savings</Button>
    </div>
  );
}

export default Savings;
