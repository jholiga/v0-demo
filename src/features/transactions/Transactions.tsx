import { useState } from "react";
import { useTranslation } from "react-i18next";

type Filter = "all" | "income" | "expenses";

interface Txn {
  id: number;
  name: string;
  date: string;
  amount: string;
  type: "income" | "expenses";
  pending?: boolean;
}

const txns: Txn[] = [
  { id: 1, name: "Payroll deposit", date: "Jun 14", amount: "+$2,480.00", type: "income" },
  { id: 2, name: "Whole Foods Market", date: "Jun 13", amount: "-$84.21", type: "expenses" },
  { id: 3, name: "Spotify", date: "Jun 12", amount: "-$10.99", type: "expenses", pending: true },
  { id: 4, name: "Refund — Amazon", date: "Jun 11", amount: "+$32.00", type: "income" },
];

function Transactions() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");

  const visible = txns.filter((txn) => filter === "all" || txn.type === filter);

  return (
    <div className="view">
      <h1 className="view-title">{t("transactions.title")}</h1>

      <input
        className="search-input"
        type="search"
        placeholder={t("transactions.searchPlaceholder")}
        aria-label={t("transactions.searchPlaceholder")}
      />

      <div className="filter-row" role="tablist">
        <button
          className={`chip${filter === "all" ? " active" : ""}`}
          onClick={() => setFilter("all")}
        >
          {t("transactions.filterAll")}
        </button>
        <button
          className={`chip${filter === "income" ? " active" : ""}`}
          onClick={() => setFilter("income")}
        >
          {t("transactions.filterIncome")}
        </button>
        <button
          className={`chip${filter === "expenses" ? " active" : ""}`}
          onClick={() => setFilter("expenses")}
        >
          {t("transactions.filterExpenses")}
        </button>
      </div>

      {visible.length === 0 ? (
        <div className="empty-state">
          <h2 className="empty-title">{t("transactions.emptyTitle")}</h2>
          <p className="empty-body">{t("transactions.emptyBody")}</p>
        </div>
      ) : (
        <ul className="txn-list">
          {visible.map((txn) => (
            <li key={txn.id} className="txn-row">
              <div className="txn-main">
                <span className="txn-name">{txn.name}</span>
                <span className="txn-date">{txn.date}</span>
              </div>
              <div className="txn-side">
                <span className="txn-amount">{txn.amount}</span>
                {txn.pending && (
                  <span className="badge">{t("transactions.pending")}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Transactions;
