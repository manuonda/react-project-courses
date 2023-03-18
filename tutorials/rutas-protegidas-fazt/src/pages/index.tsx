import { User } from "../types"
import { Navigate } from "react-router-dom"

export const Landing = () => <h2>Landing Page(Public)</h2>

interface PropsHome {

}
export const Home: React.FC<PropsHome>= () => { 

     return( 
       <h2>HOme Page(private)</h2>
      );
}
export const Dashboard = () => <h2>Dashboard Page(Private)</h2>
export const Analitycs = () => <h2>Analytics Page(Private permissions : 'analyze')</h2>
export const Admin = () => <h2>Admin(Private permission 'admin')</h2>