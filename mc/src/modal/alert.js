/*
 * @Author: wangjiaxin@leedarson.com
 * @Date: 2019-09-21 10:00:25
 * @Last Modified by:   wangjiaxin@leedarson.com
 * @Last Modified time: 2019-09-21 10:00:25
 */

import confirm from './confirm';
import { EMPTY_FUNCTION } from '../constants';

const _defaultProps = {
  title: '',
  content: '',
  confirm: 'Ok',
  cancel: '',
  onConfirm: EMPTY_FUNCTION,
  onCancel: EMPTY_FUNCTION,
};

export default props => {
  const finalProps = { ..._defaultProps, ...props };
  const { title, content, confirm: confirmLabel, cancel, onConfirm, onCancel } = finalProps;
  confirm({ title, content, confirm: confirmLabel, cancel, onConfirm, onCancel });
};
