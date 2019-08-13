export const initialTodos = [
  {
    item: 'Test 1',
    completed: false,
    id: 1234567890
  },
  {
    item: 'Test 2',
    completed: false,
    id: 2345678901
  },
  {
    item: 'Test 3',
    completed: false,
    id: 3456789012
  }
];

export function reducer(state, action) {
  switch(action.type) {
    case 'APPEND':
      return [...state, action.payload];

    case 'SET':
      return [...action.payload];

    case 'COMPLETE_TOGGLE':
      let indexTarget;
      for(let x = 0; x < state.length; x++) {
        if(state[x].id === action.id) {
          indexTarget = x;
          break;
        }
      }
      let newState = [...state];
      newState[indexTarget] = action.payload;
      return newState;

    default:
      return state;
  }
}