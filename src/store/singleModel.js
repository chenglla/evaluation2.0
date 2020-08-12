const singleModel = {
  state: {
    typeId: 0,
    leftIndex: 0
  },
  mutations: {
    SET_TYPE_ID: (state, id) => {
      state.typeId = id
    },
    SET_LEFT_INDEX: (state, index) => {
      state.leftIndex = index
    }
  }
}

export default singleModel
