const postReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_CON':
      return state.concat([action.data])
      case 'DELETE_CON':
        return state.filter((contacto) => contacto.id !== action.id)
        case 'EDIT_CON':
          return state.map((contacto) => contacto.id === action.id ? { ...contacto, editing: !contacto.editing } : contacto)
          case 'UPDATE':
            return state.map((contacto) => {
            if (contacto.id === action.id) {
            return {
            ...contacto,
            nombre: action.data.newNombre,
            numero: action.data.newNumero,
            editing: !contacto.editing
            }
            } else return contacto;
            })
    default:
      return state;
  }
  }
  export default postReducer;
  