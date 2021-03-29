import { defaultState, State } from 'context/dataContext';

enum types {
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK
}

export type Action = { type: types; payload: any };

export const dataReducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case types.ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case types.UPDATE_TASK: {
      const tasks = [...state.tasks];
      tasks.splice(
        tasks.findIndex((t) => t.id === action.payload.id),
        1,
        action.payload
      );
      return { ...state, tasks };
    }
    case types.DELETE_TASK: {
      const tasks = [...state.tasks];
      tasks.splice(
        tasks.findIndex((t) => t.id === action.payload.id),
        1
      );
      return { ...state, tasks };
    }
    default:
      return state;
  }
};
