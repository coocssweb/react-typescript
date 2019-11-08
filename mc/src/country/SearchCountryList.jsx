import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledList, StyledLetter, StyledWarp, StyledCountry } from './StyledCountry';
import { EMPTY_FUNCTION } from '../constants';

const SearchCountryList = React.memo(props => {
  const { list, handleCountrySelect } = props;
  const [selectedCountry, setSelectedCountry] = useState('');
  const latestMove = useRef(false);
  const handleCountryTouchStart = useCallback(
    value => () => {
      latestMove.current = false;
      setSelectedCountry(value);
    },
    [],
  );

  const handleCountryTouchMove = useCallback(() => {
    latestMove.current = true;
  }, []);

  const handleDdTouchEnd = useCallback(() => {
    if (!latestMove.current) {
      handleCountrySelect(selectedCountry);
    }
    setSelectedCountry('');
  }, [selectedCountry, handleCountrySelect]);

  return (
    <>
      <StyledList>
        <StyledLetter>Best match</StyledLetter>
        {list.map((item, index) => {
          const { _id, country } = item;
          return (
            <StyledWarp
              key={_id}
              active={selectedCountry.name === country.name}
              onTouchStart={handleCountryTouchStart(country)}
              onTouchMove={handleCountryTouchMove}
              onTouchEnd={handleDdTouchEnd}
            >
              <StyledCountry showLine={index}>{country.name}</StyledCountry>
            </StyledWarp>
          );
        })}
      </StyledList>
    </>
  );
});

SearchCountryList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  handleCountrySelect: PropTypes.func,
};

SearchCountryList.defaultProps = {
  list: [],
  handleCountrySelect: EMPTY_FUNCTION,
};

export default SearchCountryList;
