

export const EnvioCadastro = async ( email: string, password: string, name: string) => {
   
    const result = await fetch("https://arnia-kanban.vercel.app/api/user", {
      method: 'POST',
      headers: { 
        "x-api-key": "52a8b954-e25d-4cc5-86e5-c32e92f994bb",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
  
    if (result.status === 201) {
        const jsonResult = await result.json(); 
        return jsonResult; 
      } else {
        throw new Error('Falha ao criar o usuário');
      }
    }
    
      
   