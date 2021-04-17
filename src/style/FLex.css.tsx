import styled from "styled-components";
import { FlexSharedStyle, FlexSharedStyleProps } from "./SharableStyle";

interface FlexProps extends FlexSharedStyleProps {}

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${FlexSharedStyle}
`;

export default Flex;
