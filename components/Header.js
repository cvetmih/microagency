import Container from "@/components/Container";
import TypoH1 from "@/components/TypoH1";
import TypoH2 from "@/components/TypoH2";
import Button from "@/components/Button";

export default function Header({className = '', children, ...rest}) {

    return (
        <Container className="pt-48 pb-section">
            <header className="mb-6">
                <TypoH1 className="max-w-[25ch] leading-[1.2] lg:leading-[1.2]">
                    Unaveni z předražených agentur fakturující zbytečnou práci?
                </TypoH1>
            </header>

            <TypoH2 className="max-w-[36ch] mb-12 leading-[1.25] lg:leading-[1.25]">
                Zažijte cenově dostupný a přesto efektivní marketing. Zjednodušený desetiletými zkušenostmi a pokročilou
                AI.
            </TypoH2>

            <ul className="mb-12 list-disc list-pushed list-outside">
                <li className="mb-2">Zjednodušené nastavení reklamy pro FaceBook a Instagram</li>
                <li className="mb-2">Řešení spolutvořené AI</li>
                <li>Transparentní výsledky</li>
            </ul>

            <Button href="#">
                Zjistit vice
            </Button>
        </Container>
    )
}