export default function TypoP1({Element = 'p', className = '', children, ...rest}) {
    return (
        <Element className={`text-lg leading-normal ${className}`} {...rest}>
            {children}
        </Element>
    )
}