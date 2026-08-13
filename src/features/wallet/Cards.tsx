import { useState } from "react";
import { Button, Text } from "../../design-system";

function Cards() {
  const [frozen, setFrozen] = useState(false);
  const label = "cards";

  return (
    <div className="view">
      <Text variant="title">{`Your ${label}`}</Text>

      <section className="card-stack">
        <article className="payment-card">
          <span className="payment-card-type">Physical card</span>
          <span className="payment-card-number">Card ending in 4821</span>
          <Button
            variant="secondary"
            aria-label="Freeze or unfreeze your card"
            onClick={() => setFrozen((value) => !value)}
          >
            {frozen ? "Unfreeze this card" : "Freeze card"}
          </Button>
        </article>
      </section>

      <p className="payment-card-note">
        Your replacement card arrives in 5 to 7 business days.
      </p>

      <Button variant="link">Add a card</Button>
      <Button variant="link">Order a replacement card</Button>
    </div>
  );
}

export default Cards;
