import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  await knex('courses').insert([
    { name: 'HTML5: Fundamentos da Web' },
    { name: 'CSS3: Estilizando com Elegância' },
    { name: 'JavaScript: Do Básico ao Avançado' },
    { name: 'React.js para Iniciantes' },
    { name: 'Node.js e Express na Prática' },
    { name: 'Banco de Dados com MySQL' },
    { name: 'APIs RESTful com Node.js' },
    { name: 'Git e GitHub: Controle de Versão' },
    { name: 'TypeScript para Desenvolvedores' },
    { name: 'Next.js: React no Back-end' },
    { name: 'Vue.js do Zero' },
    { name: 'MongoDB: Banco de Dados NoSQL' },
    { name: 'SASS: CSS com Superpoderes' },
    { name: 'Python para Web com Flask' },
    { name: 'Boas Práticas com Clean Code' },
    { name: 'UI/UX Design para Devs' },
    { name: 'Segurança Web para Iniciantes' },
    { name: 'Deploy de Aplicações com Vercel e Netlify' },
    { name: 'Testes Automatizados com Jest' },
    { name: 'Fundamentos da Programação' },
  ])
}
