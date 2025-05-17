export const USERNAME_MIN_LENGTH = 5;
export const USERNAME_MAX_LENGTH = 20;
export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 20;
export const PASSWORD_REGEX = new RegExp(/^(?=.*[a-z])(?=.*\d)(?=.*?[!@#$%^&*]).+$/);
export const PASSWORD_REGEX_ERROR = "비밀번호는 숫자, 영어소문자, 특수문자(!@#$%^&*)를 각각 1개 이상 포함해야 합니다.";
export const PASSWORD_HASHED_NUM = 12;
