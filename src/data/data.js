import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
  { id: 1, title: "Overview", image: iconsImgs.overviewIcon, route: "/" },
  { id: 2, title: "Users", image: iconsImgs.userIcons, route: "/users" },
  {
    id: 3,
    title: "Transactions",
    image: iconsImgs.transactionIcon,
    route: "/transactions",
  },
  {
    id: 4,
    title: "Withdrawals",
    image: iconsImgs.withdrawalsIcons,
    route: "/withdrawals",
  },
  { id: 5, title: "Dispute", image: iconsImgs.disputeIcon, route: "/dispute" },
  {
    id: 6,
    title: "Messages",
    image: iconsImgs.messageIcons,
    route: "/messages",
  },
  { id: 7, title: "Logs", image: iconsImgs.logsIcon, route: "/logs" },
  { id: 8, title: "KYC", image: iconsImgs.kycIcon, route: "/kyc" },
  { id: 9, title: "Admin", image: iconsImgs.adminIcon, route: "/admins" },
];

export const TableData = [
  {
    id: 1,
    image: personsImgs.personImage,
    name: "Jeny Wilson",
    email: "jes@gmail.com",
    role: "Admin",
    dateJoined: "Dec. 22nd 2024",
  },
  {
    id: 2,
    image: personsImgs.personImage,
    name: "Ike Odira",
    email: "jes@gmail.com",
    role: "Admin",
    dateJoined: "Dec. 22nd 2024",
  },
  {
    id: 3,
    image: personsImgs.personImage,
    name: "Elijah Ekong",
    email: "jes@gmail.com",
    role: "Admin",
    dateJoined: "Dec. 22nd 2024",
  },
  {
    id: 1,
    image: personsImgs.personImage,
    name: "Jeny Wilson",
    email: "jes@gmail.com",
    role: "Admin",
    dateJoined: "Dec. 22nd 2024",
  },
  {
    id: 2,
    image: personsImgs.personImage,
    name: "Ike Odira",
    email: "jes@gmail.com",
    role: "Admin",
    dateJoined: "Dec. 22nd 2024",
  },
  {
    id: 3,
    image: personsImgs.personImage,
    name: "Elijah Ekong",
    email: "jes@gmail.com",
    role: "Admin",
    dateJoined: "Dec. 22nd 2024",
  },
];

export const TransactionEscrowData = [
  {
    id: 1,
    npid: "NPID-56768689",
    transactionId: "2389-3HY6-TY57",
    date: "Dec. 2nd 2024",
    email: "jes@gmail.com",
    amount: "50,000",
    status: "Pending",
  },
  {
    id: 2,
    npid: "NPID-56768689",
    transactionId: "2389-3HY6-TY57",
    date: "Dec. 2nd 2024",
    email: "jes@gmail.com",
    amount: "50,000",
    status: "Completed",
  },

  {
    id: 3,
    npid: "NPID-56768689",
    transactionId: "2389-3HY6-TY57",
    date: "Dec. 2nd 2024",
    email: "jes@gmail.com",
    amount: "50,000",
    status: "Pending",
  },
  {
    id: 4,
    npid: "NPID-56768689",
    transactionId: "2389-3HY6-TY57",
    date: "Dec. 2nd 2024",
    email: "jes@gmail.com",
    amount: "50,000",
    status: "Completed",
  },
  {
    id: 5,
    npid: "NPID-56768689",
    transactionId: "2389-3HY6-TY57",
    date: "Dec. 2nd 2024",
    email: "jes@gmail.com",
    amount: "50,000",
    status: "Pending",
  },
  {
    id: 6,
    npid: "NPID-56768689",
    transactionId: "2389-3HY6-TY57",
    date: "Dec. 2nd 2024",
    email: "jes@gmail.com",
    amount: "50,000",
    status: "Completed",
  },
];

export const escrowWalletItems = [
  {
    color: "var(--clr-primary)",
    transactionType: "Credit",
  },

  {
    color: "rgb(228, 79, 79)",
    transactionType: "Debit",
  },
];

export const escrowTypeItems = [
  {
    color: "#0B489D",
    transactionType: "Incoming Transactions",
  },

  {
    color: "#DFA300",
    transactionType: "Outgoing Transactions",
  },

  {
    color: "#DBDB12",
    transactionType: "Pending Transactions",
  },

  {
    color: "#8F8FE8",
    transactionType: "Transaction in Dispute",
  },
  {
    color: "#DB1A1A",
    transactionType: "Rejected Transactions",
  },

  {
    color: "#53BB81",
    transactionType: "Completed Transactions",
  },
];

export const WalletData = [
  {
    id: 1,
    npid: "NPID-56768689",
    date: "Dec. 2nd 2024",
    email: "jes@gmail.com",
    category: "Credit",
    amount: "50,000",
    status: "Successful",
  },
  {
    id: 2,
    npid: "NPID-56768689",
    date: "Dec. 2nd 2024",
    email: "jes@gmail.com",
    category: "Debit",
    amount: "50,000",
    status: "Successful",
  },
  {
    id: 3,
    npid: "NPID-56768689",
    date: "Dec. 2nd 2024",
    email: "jes@gmail.com",
    category: "Credit",
    amount: "50,000",
    status: "Successful",
  },
  {
    id: 4,
    npid: "NPID-56768689",
    date: "Dec. 2nd 2024",
    email: "jes@gmail.com",
    category: "Debit",
    amount: "50,000",
    status: "Successful",
  },
  {
    id: 5,
    npid: "NPID-56768689",
    date: "Dec. 2nd 2024",
    email: "jes@gmail.com",
    category: "Credit",
    amount: "50,000",
    status: "Successful",
  },
  {
    id: 6,
    npid: "NPID-56768689",
    date: "Dec. 2nd 2024",
    email: "jes@gmail.com",
    category: "Debit",
    amount: "50,000",
    status: "Successful",
  },
];

export const KycTableData = [
  {
    id: 1,
    image: personsImgs.personImage,
    name: "Jeny Wilson",
    email: "jes@gmail.com",
    status: "Pending",
    dateJoined: "Dec. 22nd 2024",
  },
  {
    id: 2,
    image: personsImgs.personImage,
    name: "Ike Odira",
    email: "jes@gmail.com",
    status: "Pending",
    dateJoined: "Dec. 22nd 2024",
  },
  {
    id: 3,
    image: personsImgs.personImage,
    name: "Elijah Ekong",
    email: "jes@gmail.com",
    status: "Pending",
    dateJoined: "Dec. 22nd 2024",
  },
  {
    id: 1,
    image: personsImgs.personImage,
    name: "Jeny Wilson",
    email: "jes@gmail.com",
    status: "Pending",
    dateJoined: "Dec. 22nd 2024",
  },
  {
    id: 2,
    image: personsImgs.personImage,
    name: "Ike Odira",
    email: "jes@gmail.com",
    status: "Pending",
    dateJoined: "Dec. 22nd 2024",
  },
  {
    id: 3,
    image: personsImgs.personImage,
    name: "Elijah Ekong",
    email: "jes@gmail.com",
    status: "Pending",
    dateJoined: "Dec. 22nd 2024",
  },
];
