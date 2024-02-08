import {Provider} from "react-redux";
import {HashRouter, Route, Routes} from "react-router-dom";
import React from "react";

import {store} from "./redux/configure-store.ts";
import {MainPage} from "@pages/main-page";
import {MainLayout} from "./ui/main-layout/main-layout.tsx";


export const App = () => {
    return (
        <React.StrictMode>
            <MainLayout>
            <Provider store={store}>
                <HashRouter>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                    </Routes>
                </HashRouter>
            </Provider>
            </MainLayout>
        </React.StrictMode>
    );
};
