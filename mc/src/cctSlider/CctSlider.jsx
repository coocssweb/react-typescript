import React, { useCallback, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { debounce } from '@leedarson/helper';
import Slider from '../slider';
import { Flex, FlexItem } from '../flex';
import WhiteSpace from '../whiteSpace';
import Typography from '../typography';
import { EMPTY_FUNCTION } from '../constants';
import { StyledCircle, StyledWrap, StyledLowIcon, StyledStrongIcon } from './StyledCctSlider';

const CctSlider = React.memo(({ defaultValue, choices, min, max, onChange }) => {
  const [currentColor, setCurrentColor] = useState(defaultValue);
  const callbackRef = useRef(null);

  useEffect(() => {
    setCurrentColor(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    callbackRef.current = debounce(value => {
      onChange(value);
      const selectedDom = document.querySelector('.cctPicker-circle--checked');

      const findSelected = choices.find(choice => choice.value === value);
      if (!findSelected && selectedDom) {
        selectedDom.classList.remove('cctPicker-circle--checked');
      }
    });
  }, [choices, onChange]);

  const handleChange = useCallback(value => {
    callbackRef.current(value);
  }, []);

  const handleCircleClick = useCallback(
    value => () => {
      setCurrentColor(value);
      callbackRef.current(value);
    },
    [],
  );

  return (
    <>
      {choices.length ? (
        <>
          <Flex>
            {choices.map(({ color, value }) => (
              <FlexItem key={value}>
                <StyledCircle
                  display="block"
                  fill={color}
                  width={48}
                  margin={[0, 'auto']}
                  checked={currentColor === value}
                  className={`${currentColor === value ? 'cctPicker-circle--checked' : ''} ${
                    color === '#FFFFFF' ? 'white' : ''
                  }`}
                  shadow={color === currentColor ? 'normal' : 'none'}
                  onClick={handleCircleClick(value)}
                />
                <WhiteSpace spacing={10} />
                <Typography display="block" align="center" variant="caption" color="neuter700">
                  {`${value}K`}
                </Typography>
              </FlexItem>
            ))}
          </Flex>

          <WhiteSpace spacing={30} />
        </>
      ) : null}

      <StyledWrap>
        <Flex>
          <StyledLowIcon />
          <FlexItem padding={[0, 40]}>
            <Slider onChange={handleChange} tooltip defaultValue={defaultValue} min={min} max={max} format="{value}K" />
          </FlexItem>
          <StyledStrongIcon />
        </Flex>
      </StyledWrap>
    </>
  );
});

CctSlider.defaultProps = {
  defaultValue: 2700,
  min: 2700,
  max: 6500,
  choices: [],
  onChange: EMPTY_FUNCTION,
};

CctSlider.propTypes = {
  defaultValue: PropTypes.number,
  choices: PropTypes.arrayOf(PropTypes.object),
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

export default CctSlider;
