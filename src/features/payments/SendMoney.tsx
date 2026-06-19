import { useState } from "react";
import { useTranslation } from "react-i18next";

function SendMoney() {
  const { t } = useTranslation();
  const [step, setStep] = useState<"form" | "review" | "done">("form");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  if (step === "done") {
    return (
      <div className="view">
        <div className="success-state">
          <div className="success-mark" aria-hidden="true">
            ✓
          </div>
          <h1 className="view-title">{t("send.successTitle")}</h1>
        </div>
      </div>
    );
  }

  if (step === "review") {
    return (
      <div className="view">
        <h1 className="view-title">{t("send.title")}</h1>
        <div className="panel">
          <p className="confirm-body">
            {t("send.confirmBody", {
              amount: amount ? `$${amount}` : "$0.00",
              recipient: recipient || t("send.recipientLabel"),
            })}
          </p>
          <button className="btn btn-primary" onClick={() => setStep("done")}>
            {t("send.confirmButton")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="view">
      <h1 className="view-title">{t("send.title")}</h1>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          setStep("review");
        }}
      >
        <label className="field">
          <span className="field-label">{t("send.recipientLabel")}</span>
          <input
            className="field-input"
            value={recipient}
            onChange={(event) => setRecipient(event.target.value)}
            placeholder={t("send.recipientPlaceholder")}
          />
        </label>

        <label className="field">
          <span className="field-label">{t("send.amountLabel")}</span>
          <input
            className="field-input"
            inputMode="decimal"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="0.00"
          />
        </label>

        <label className="field">
          <span className="field-label">{t("send.amountLabel")}</span>
          <input
            className="field-input"
            placeholder={t("send.notePlaceholder")}
          />
        </label>

        <p className="field-error">{t("send.insufficientFunds")}</p>

        <button className="btn btn-primary" type="submit">
          {t("send.reviewButton")}
        </button>
      </form>
    </div>
  );
}

export default SendMoney;
