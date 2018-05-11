//test
export const increment = ({
  commit
}) => {
  commit('INCREMENT')
}
export const decrement = ({
  commit
}) => {
  commit('DECREMENT')
}

export const removeTag = ({
  commit
}, tag) => {
  commit('REMOVETAG')
}
