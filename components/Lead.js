import Container from "@/components/Container";
import TypoH2 from "@/components/TypoH2";

export default function Lead({className = '', children, ...rest}) {

    return (
        <Container className="py-section">
            <header className="text-center mb-6">
                <TypoH2>
                    S námi pochopíte <span className="text-blue-500">rozdíl</span>.
                </TypoH2>
            </header>

            <p className="max-w-[42ch] text-center mx-auto">
                S námi ušetříte peníze, energii a co je nejdůležitější, čas! Pojďme
                předefinovat marketing tak, aby byl transparentní, efektivní a skutečně prospěšný pro váš podnik.
            </p>
        </Container>
    )
}