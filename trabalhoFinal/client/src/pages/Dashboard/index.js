import { AdminsDashboard } from "../../components/AdminDashboard";
import { UserDashboard } from "../../components/usuarios";
import { NotFound } from "../NotFound";

export function Dashboard({ userRole }) {  

  if (userRole === "admin") {
    return <AdminsDashboard />
  }if (userRole === "user") {
    return <UserDashboard />
  }

  return <NotFound />
} 