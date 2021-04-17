import { css } from "styled-components";

export interface SharableStyleProps {
  readonly w?: string;
  readonly h?: string;
  readonly color?: string;
  readonly textAlign?: string;
  readonly fontFamily?: string;
  readonly fontWeight?: string;
  readonly fontSize?: string;
  readonly margin?: string;
  readonly mt?: string;
  readonly mr?: string;
  readonly mb?: string;
  readonly ml?: string;
  readonly padding?: string;
  readonly pt?: string;
  readonly pr?: string;
  readonly pb?: string;
  readonly pl?: string;
  readonly border?: string;
  readonly borderStyle?: string;
  readonly borderColor?: string;
  readonly borderWidth?: string;
  readonly bt?: string;
  readonly br?: string;
  readonly bb?: string;
  readonly bl?: string;
  readonly borderRadius?: string;
  readonly bg?: string;
  readonly bgColor?: string;
  readonly bgImage?: string;
  readonly bgPosition?: string;
  readonly bgSize?: string;
  readonly bgRepeat?: string;
  readonly bgOrigin?: string;
  readonly bgClip?: string;
  readonly bgAttachment?: string;
};

const checkForValues = (key: string | undefined, obj: any | null) => {
  console.log(key)
  if(!obj) {
    return key && key;
  }

  return key && obj[key] ? obj[key] : key;
}

const fontSizes: { [key: string]: string } = {
  xsm: `12px`,
  sm: `16px`,
  md: `24px`,
  lg: `32px`,
  xlg: `48px`,
}

const sizes: { [key: string]: string } = {
  1: `4px`,
  2: `8px`,
  3: `16px`,
  4: `24px`,
  5: `32px`,
}

const colors: { [key: string]: string } = {
  primary: `#007bff`,
  secondary: `#6c757d`,
  success: `#28a745`,
  danger: `#dc3545`,
  warning: `#ffc107`,
  info: `#17a2b8`,
  light: `#f8f9fa`,
  dark: `#343a40`,
  muted: `#6c757d`,
  white: `#fff`,
}

export const SharableStyle = css<SharableStyleProps>`
  width: ${({ w }) => checkForValues(w, null)};
  height: ${({ h }) => checkForValues(h, null)};

  color: ${({ color }) => checkForValues(color, colors)};
  text-align: ${({ textAlign }) => checkForValues(textAlign, null)};
  font-family: ${({ fontFamily }) => checkForValues(fontFamily, null)};
  font-weight: ${({ fontWeight }) => checkForValues(fontWeight, null)};
  font-size: ${({ fontSize }) => checkForValues(fontSize, fontSizes)};

  margin: ${({ margin }) => checkForValues(margin, sizes)};
  margin-top: ${({ mt }) => checkForValues(mt, sizes)};
  margin-right: ${({ mr }) => checkForValues(mr, sizes)};
  margin-bottom: ${({ mb }) => checkForValues(mb, sizes)};
  margin-left: ${({ ml }) => checkForValues(ml, sizes)};

  padding: ${({ padding }) => checkForValues(padding, sizes)};
  padding-top: ${({ pt }) => checkForValues(pt, sizes)};
  padding-right: ${({ pr }) => checkForValues(pr, sizes)};
  padding-bottom: ${({ pb }) => checkForValues(pb, sizes)};
  padding-left: ${({ pl }) => checkForValues(pl, sizes)};

  border: ${({ border }) => checkForValues(border, null)};
  border-color: ${({ borderColor }) => checkForValues(borderColor, null)};
  border-style: ${({ borderStyle }) => checkForValues(borderStyle, null)};
  border-width: ${({ borderWidth }) => checkForValues(borderWidth, null)};
  border-top: ${({ bt }) => checkForValues(bt, null)};
  border-right: ${({ br }) => checkForValues(br, null)};
  border-bottom: ${({ bb }) => checkForValues(bb, null)};
  border-left: ${({ bl }) => checkForValues(bl, null)};
  border-radius: ${({ borderRadius }) => checkForValues(borderRadius, null)};

  background: ${({ bg }) => checkForValues(bg, colors)};
  background-color: ${({ bgColor }) => checkForValues(bgColor, colors)};
  background-image: ${({ bgImage }) => checkForValues(bgImage, null)};
  background-position: ${({ bgPosition }) => checkForValues(bgPosition, null)};
  background-size: ${({ bgSize }) => checkForValues(bgSize, null)};
  background-repeat: ${({ bgRepeat }) => checkForValues(bgRepeat, null)};
  background-origin: ${({ bgOrigin }) => checkForValues(bgOrigin, null)};
  background-clip: ${({ bgClip }) => checkForValues(bgClip, null)};
  background-attachment: ${({ bgAttachment }) => checkForValues(bgAttachment, null)};
`;

export interface FlexSharedStyleProps extends SharableStyleProps {
  readonly align?: string;
  readonly basis?: string;
  readonly direction?: string;
  readonly grow?: string;
  readonly justify?: string;
  readonly shrink?: string;
  readonly wrap?: string;
  readonly gap?: string;
  readonly order?: string;
}

export const FlexSharedStyle = css<FlexSharedStyleProps>`
  ${SharableStyle}
  align-items: ${({ align }) => checkForValues(align, null)};
  flex-basis: ${({ basis }) => checkForValues(basis, null)};
  flex-direction: ${({ direction }) => checkForValues(direction, null)};
  flex-grow: ${({ grow }) => checkForValues(grow, null)};
  justify-content: ${({ justify }) => checkForValues(justify, null)};
  flex-shrink: ${({ shrink }) => checkForValues(shrink, null)};
  flex-wrap: ${({ wrap }) => checkForValues(wrap, null)};
  gap: ${({ gap }) => checkForValues(gap, null)};
  order: ${({ order }) => checkForValues(order, null)};
`;
