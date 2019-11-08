/*
 * @Author: caozhihui@leedarson.com
 * @Date: 2019/8/29
 * Copyright © Leedarson. All rights reserved.
 */

import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Cell, CellItem, CellHeader, CellBody } from '../cell';
import Icon from '../icon';
import Input from '../input';
import Box from '../box';
import CountryList from './CountryList';
import SearchCountryList from './SearchCountryList';
import { EMPTY_FUNCTION } from '../constants';

const StyledWarp = styled.div`
  -webkit-overflow-scrolling: touch;
  height: 100%;
  overflow-y: auto;
  flex-grow: 1;
`;

/* 创建 列表 渲染数据 */
const _createCountries = countries => {
  const countryMap = {};
  const list = [];
  /* 将 country 以开头 首字母为 key  进行归类 */
  countries.forEach(country => {
    const firstLetter = country && country.name ? country.name.charAt(0) : '';

    // 看看是否存在不存在就创建
    if (!(firstLetter in countryMap)) {
      countryMap[firstLetter] = [];
    }
    // {name:'',......}
    if (firstLetter) {
      countryMap[firstLetter].push(country);
    }
  });

  /* 提取 key key为字母  */
  const keys = Object.keys(countryMap);
  /* 对取到的字母 进行排序 */
  keys.sort();
  keys.forEach((key, index) => {
    /* 构建 显示 字母 内容 的数据 */
    list.push({
      _id: index,
      title: key,
      isTitle: true,
    });
    /* 构建 显 国家 内容的数据 */
    countryMap[key].forEach((country, subIndex) => {
      list.push({
        _id: `${index}-${subIndex}`,
        country,
        isTitle: false,
      });
    });
  });
  return { keys, list };
};

const Country = React.memo(({ countries, onChange }) => {
  const [keys, setKeys] = useState([]);
  const [list, setList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchStatus, setSearchStatus] = useState(false);
  useMemo(() => {
    const data = _createCountries(countries);
    setKeys(data.keys);
    setList(data.list);
  }, [countries]);

  /* 过滤出用户输入的国家  */
  const filterCountries = useCallback(
    key => {
      let matchCountries = [];
      const upperKey = key.toUpperCase();
      matchCountries = list.filter(item => {
        if (!item.isTitle && item.country.name.toUpperCase().match(upperKey)) {
          return true;
        }
        return false;
      });
      return matchCountries;
    },
    [list],
  );

  const handleInputChange = useCallback(
    ev => {
      const keyWords = ev.target.value;
      // 当用户有输入搜索词的时候 ，就显示搜索状态 没有就显示列表
      if (keyWords.length > 0) {
        setSearchStatus(true);
      } else {
        setSearchStatus(false);
      }
      const filterList = filterCountries(keyWords);
      setSearchList(filterList);
    },
    [filterCountries],
  );

  return (
    <StyledWarp>
      {/* 搜索输入框 */}
      <Box margin={[40]}>
        <Cell>
          <CellItem spacings={[4]}>
            <CellHeader spacing={20}>
              <Icon type="search" size="small" />
            </CellHeader>
            <CellBody>
              <Input onChange={handleInputChange} value="" placeholder="Search" />
            </CellBody>
          </CellItem>
        </Cell>
      </Box>
      {searchStatus ? (
        <SearchCountryList handleCountrySelect={onChange} list={searchList} />
      ) : (
        <CountryList handleCountrySelect={onChange} list={list} keys={keys} />
      )}
    </StyledWarp>
  );
});

Country.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
};

Country.defaultProps = {
  countries: [],
  onChange: EMPTY_FUNCTION,
};

export default withTheme(Country);
