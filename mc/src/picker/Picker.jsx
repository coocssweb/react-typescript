/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-08-30 10:41:47
 * Copyright © Leedarson. All rights reserved.
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import Cascader from 'rmc-cascader/lib/Cascader';
import MultiPicker from 'rmc-picker/lib/MultiPicker';
import Picker from 'rmc-picker/lib/Picker';
import StyledPicker from './StyledPicker';

const isMultiPicker = data => {
  if (!data) {
    return false;
  }
  return Array.isArray(data[0]);
};

const PickerView = props => {
  const { data, value, cascade, onChange, ...restProps } = props;

  const pickerItem = () => {
    const finalData = isMultiPicker(data) ? data : [data];

    return finalData.map((col, index) => {
      return (
        <Picker prefixCls={PickerView.prefixCls} key={`Picker${col.length + index}`}>
          {col.map(item => {
            return (
              <Picker.Item key={item.value} value={item.value}>
                {item.label}
              </Picker.Item>
            );
          })}
        </Picker>
      );
    });
  };

  return (
    <StyledPicker>
      {cascade ? (
        <Cascader
          prefixCls={Picker.cascaderPrefixCls}
          pickerPrefixCls={PickerView.prefixCls}
          data={data}
          value={value}
          onChange={onChange}
          {...restProps}
        />
      ) : (
        <MultiPicker prefixCls="LdsMultiPicker" selectedValue={value} onValueChange={onChange} {...restProps}>
          {pickerItem()}
        </MultiPicker>
      )}
    </StyledPicker>
  );
};

Picker.cascaderPrefixCls = 'LdsCascaderPicker';
PickerView.prefixCls = 'LdsPicker';

PickerView.defaultProps = {
  cascade: false,
  onChange: () => {},
};

/* eslint-disable react/require-default-props */
PickerView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  cascade: PropTypes.bool,
  onChange: PropTypes.func,
};

export default PickerView;
