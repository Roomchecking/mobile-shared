import immutableTransform from './utils/immutable-transform';
import { AsyncStorage } from 'react-native';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '2',
  storeConfig: {
    storage: AsyncStorage,
    transforms: [immutableTransform],
    blacklist: ['overlay', 'backend']
  }
};

export default REDUX_PERSIST;
