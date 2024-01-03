import { css } from 'styled-components';

interface MixinProps {
  direction: string;
  align: string;
  justify: string;
}

const mixin = {
  // flex
  flexBox: ({ direction = 'row', align, justify }: MixinProps) => css`
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
  inlineFlexBox: ({ direction = 'row', align, justify }: MixinProps) => css`
    display: inline-flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
  flexCenter: ({ direction = 'column' }: MixinProps) => css`
    display: flex;
    flex-direction: ${direction};
    align-items: center;
    justify-content: center;
  `,
};

export default mixin;
