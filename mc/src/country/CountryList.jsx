/*
 * @Author: caozhihui@leedarson.com
 * @Date: 2019/9/4
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { StyledList, StyledLetter, StyledWarp, StyledCountry, StyledNav, StyledNavLetter } from './StyledCountry';
import { EMPTY_FUNCTION } from '../constants';

const CountryList = React.memo(props => {
  const { handleCountrySelect } = props;
  const [keys, setKeys] = useState(props.keys);
  const [navLetter, setNavLetter] = useState();
  const [selectedCountry, setSelectedCountry] = useState({});
  const [countryList, setCountryList] = useState(props.list);
  /* 存储 列表 字母元素 和导航字母元素 以 字母 为 key */
  const listLetterElements = useRef({});
  const navLetterElements = useRef({});
  const listElement = useRef();
  const navElement = useRef();
  const latestMove = useRef(false);

  useMemo(() => {
    setCountryList(props.list);
    setKeys(props.keys);
  }, [props.keys, props.list]);

  /* 获取 Page Y */
  const handleGetPageY = useCallback(el => {
    const container = listElement.current.parentNode;
    return el.getBoundingClientRect().top + container.scrollTop - container.offsetTop;
  }, []);

  /* 在字母 nav 上滑动时 通过此方法 来获取 手指滑到了哪个字母 */
  const getLetter = useCallback(e => {
    const y = e.changedTouches[0].clientY;
    /* 获取nav 所有的li */
    const elements = navLetterElements.current;
    /* 遍历 每个字母的位置 看是不是和手指的位置 匹配 */
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, ele] of Object.entries(elements)) {
      const rect = ele.getBoundingClientRect();
      if (rect.top <= y && rect.bottom >= y) {
        return key;
      }
    }

    return null;
  }, []);

  useEffect(() => {
    // fix: 苹果端无法 禁用默认事件问题
    const nav = navElement.current;
    nav.addEventListener(
      'touchmove',
      ev => {
        // 执行滚动回调
        ev.preventDefault();
      },
      {
        passive: false, //  禁止 passive 效果
      },
    );
    // 页面销毁 取消禁用
    return () => {
      nav.addEventListener('touchmove', null, {
        passive: false, //  禁止 passive 效果
      });
    };
  }, []);

  /* 字母导航栏 操作 事件  */
  const handleNav = useCallback(
    e => {
      const letter = getLetter(e);
      const container = listElement.current.parentNode;
      if (!letter) {
        return false;
      }
      const element = listLetterElements.current[letter];
      const scrollY = handleGetPageY(element);
      setNavLetter(letter);
      container.scrollTo(0, scrollY);
      return true;
    },
    [getLetter, handleGetPageY],
  );

  const handleCountryTouchStart = useCallback(value => {
    return () => {
      setSelectedCountry(value);
      latestMove.current = false;
    };
  }, []);

  const handleCountryTouchEnd = useCallback(() => {
    if (!latestMove.current) {
      handleCountrySelect(selectedCountry);
    }
    setSelectedCountry('');
  }, [selectedCountry, handleCountrySelect]);

  const handleCountryTouchMove = useCallback(() => {
    latestMove.current = true;
  }, []);

  const handleNavTouchStart = useCallback(
    ev => {
      ev.preventDefault();
      handleNav(ev);
    },
    [handleNav],
  );

  const handleNavTouchEnd = useCallback(() => setNavLetter(''), []);

  return (
    <>
      <StyledNav
        ref={nav => {
          navElement.current = nav;
        }}
        onTouchStart={handleNavTouchStart}
        onTouchMove={handleNav}
        onTouchEnd={handleNavTouchEnd}
      >
        {keys.map(letter => {
          return (
            <StyledNavLetter
              ref={li => {
                navLetterElements.current[letter] = li;
              }}
              key={letter}
              active={letter === navLetter}
            >
              {letter}
            </StyledNavLetter>
          );
        })}
      </StyledNav>
      {/*  国家列表  */}
      <StyledList
        ref={element => {
          listElement.current = element;
        }}
      >
        {countryList.map((item, index) => {
          const { title, isTitle, country, _id } = item;
          if (isTitle) {
            return (
              <StyledLetter
                ref={dt => {
                  listLetterElements.current[title] = dt;
                }}
                key={_id}
              >
                {title}
              </StyledLetter>
            );
          }
          // 上一个 如果是dt  下一个dd 就隐藏线
          return (
            <StyledWarp
              active={selectedCountry.name === country.name}
              key={_id}
              onTouchStart={handleCountryTouchStart(country)}
              onTouchMove={handleCountryTouchMove}
              onTouchEnd={handleCountryTouchEnd}
            >
              <StyledCountry showLine={!countryList[index - 1].isTitle}>{country.name}</StyledCountry>
            </StyledWarp>
          );
        })}
      </StyledList>
    </>
  );
});

CountryList.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string),
  list: PropTypes.arrayOf(PropTypes.object),
  handleCountrySelect: PropTypes.func,
};

CountryList.defaultProps = {
  keys: [],
  list: [],
  handleCountrySelect: EMPTY_FUNCTION,
};

export default CountryList;
