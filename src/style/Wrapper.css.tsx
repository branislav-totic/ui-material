import styled from "styled-components";
import { FlexSharedStyle, FlexSharedStyleProps } from "./SharableStyle";

interface WrapperProps extends FlexSharedStyleProps {}

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: flex-start;
  ${FlexSharedStyle}
`;

export default Wrapper;
