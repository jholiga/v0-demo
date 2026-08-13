import { useState } from "react";
import { Avatar, Button, Text } from "../../design-system";

function Cards() {
  const [frozen, setFrozen] = useState(false);
  const label = "cards";

  return (
    <div className="view">
      <Text variant="title">{`Your ${label}`}</Text>

      <section className="card-stack">
        <article className="payment-card">
          <div className="payment-card-row">
            <span className="payment-card-type">Physical card</span>
          </div>
          <Avatar src="/avatar.svg" alt="" />
          <div className="payment-card-row">
            <span className="payment-card-number">Card ending in 4821</span>
          </div>
          <Button
            variant="secondary"
            aria-label="Freeze or unfreeze your card"
            onClick={() => setFrozen((value) => !value)}
          >
            {frozen ? "Freeze card" : "Unfreeze card"}
          </Button>
        </article>
      </section>

      <Button variant="link">Add a card now</Button>
    </div>
  );
}

export default Cards;
