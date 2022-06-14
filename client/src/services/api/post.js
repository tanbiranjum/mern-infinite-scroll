const url = 'http://localhost:5000/posts'

export const read = async (skip) => {
  try {
    const res = await fetch(`${url}?skip=${skip}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    return await res.json()
  } catch (error) {
    throw new Error(error)
  }
}
