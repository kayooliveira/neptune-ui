import { styled } from '../theme'

export const Button = styled('button', {
    backgroundColor: '$primary',
    color: '$primaryText',
    border: 'none',
    borderRadius: '$1',
    padding: '$2 $3',
    fontSize: '$1',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: 'none',
    '&:hover': {
        backgroundColor: '$primaryLight'
    },
    '&:active': {
        backgroundColor: '$primaryDark'
    },
    '&:focus': {
        backgroundColor: '$primaryLight'
    },
    variants: {
        success: {
            backgroundColor: '$success',
            color: '$successText',
            '&:hover': {
                backgroundColor: '$successLight'
            },

            '&:active': {
                backgroundColor: '$successDark'
            },
            '&:focus': {
                backgroundColor: '$successLight'
            }
        },
        danger: {
            backgroundColor: '$danger',
            color: '$dangerText',
            '&:hover': {
                backgroundColor: '$dangerLight'
            },
            '&:active': {
                backgroundColor: '$dangerDark'
            },

            '&:focus': {
                backgroundColor: '$dangerLight'
            }
        },
        warning: {
            backgroundColor: '$warning',
            color: '$warningText',
            '&:hover': {
                backgroundColor: '$warningLight'
            },
            '&:active': {
                backgroundColor: '$warningDark'
            },
            '&:focus': {
                backgroundColor: '$warningLight'
            }
        },
        info: {
            backgroundColor: '$info',
            color: '$infoText',
            '&:hover': {
                backgroundColor: '$infoLight'
            },
            '&:active': {
                backgroundColor: '$infoDark'
            },
            '&:focus': {
                backgroundColor: '$infoLight'
            }
        },
        secondary: {
            backgroundColor: '$secondary',
            color: '$secondaryText',
            '&:hover': {
                backgroundColor: '$secondaryLight'
            },
            '&:active': {
                backgroundColor: '$secondaryDark'
            },
            '&:focus': {
                backgroundColor: '$secondaryLight'
            }
        },
        flat: {
            true: {
                backgroundColor: 'transparent',
                color: '$primary',
                '&:hover': {
                    backgroundColor: 'transparent'
                },
                '&:active': {
                    backgroundColor: 'transparent'
                },
                '&:focus': {
                    backgroundColor: 'transparent',
                    boxShadow: '0 0 0 0.125rem $primary'
                }
            }
        },
        outline: {
            true: {
                backgroundColor: 'transparent',
                color: '$primary',
                border: '1px solid $primary',
                '&:hover': {
                    backgroundColor: 'transparent'
                },
                '&:active': {
                    backgroundColor: 'transparent'
                },
                '&:focus': {
                    backgroundColor: 'transparent',
                    boxShadow: '0 0 0 0.125rem $primary'
                }
            }
        },
        rounded: {
            true: {
                borderRadius: '$2'
            }
        },
        block: {
            true: {
                width: '100%'
            }
        }
    }
})
