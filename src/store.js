import createStore from 'storeon';

// Initial state, reducers and business logic are packed in independent modules
let increment = store => {
  // Initial state
  store.on('@init', () => ({ count: 0 }));
  // Reducers returns only changed part of the state
  store.on('inc', ({ count }) => ({ count: count + 1 }));
}

let isSuccess = store => {
  store.on('@init', () => ({
    isEmailSuccess: false,
    isEmailError: false,
  }))
  store.on('setEmailSuccess', ({ isEmailSuccess }, bool) => {
    return {
      isEmailSuccess: bool,
    }
  })
  store.on('setEmailError', ({ isEmailError }, bool) => {
    return {
      isEmailError: bool,
    }
  })
}

const store = createStore([
  increment, 
  isSuccess,
  process.env.NODE_ENV !== 'production' && require('storeon/devtools/logger'),
]);

export default store;