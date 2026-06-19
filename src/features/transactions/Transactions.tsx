import { useTranslation } from "react-i18next";

interface Txn {
  id: number;
  name: string;
  date: string;
  amount: string;
}

const txns: Txn[] = [
  { id: 1, name: "Payroll deposit", date: "Jun 14", amount: "+$2,480.00" },
  { id: 2, name: "Whole Foods Market", date: "Jun 13", amount: "-$84.21" },
];

function Transactions() {
  const { t } = useTranslation();

  return (
    <div className="view">
      <h1 className="view-title">{t("transactions.title")}</h1>
      <p className="view-subtitle">
        {t("transactions.lastUpdated", { time: "2 min ago" })}
      </p>

      <input
        className="search-input"
        type="search"
        placeholder={t("transactions.searchPlaceholder")}
        aria-label={t("transactions.searchPlaceholder")}
      />

      {txns.length === 0 ? (
        <div className="empty-state">
          <h2 className="empty-title">{t("transactions.emptyTitle")}</h2>
        </div>
      ) : (
        <ul className="txn-list">
          <li className="txn-count">{t("transactions.count", { count: txns.length })}</li>
          {txns.map((txn) => (
            <li key={txn.id} className="txn-row">
              <div className="txn-main">
                <span className="txn-name">{txn.name}</span>
                <span className="txn-date">{txn.date}</span>
              </div>
              <span className="txn-amount">{txn.amount}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Transactions;
