const {
  filter, join, map, pipe, replace, reverse, split, toLower,
} = require('ramda')
const { writeFileSync } = require('fs')
const Json2csvParser = require('json2csv').Parser

const papercall = require('./Connectaha Submissions.json')
const keynotes = require('./keynotes.json')

function email () {
  const speakers = pipe(
    filter(_ => _.state === 'accepted'),
    map(_ => {
      const names = split(' ', _.name)
      const [last, ...rest] = reverse(names)
      return {
        firstName: join(' ', reverse(rest)),
        lastName: last,
        email: _.email,
      }
    })
  )(papercall)

  const fields = ['firstName', 'lastName', 'email']
  const opts = { fields }

  try {
    const parser = new Json2csvParser(opts)
    const csv = parser.parse(speakers)
    writeFileSync('./emails.csv', csv)
  } catch (err) {
    console.error(err)
  }
}

function extract () {
  const speakers = pipe(
    filter(_ => _.state === 'accepted'),
    map(_ => {
      const names = split(' ', _.name)
      const [last, ...rest] = reverse(names)
      const id = replace(/(&|\.)/g, '', toLower(join('-', names)))
      return {
        id,
        firstName: join(' ', reverse(rest)),
        lastName: last,
        bio: _.bio,
        title: _.title,
        description: _.description,
        organization: _.organization,
        photo: '/photos/',
      }
    })
  )(papercall)

  keynotes.forEach(speaker => {
    speakers.push(speaker)
  })

  writeFileSync('./speakers.json', JSON.stringify(speakers))
}

module.exports = {
  email,
  extract,
}
