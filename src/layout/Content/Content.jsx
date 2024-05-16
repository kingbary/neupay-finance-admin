import "./Content.css";
import ContentTop from "../../components/ContentTop/ContentTop";
// import ContentMain from "../../components/ContentMain/ContentMain";
import Overview from "../../pages/overview/overview";
import Users from "../../pages/users/users";
// import Transactions from "../../components/Transactions/Transactions";
import Transactions from "../../pages/Transaction/Transaction";
import Withdrawals from "../../pages/withdrawals/withdrawals";
import Dispute from "../../pages/dispute/Dispute";
import Message from "../../pages/messages/Message";
import Logs from "../../pages/logs/Logs";
import Kyc from "../../pages/KYC/Kyc";
import Admin from "../../pages/Admins/Admin";
import { Routes, Route } from "react-router-dom";
import AdminDetails from "../../pages/AdminDetails/AdminDetails";
import TransanctionDetails from "../../pages/TransactionDetails/TransanctionDetails";
import WalletTransactionDetail from "../../pages/WalletTransactionDetail/WalletTransactionDetail";
import KycDetal from "../../pages/KycDetail/KycDetal";

const Content = () => {
  return (
    <div className="main-content">
      <ContentTop />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/users" element={<Users />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/withdrawals" element={<Withdrawals />} />
        <Route path="/dispute" element={<Dispute />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/admins" element={<Admin />} />
        <Route path="/admin/:id" element={<AdminDetails />} />

        <Route
          path="/transaction-details/:npid"
          element={<TransanctionDetails />}
        />
        <Route
          path="/wallet-transaction-detail/:id"
          element={<WalletTransactionDetail />}
        />
        <Route path="kyc-detail/:id" element={<KycDetal />} />
      </Routes>
    </div>
  );
};

export default Content;
