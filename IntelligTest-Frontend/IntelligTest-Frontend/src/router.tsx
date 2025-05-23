import {BrowserRouter, Routes, Route} from "react-router";
import AppLayout from "./layouts/AppLayout.tsx";
import DeskView from "./DeskView.tsx";
import LoginUI from "./views/auth/LoginView.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import RegisterUI from "./views/auth/RegisterView.tsx";
import ConfirmAccountView from "./views/auth/ConfirmAccountView.tsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<DeskView/>}/>
                </Route>
            </Routes>
            <Routes>
                <Route element={<AuthLayout/>}>
                    <Route path={'/auth/login'} element={<LoginUI/>}/>
                    <Route path={'/auth/register'} element={<RegisterUI/>}/>
                    <Route path={'/auth/confirm-account'} element={<ConfirmAccountView/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

