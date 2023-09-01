import Container from "@/components/Container";
import TypoH1 from "@/components/TypoH1";
import TypoH2 from "@/components/TypoH2";
import Button from "@/components/Button";

export default function Header({className = '', children, ...rest}) {

    return (
        <Container className="p-section">
            <header className="mb-6">
                <TypoH1 className="max-w-[25ch]">
                    Unaveni z předražených agentur fakturující zbytečnou práci?
                </TypoH1>
            </header>

            <TypoH2 className="max-w-[30ch] mb-6">
                Zažijte cenově dostupný a přesto efektivní marketing. Zjednodušený desetiletými zkušenostmi a pokročilou
                AI.
            </TypoH2>

            <ul className="mb-6">
                <li>Zjednodušené nastavení reklamy pro FaceBook a Instagram</li>
                <li>Řešení spolutvořené AI</li>
                <li>Transparentní výsledky</li>
            </ul>

            <Button href="#">CTA</Button>
        </Container>
    )
}