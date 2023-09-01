export default function TypoP2({Element = 'p', className = '', children, ...rest}) {
    return (
        <Element className={`text-base leading-normal ${className}`} {...rest}>
            {children}
        </Element>
    )
}