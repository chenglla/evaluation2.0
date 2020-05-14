const singleModel = {
  state: {
    typeId: 0
  },
  mutations: {
    SET_TYPE_ID: (state, id) => {
      state.typeId = id
    }
  }
}

export default singleModel
