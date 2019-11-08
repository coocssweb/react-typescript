/*
 * @Author: yuxinyu@leedarson.com
 * @Date: 2019-09-16 17:06:05
 * Copyright © Leedarson. All rights reserved.
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { formatDate } from '@leedarson/helper';
import WhiteSpace from '../whiteSpace';
import WingBlank from '../wingBlank';
import Typography from '../typography';
import { Flex, FlexItem } from '../flex';
import LoadMore from '../loadMore';
import ScrollView from '../scrollView';
import Loading from '../loading';
import { EMPTY_FUNCTION } from '../constants';

const StyledDot = styled.div`
  position: relative;
  border-radius: 100%;

  ${({ theme }) => css`
    width: ${theme.pxToRem(16)};
    height: ${theme.pxToRem(16)};
    background: ${theme.primary.main};
    margin-right: ${theme.pxToRem(24)};
  `}
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    ${({ theme, showLine }) => css`
      display: ${showLine ? 'block' : 'none'};
      top: ${theme.pxToRem(16)};
      width: ${theme.pxToRem(2)};
      height: ${theme.pxToRem(44)};
      background: ${theme.neuter[400]};
    `};
  }
`;

const RecordList = ({ currentPage, totalPage, records, onEndReached, iconType, isLoading, children }) => {
  if (isLoading && currentPage === 1) {
    return (
      <>
        <WhiteSpace spacing={11} />
        <Loading color="primary" />
      </>
    );
  }

  if (Object.keys(records).length === 0 && !isLoading) {
    return children;
  }

  return (
    <ScrollView onEndReached={onEndReached}>
      <WingBlank spacing={10}>
        {Object.keys(records).map(date => {
          return (
            <div key={date}>
              <WhiteSpace spacing={16} />
              <Typography variant="h6">{date}</Typography>

              {records[date].map((recordItem, index) => (
                <React.Fragment key={recordItem.id}>
                  <WhiteSpace spacing={8} />
                  <Flex align="center">
                    {iconType === 'dot' ? <StyledDot showLine={!(records[date].length - 1 === index)} /> : ''}
                    <FlexItem>
                      <Typography variant="body2" color="neuter800">
                        {recordItem.content}
                      </Typography>
                    </FlexItem>

                    <Typography variant="body2" color="neuter700">
                      {formatDate(recordItem.timestamp, 'hh:mm')}
                    </Typography>
                  </Flex>
                </React.Fragment>
              ))}
            </div>
          );
        })}
        {isLoading ? <LoadMore loading="spokes" /> : null}
        {!isLoading && currentPage === totalPage ? <LoadMore>No more data</LoadMore> : null}
      </WingBlank>
    </ScrollView>
  );
};

RecordList.defaultProps = {
  currentPage: 1,
  totalPage: 1,
  isLoading: true,
  records: {},
  onEndReached: EMPTY_FUNCTION,
  children: null,
  iconType: 'dot',
};

RecordList.propTypes = {
  currentPage: PropTypes.number,
  totalPage: PropTypes.number,
  isLoading: PropTypes.bool,
  records: PropTypes.oneOfType([PropTypes.object]),
  onEndReached: PropTypes.func,
  children: PropTypes.node,
  iconType: PropTypes.string,
};

export default RecordList;
