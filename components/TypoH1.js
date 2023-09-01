export default function TypoH1({Element = 'h1', className = '', children, ...rest}) {
    return (
        <Element className={`font-serif text-4xl lg:text-5xl ${className}`} {...rest}>
            {children}
        </Element>
    )
}