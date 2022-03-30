import { createStitches } from '@stitches/react'

/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: @Neptune/Theme
 *
 */

export const { styled, css } = createStitches({
    media: {
        sm: '(min-width: 576px)', // Small
        md: '(min-width: 768px)', // Medium
        lg: '(min-width: 992px)', // Large
        elg: '(min-width: 1200px)' // Extra large
    },
    theme: {
        colors: {
            primary: '#5B5DDF',
            primaryLight: '#7B7FDF',
            primaryDark: '#2F2BDF',
            primaryText: '#FFFFFF',
            secondary: '#85ADDB',
            secondaryLight: '#A7C1E0',
            secondaryDark: '#5B8BD5',
            secondaryText: '#FFFFFF',
            success: '#5BDF5B',
            successLight: '#7BDF7B',
            successDark: '#2BDF2B',
            successText: '#FFFFFF',
            danger: '#DF5B5B',
            dangerLight: '#DF7B7B',
            dangerDark: '#DF2B2B',
            dangerText: '#FFFFFF',
            warning: '#DFDF5B',
            warningLight: '#DFDF7B',
            warningDark: '#DFDF2B',
            warningText: '#FFFFFF',
            info: '#5B5BDF',
            infoLight: '#7B7BDF',
            infoDark: '#2B2BDF',
            infoText: '#FFFFFF'
        },
        space: {
            0: '0.125px', // 2px
            1: '0.25rem', // 4px
            2: '0.5rem', // 8px
            3: '0.75rem', // 12px
            4: '1rem', // 16px
            5: '1.25rem', // 20px
            6: '1.5rem', // 24px
            7: '1.75rem', // 28px
            8: '2rem' // 32px
        },
        fontSizes: {
            0: '0.75rem', // 12px
            1: '0.875rem', // 14px
            2: '1rem', // 16px
            3: '1.125rem', // 18px
            4: '1.25rem' // 20px
        },
        fonts: {
            mono: '"Roboto Mono", monospace',
            sans: '"Roboto", sans-serif',
            serif: '"Roboto Slab", serif',
            cursive: '"Roboto Slab", cursive',
            fantasy: '"Roboto Slab", fantasy',
            system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
        },
        lineHeights: {},
        letterSpacings: {
            0: '0.125rem', // 2px
            1: '0.25rem', // 4px
            2: '0.5rem' // 8px
        },
        sizes: {},
        borderWidths: {},
        borderStyles: {},
        radii: {
            0: '0.125rem', // 2px
            1: '0.25rem', // 4px
            2: '0.5rem', // 8px
            3: '0.75rem', // 12px
            4: '1rem', // 16px
            5: '1.25rem', // 20px
            6: '1.5rem', // 24px
            7: '1.75rem', // 28px
            8: '2rem' // 32px
        },
        shadows: {
            sm: '0.15rem 0.13rem 0.4rem',
            md: '0.3rem 0.4rem 0.6rem'
        },
        zIndices: {},
        transitions: {
            fast: 'all 0.25s ease-in-out',
            normal: 'all 0.5s ease-in-out',
            slow: 'all 0.75s ease-in-out',
            ultraSlow: 'all 1s ease-in-out'
        }
    },
    prefix: 'neptune',
    utils: {
        mx: (value: string) => ({
            marginRight: value,
            marginLeft: value
        })
    }
})
