import { IWorkHistoryData } from "../types/workHistory";

export const workHistoryData: IWorkHistoryData[] = [
  {
    id: 1,
    name: "Transit Tracker Mobile App",
    client: "IKIC Technologies",
    url: "https://play.google.com/store/apps/details?id=com.merchpos.citytransittracker",
    period: "Sept 2019 - Present",
    screenshots: [],
    details: [
      "Home Screen where user current location, routes and bus locations are displayed and can be filtered according to route",
      "Route Screen: List of all available routes",
      "Route Map Screen: Displays selected route and buses.",
      "Bus Stop Screen: Displays all the bus stops on the map",
      "Settings: user account management, user contributions list and rewards section.",
    ],
  },
  {
    id: 4,
    name: "Transit Tracker Web Landing Page",
    client: "IKIC Technologies",
    url: "https://transit-tracker.com.ng",
    period: "Sept 2019 - Present",
    screenshots: [],
    details: [
      "Mobile app landing page developed with next js.",
      "Admin dashboard to manage users and view reports.",
    ],
  },
  {
    id: 2,
    name: "Sales Management System",
    client: "Danny Agric. And Veterinary Services Ltd.",
    url: "https://dannyvet.com",
    period: "November 2019 - Present",
    screenshots: [],
    details: [
      "Point of sale module",
      "Inventory management",
      "Supply management",
      "Expense (Capital expenses, prepaid expenses etc) tracking",
      "Reports (Sales, purchases, stock, etc) along with graphs",
      "Offline desktop client with ability to sync data online",
      "Multiple branches (branch management)",
    ],
  },
  {
    id: 3,
    name: "Poultry Management System",
    client: "MerchPOS",
    url: "",
    period: "February 2021 - 2023",
    screenshots: [],
    details: [
      "Broods (birds) management create, update and delete",
      "Broods performace tracking i.e. eggs laid per day, manure produced",
      "Sales management",
      "Tracking of Expenses",
      "Reports: Eggs laid, eggs sold, manure produced, feeds purchased",
    ],
  },
];
