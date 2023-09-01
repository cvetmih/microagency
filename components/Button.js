import Link from "next/link";

export default function Button({
                                   className = '',
                                   theme = 'primary',
                                   size = 'big',
                                   active = false,
                                   href,
                                   children,
                                   ...rest
                               }) {
    const classes = `cursor-pointer button button-${theme} button-${size} ${active ? 'button-active' : ''} ${className}`;

    if (href) {
        return (
            <Link href={href}
                  className={classes}
                  {...rest}
            >
                {children}
            </Link>
        )
    }
    return (
        <button className={classes}
                {...rest}
        >
            {children}
        </button>
    )
}