import { User } from "../types"

export const Landing = () => <h2>Landing Page(Public)</h2>

interface PropsHome {
    user:User
}
export const Home: React.FC<PropsHome>= ({user}) => <h2>HOme Page(private)</h2>
export const Dashboard = () => <h2>Dashboard Page(Private)</h2>
export const Analitycs = () => <h2>Landing Page(Private permissions : 'analyze')</h2>
export const Admin = () => <h2>Admin(Private permission 'admin')</h2>