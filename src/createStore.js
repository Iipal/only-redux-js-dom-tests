export function createStore(reducer, initState) {
  const subscribers = [];
  let state = reducer(initState, { type: "__INIT__" });

  return {
    dispatch(action) {
      state = reducer(state, action);
      subscribers.forEach((sub) => sub());
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
}
