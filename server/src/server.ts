import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const prisma = new PrismaClient({
  // prisma prints all the querys in the database. Important to debug.
  log: ['query'],
})

// first function that execute in the code.
async function bootstrap() {
  const fastify = Fastify({
    // constant error logs
    logger: true,
  })

  await fastify.register(cors, {
  // allows any application to access the server.
    origin: true,
  })

  fastify.get('/pools/count', async () => {
    // findMany is simillar to select in sql
  const pools = await prisma.pool.count()
    return { pools }
  })

  await fastify.listen({ port: 3333, host: '0.0.0.0' })
}

bootstrap()