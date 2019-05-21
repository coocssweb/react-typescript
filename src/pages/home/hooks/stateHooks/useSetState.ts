import  * as React from 'react';
import { useState, useCallback } from 'react';
export default (initialState: any = {}) => {
    const [state, set] = useState(initialState);
    const setState = useCallback(
      (patch) => {
          set((prevState) => {
              return {...prevState, ...patch};
          });
      },
      [set],
    );
    return [state, setState];
};

