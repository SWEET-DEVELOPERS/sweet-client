import { useMemo, useState } from 'react';
import { NonEmptyArray } from '../types/utility';
import { Funnel, FunnelProps, Step } from '../components/common/Funnel/Funnel';

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  steps: Steps,
  defaultStep: Steps[number],
) => {
  const [step, setStep] = useState<Steps[number]>(defaultStep);

  const FunnelComponent = useMemo(
    () =>
      Object.assign(
        (props: Omit<FunnelProps<Steps>, 'step' | 'steps'>) => (
          <Funnel<Steps> step={step} steps={steps} {...props} />
        ),
        { Step },
      ),
    [step],
  );

  return { Funnel: FunnelComponent, step, setStep };
};
