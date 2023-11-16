// import { createContext, useReducer} from 'react';

// type Children = {
//   children: React.ReactNode;
// };

// export const UserContext = createContext(null);

// export const userReducer = (state, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return { user: action.payload }
//     case 'LOGOUT':
//       return { user: null }
//     default:
//       return state
//   }
// }

// export const UserContextProvider = ({ children }: Children) => {
//   const [state, dispatch] = useReducer(userReducer, {
//     user: null
//   })
// };
