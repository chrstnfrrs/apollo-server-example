import db from '../queryBuilder.js'

const createCharactersTable = async () => db.schema.createTable('characters', (table) => {
  table.increments('id')
  table.string('name')
  table.string('manga')
})

const characters = async () => {
  const hasCharacters = await db.schema.hasTable('characters')
  if (!hasCharacters) {
    await createCharactersTable()
    await db.table('characters').insert({name: 'Naruto Uzumaki', manga: 'Naruto'})
    await db.table('characters').insert({name: 'Ichigo Kurosaki', manga: 'Bleach'})
    await db.table('characters').insert({name: 'Monkey D. Luffy', manga: 'One Piece'})
  }
}

export default characters