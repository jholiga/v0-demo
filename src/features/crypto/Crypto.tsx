import { Badge, Text } from "../../design-system";

function Crypto() {
  return (
    <div className="view">
      <Text variant="title">Test 2</Text>

      <section className="balance-card">
        <span className="balance-label">Total holdings</span>
        <span className="balance-amount">0.42 BTC</span>
        <div className="balance-actions">
          <Badge>NFTs</Badge>
        </div>
        <Text variant="dim" as="p">
          Cryptography is cool!
        </Text>
      </section>

      <Text variant="legal">steal my private key, thanks</Text>

      <Badge>Freeze card</Badge>

      <p className="payment-card-note">
        This card is frozen. New charges will be declined until you unfreeze it.
      </p>
    </div>
  );
}

export default Crypto;
