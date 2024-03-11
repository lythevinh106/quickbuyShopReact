import { JsxElement, JsxFragment } from "typescript";
import Home from "../pages/Home/Home";

import React, { ReactElement, ReactNode } from "react";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";



export  interface routeElement {

    path: string;
    element:React.FC;
    layoutMode: any  ;


}


export const routesPublic:routeElement[] = [


{

    path: "/",
    element: Home,
    layoutMode: DefaultLayout,
}



]