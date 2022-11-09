import Fastify from 'fastify'

// first function that execute in the code.
async function bootstrap() {
  const fastify = Fastify({
    // constant error logs
    logger: true,
  })

  fastify.get('/pools/count', () => {
    return { count: 12312 }
  })

  await fastify.listen({ port: 3333 })
}

bootstrap()