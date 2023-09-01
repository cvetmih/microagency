/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                black: '#000',
                white: '#fff'
            }
        },
    },
    plugins: [
        plugin(({addVariant, e, postcss}) => {
            addVariant('mouse-hover', ({container, separator}) => {
                const mediaRule = postcss.atRule({name: 'media', params: '(hover: hover)'})
                mediaRule.append(container.nodes);
                container.append(mediaRule);

                mediaRule.walkRules(rule => {
                    const ruleSelectorClear = rule.selector.slice(1) // Remove dot in the beginning of the selector
                        .replace('\\/', '/'); // Replace \/ with /, so that PostCSS doesn't escape the slash twice

                    rule.selector = `.${e(`mouse-hover${separator}${ruleSelectorClear}`)}:hover`
                })
            })
        })
    ]
}
