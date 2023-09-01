export default function TypoH3({Element = 'h2', className = '', children, ...rest}) {
    return (
        <Element className={`text-lg lg:text-xl ${className}`} {...rest}>
            {children}
        </Element>
    )
}