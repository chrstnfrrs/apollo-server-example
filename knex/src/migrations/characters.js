import queryBuilder from '../queryBuilder.js'

const createCharactersTable = async () => queryBuilder.schema.createTable('characters', (table) => {
  table.increments('id')
  table.string('name')
  table.string('manga')
})

const characters = async () => {
  const hasCharacters = await queryBuilder.schema.hasTable('characters')
  if (!hasCharacters) {
    await createCharactersTable()
    await queryBuilder.table('characters').insert({name: 'Naruto Uzumaki', manga: 'Naruto'})
    await queryBuilder.table('characters').insert({name: 'Ichigo Kurosaki', manga: 'Bleach'})
    await queryBuilder.table('characters').insert({name: 'Monkey D. Luffy', manga: 'One Piece'})
  }
}

export default characters