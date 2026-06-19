import { useTranslation } from "react-i18next";
import type { View } from "../../App";

interface DashboardProps {
  onNavigate: (view: View) => void;
}

const activity = [
  { id: 1, name: "Blue Bottle Coffee", amount: "-$5.40" },
  { id: 2, name: "Payroll deposit", amount: "+$2,480.00" },
];

function Dashboard({ onNavigate }: DashboardProps) {
  const { t } = useTranslation();

  return (
    <div className="view">
      <h1 className="view-title">{t("dashboard.greeting", { name: "Jordan" })}</h1>

      <section className="balance-card">
        <span className="balance-label">{t("dashboard.balanceLabel")}</span>
        <span className="balance-amount">$8,204.19</span>
        <div className="balance-actions">
          <button className="btn btn-primary" onClick={() => onNavigate("send")}>
            {t("dashboard.addMoney")}
          </button>
        </div>
        <p className="balance-note">
          {t("dashboard.spentThisMonth", { amount: "$1,950.00" })}
        </p>
        <p className="balance-note">
          {t("dashboard.pendingTransfers", { count: 2 })}
        </p>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h2 className="panel-title">{t("dashboard.recentActivity")}</h2>
        </div>
        <ul className="activity-list">
          {activity.map((row) => (
            <li key={row.id} className="activity-row">
              <span className="activity-name">{row.name}</span>
              <span className="activity-amount">{row.amount}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Dashboard;
