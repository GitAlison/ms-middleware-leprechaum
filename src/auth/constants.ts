// TODO: mudar isso pra .env ... obviamente ... -.- 
export const jwtConstants = {
    secret: process.env.SECRET_KEY || 'secretKey',
  };