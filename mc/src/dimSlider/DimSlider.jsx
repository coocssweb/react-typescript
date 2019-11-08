import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { debounce } from '@leedarson/helper';
import Slider from '../slider';
import Icon from '../icon';
import { Flex, FlexItem } from '../flex';
import { EMPTY_FUNCTION } from '../constants';

const DimSlider = React.memo(({ defaultValue, min, max, onChange }) => {
  const callbackRef = useRef(null);
  useEffect(() => {
    callbackRef.current = debounce(value => {
      onChange(value);
    });
  }, [onChange]);

  const handleChange = useCallback(value => {
    callbackRef.current(value);
  }, []);

  return (
    <Flex>
      <Icon type="bright-less" color="neuter600" />
      <FlexItem padding={[0, 40]}>
        <Slider
          onChange={handleChange}
          min={min}
          max={max}
          tooltip
          defaultValue={Math.max(Math.min(defaultValue, max), min)}
        />
      </FlexItem>
      <Icon type="bright" color="neuter600" />
    </Flex>
  );
});

DimSlider.defaultProps = {
  defaultValue: 1,
  min: 1,
  max: 100,
  onChange: EMPTY_FUNCTION,
};

DimSlider.propTypes = {
  defaultValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

export default DimSlider;
