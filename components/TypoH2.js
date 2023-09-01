export default function TypoH2({Element = 'h2', className = '', children, ...rest}) {
    return (
        <Element className={`text-3xl lg:text-4xl ${className}`} {...rest}>
            {children}
        </Element>
    )
}