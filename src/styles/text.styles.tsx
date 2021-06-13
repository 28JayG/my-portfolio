import styled, { css } from 'styled-components'

const fonts = {
    head: 'Dosis',
    body: 'Raleway'
}

export const Headline_2 = styled.h2`
    font-family: ${fonts.head};
    font-weight: 700;
    font-size: 59px;
`

export const Headline_4 = styled.h4`
    font-family: ${fonts.head};
    font-weight: 500;
    font-size: 33px;
`

export const overline = css`
    font-family: ${fonts.body};
    font-weight: 400;
    font-size: 11px;
`

export const button = css`
    font-family: ${fonts.body};
    font-weight: 500;
    font-size: 15px;
`