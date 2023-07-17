import React, { useState } from 'react';

import { useMergeValue } from '@nmsn/utils';

const ControlledInput = ({
  defaultValue,
  value,
  onChange,
}: {
  defaultValue?: string;
  value?: string;
  onChange?: React.Dispatch<string>;
}) => {
  const [curValue, setCurValue] = useMergeValue('', { defaultValue, value });

  return (
    <input
      value={curValue}
      onChange={e => {
        setCurValue(e.target.value);
        onChange?.(e.target.value);
      }}
    />
  );
};

const DEFAULT_VALUE = '1';
const VALUE = '2';

export default () => {
  const [state1, setState1] = useState('');
  const [state2, setState2] = useState(DEFAULT_VALUE);
  const [state3, setState3] = useState(VALUE);
  return (
    <>
      <p>不使用 value/defaultValue 的情况</p>
      <ControlledInput onChange={setState1} />
      <p>state: {state1}</p>
      <p>---</p>
      <p>使用 defaultValue 的情况</p>
      <p>defaultValue: {DEFAULT_VALUE}</p>
      <ControlledInput onChange={setState2} defaultValue={DEFAULT_VALUE} />
      <p>state: {state2}</p>
      <p>---</p>
      <p>使用 value 的情况</p>
      <p>value: {VALUE}</p>
      <ControlledInput onChange={setState3} value={VALUE} />
      <p>state: {state3}</p>
    </>
  );
};
