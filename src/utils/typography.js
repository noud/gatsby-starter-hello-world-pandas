import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
import kirkhamTheme from "typography-theme-kirkham"

//const theme = fairyGateTheme
const theme = kirkhamTheme
const typography = new Typography(theme)

export const { scale, rhythm, options } = typography
export default typography