import { Component, ReactNode, createElement } from "react";
import { GoogleTranslateContainerProps } from "../typings/GoogleTranslateProps";
import "./ui/GoogleTranslate.css";
import "./googleTranslateElementInit";
export default class GoogleTranslate extends Component<GoogleTranslateContainerProps> {
    render(): ReactNode {
        if(this.props.show==true){
            const a = document.createElement("script");
            const m = document.getElementsByTagName("script")[0];
            a.async = true;
            a.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            if(m.parentNode!=null){
                m.parentNode.insertBefore(a, m);
            }
        return <div id="google_translate_element"></div>;
        } else {return <div></div>}

    }
}