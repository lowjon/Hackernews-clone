import faker from 'faker'

const dummy = []

for (let i = 0; i < 10; i++){
  dummy.push(
    {
      by: faker.name.findName(),
      descendants: faker.phone.phoneNumber(),
      id: faker.random.uuid(),
      kids: [faker.random.arrayElement(),faker.random.arrayElement(),faker.random.arrayElement()],
      score: faker.random.number(),
      time: faker.date.past(),
      title: faker.company.catchPhrase(),
      type: 'story',
      url: faker.internet.url()
    }
  )
}

export default dummy
