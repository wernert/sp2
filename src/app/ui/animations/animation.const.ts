export const EASE_IN_OUT_QUINT = 'cubic-bezier(.38, .04, .35, .96)';

export const ANI_STANDARD_TIMING_ = 'cubic-bezier(.4, 0, .2, 1)';
export const ANI_ENTER_TIMING_ = 'cubic-bezier(0, 0, .2, 1)';
export const ANI_LEAVE_TIMING_ = 'cubic-bezier(.4, 0, 1, 1)';
export const ANI_SHARP_TIMING_ = 'cubic-bezier(.4, 0, .6, 1)';

export const TRANSITION_DURATION_S = '150ms';
export const TRANSITION_DURATION_M = '225ms';
export const TRANSITION_DURATION_L = '375ms';

export const TRANSITION_DURATION_ENTER = TRANSITION_DURATION_M;
export const TRANSITION_DURATION_LEAVE = '195ms';

export const ANI_STANDARD_TIMING = `${TRANSITION_DURATION_M} ${ANI_STANDARD_TIMING_}`;
export const ANI_ENTER_TIMING = `${TRANSITION_DURATION_ENTER} ${ANI_ENTER_TIMING_}`;
export const ANI_LEAVE_TIMING = `${TRANSITION_DURATION_LEAVE} ${ANI_LEAVE_TIMING_}`;
export const ANI_SHARP_TIMING = `${TRANSITION_DURATION_M} ${ANI_SHARP_TIMING_}`;