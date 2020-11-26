import TYPES from './constants';

const focusOn = () => ({
  type: TYPES.SEARCH_FOCUS,
});

const focusBlur = () => ({
  type: TYPES.SEARCH_BLUR,
});

export {
  focusOn,
  focusBlur,
}