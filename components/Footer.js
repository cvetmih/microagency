import Container from "@/components/Container";

export default function Footer({className = '', children, ...rest}) {

    return (
        <footer
            className={`py-12 border-t border-white/10 ${className}`}
            {...rest}
        >
            <Container className="flex justify-between">
                <p className="opacity-60">
                    &copy; 2023 Microagency
                </p>
                <p className="opacity-60">
                    IČO: 12345678
                </p>
            </Container>
        </footer>
    )
}