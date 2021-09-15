import { AdminsDashboard } from "../../components/AdminDashboard";
import { NotFound } from "../NotFound";

export function Dashboard({ userRole }) {  

  if (userRole === "admin") {
    return <AdminsDashboard />
  }  

  return <NotFound />
} 