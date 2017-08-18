const getUserById = (data, id) => {
  if (data == null || data.users == null || id == null) {
    return null
  }

  let foundUser

  for (let i = 0; i < data.users.length; i++) {
    const currentUser = data.users[i]

    if(currentUser.id === id) {
      foundUser = currentUser
    }
  }

  return foundUser

  // return data.users.find(u =>u.id == id)
}
export default getUserById
