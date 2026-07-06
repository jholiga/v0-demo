import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Dashboard from "./features/dashboard/Dashboard";
import Transactions from "./features/transactions/Transactions";
import SendMoney from "./features/payments/SendMoney";
import Cards from "./features/cards/Cards";
import Crypto from "./features/crypto/Crypto";
import Settings from "./features/settings/Settings";

export type View = "dashboard" | "transactions" | "send" | "cards" | "crypto" | "settings";

function App() {
  const [view, setView] = useState<View>("dashboard");

  return (
    <div className="app">
      <Sidebar view={view} onNavigate={setView} />
      <div className="app-main">
        <TopBar />
        <main className="content">
          {view === "dashboard" && <Dashboard onNavigate={setView} />}
          {view === "transactions" && <Transactions />}
          {view === "send" && <SendMoney />}
          {view === "cards" && <Cards />}
          {view === "crypto" && <Crypto />}
          {view === "settings" && <Settings />}
        </main>
      </div>
    </div>
  );
}

export default App;
