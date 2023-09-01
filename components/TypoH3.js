export default function TypoH3({Element = 'h2', className = '', children, ...rest}) {
    return (
        <Element className={`text-2xl lg:text-3xl ${className}`} {...rest}>
            {children}
        </Element>
    )
}