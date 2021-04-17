import styled from "styled-components";
import { SharableStyle, SharableStyleProps } from "./SharableStyle";

interface HeadingProps extends SharableStyleProps {
  // use as or size for changing element type
  readonly size?: string;
}

export const Heading = styled.h1.attrs<HeadingProps>(({ size }) => ({ as: size }))`
  font-size: 32px;
  ${SharableStyle}
`;

export default Heading;
