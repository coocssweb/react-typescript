import React, { useEffect, useState, useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sortableContainer, sortableElement, sortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { EMPTY_FUNCTION } from '../constants';

const StyledSortable = styled.div``;

const DragHandle = sortableHandle(({ render, value, index }) => render(value, index));

const SortableItem = sortableElement(({ value, index, render, renderHandle }) =>
  render(value, index, <DragHandle render={renderHandle} value={value} index={index} />),
);

const SortableContainer = sortableContainer(({ children }) => children);

const Sortable = memo(
  ({
    data,
    keyName,
    direction,
    lockAxis,
    disabled,
    onSortStart,
    onSortMove,
    onSortEnd,
    render,
    renderHandle,
    ...restProps
  }) => {
    const [items, setItems] = useState(data);

    useEffect(() => {
      setItems(data);
    }, [data]);

    const handleSortEnd = useCallback(
      ({ oldIndex, newIndex }) => {
        if (oldIndex === newIndex) {
          return;
        }

        const finalItems = arrayMove(items, oldIndex, newIndex);
        setItems(finalItems);
        if (onSortEnd !== EMPTY_FUNCTION) {
          onSortEnd(finalItems);
        }
      },
      [items, onSortEnd],
    );

    return (
      <SortableContainer
        axis={direction}
        onSortEnd={handleSortEnd}
        useDragHandle={renderHandle !== EMPTY_FUNCTION}
        pressDelay={100}
        helperClass={direction === 'xy' ? 'lds-sortableSquare--active' : 'lds-sortable--active'}
        lockAxis={lockAxis}
      >
        <StyledSortable {...restProps}>
          {items.map((value, index) => (
            <SortableItem
              key={`item-${value[keyName]}`}
              index={index}
              disabled={disabled}
              value={value}
              render={render}
              renderHandle={renderHandle}
            />
          ))}
        </StyledSortable>
      </SortableContainer>
    );
  },
);

Sortable.defaultProps = {
  data: [],
  keyName: 'id',
  direction: 'y',
  disabled: false,
  lockAxis: 'y',
  render: EMPTY_FUNCTION,
  renderHandle: EMPTY_FUNCTION,
  onSortStart: EMPTY_FUNCTION,
  onSortEnd: EMPTY_FUNCTION,
  onSortMove: EMPTY_FUNCTION,
};

Sortable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  keyName: PropTypes.string,
  disabled: PropTypes.bool,
  lockAxis: PropTypes.oneOf(['x', 'y', '']),
  direction: PropTypes.oneOf(['x', 'y', 'xy']),
  render: PropTypes.func,
  renderHandle: PropTypes.func,
  onSortStart: PropTypes.func,
  onSortMove: PropTypes.func,
  onSortEnd: PropTypes.func,
};

export default Sortable;
