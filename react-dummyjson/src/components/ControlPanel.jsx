import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { LangContext } from "../context/LangContext";
import { ColorModeContext } from "../context/ColorModeContext";
import { CurrencyContext } from "../context/CurrencyContext";

function ControlPanel() {
    const [lang, setLang] = useContext(LangContext);
    const changeLang = () => {
        if (lang === "AZ") {
            setLang("EN");
            localStorage.setItem('lang', 'EN');
        } else {
            setLang("AZ")
            localStorage.setItem('lang', 'AZ');
        }
    }
    const [colorMode, setColorMode] = useContext(ColorModeContext);
    const changeColorMode = () => {
        if (colorMode === "dark") {
            setColorMode("light");
            document.querySelector("html").setAttribute("data-bs-theme", "light")
            localStorage.setItem('colorMode', 'light');
        } else {
            setColorMode("dark")
            document.querySelector("html").setAttribute("data-bs-theme", "dark")
            localStorage.setItem('colorMode', 'dark');
        }
    }
    const [currency, setCurrency] = useContext(CurrencyContext);
    const changeCurrency = () => {
        if (currency === "usd") {
            setCurrency("azn");
            localStorage.setItem('currency', 'azn');
        } else {
            setCurrency("usd")
            localStorage.setItem('currency', 'usd');
        }
    }
    return (
        <Container>
            <Row className="mt-5 justify-content-center text-center">
                <Col xs={1}>
                    <Button onClick={changeLang}>{lang === "EN" ? "AZ" : "EN"}</Button>
                </Col>
                <Col xs={1}>
                    <Button onClick={changeColorMode}>{colorMode === "dark" ? "Light" : "Dark"}</Button>
                </Col>
                <Col xs={1}>
                    <Button onClick={changeCurrency}>{currency === "usd" ? "AZN" : "USD"}</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ControlPanel;