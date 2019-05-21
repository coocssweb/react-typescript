import { useState, useCallback } from 'react';
export default <T extends object>(initialValue: T = {} as T): [T, Function] => {
    const [state, set] = useState(initialValue);
    const setState = useCallback(
      (patch) => {
          set((prevState) => {
              return Object.assign({}, prevState, patch instanceof Function ? patch(prevState): patch);
          });
      },
      [set],
    );
    return [state, setState];
};
