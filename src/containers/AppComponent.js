import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import GetSurName, {BodyComponent} from "../components/BodyComponent";
import FooterComponent from "../components/FooterComponent";

export default function AppComponent() {
    return (
        <div>
            <GetSurName></GetSurName>
            <HeaderComponent></HeaderComponent>
            <BodyComponent></BodyComponent>
            <FooterComponent></FooterComponent>
        </div>
    );
}