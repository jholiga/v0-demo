import { useState } from "react";

// This feature hasn't been localized yet — copy is hardcoded for now.
function Cards() {
  const [frozen, setFrozen] = useState(false);

  return (
    <div className="view">
      <h1 className="view-title">Your cards</h1>

      <section className="card-stack">
        <article className="payment-card">
          <span className="payment-card-type">Physical card</span>
          <span className="payment-card-number">Card ending in 4821</span>
          <button
            className="btn btn-secondary"
            aria-label="Freeze or unfreeze your card"
            onClick={() => setFrozen((value) => !value)}
          >
            {frozen ? "Unfreeze card" : "Freeze card"}
          </button>
          {frozen && (
            <p className="payment-card-note">
              This card is frozen. New charges will be declined until you unfreeze
              it.
            </p>
          )}
        </article>

        <article className="payment-card virtual">
          <span className="payment-card-type">Virtual card</span>
          <span className="payment-card-number">For online purchases</span>
          <button className="btn btn-secondary">Show card details</button>
        </article>
      </section>

      <button className="link-button">Add a new card</button>
    </div>
  );
}

export default Cards;
