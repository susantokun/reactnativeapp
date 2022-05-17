import {
  DEV_API_URL,
  DEV_AVATAR_URL,

  PROD_API_URL,
  PROD_AVATAR_URL,
} from '@env';

const devEnvironmentVariables = {
  API_URL: DEV_API_URL,
  AVATAR_URL: DEV_AVATAR_URL,
};

const prodEnvironmentVariables = {
  API_URL: PROD_API_URL,
  AVATAR_URL: PROD_AVATAR_URL,
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
