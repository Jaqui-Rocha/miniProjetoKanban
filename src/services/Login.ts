export const login = async (email: string, password: string) => {
    const result = await fetch("https://arnia-kanban.vercel.app/api/user/login", {
      method: 'POST',
      headers: { 
        "x-api-key": "52a8b954-e25d-4cc5-86e5-c32e92f994bb",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
  
    if (result.status === 200) {
      const { token } = await result.json()
      return token
    }
  
    const error = await result.json()
    return error.message
  }