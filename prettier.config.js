module.exports = {
    trailingComma: 'none',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    printWidth: 120,
    arrowParens: 'avoid',
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
    ],
}
