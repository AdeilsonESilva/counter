import Realm from 'realm'

class CounterSchema {
  static schema = {
    name: 'Counters',
    properties: {
      _id: 'string',
      title: 'string',
      amount: 'string'
    },
    primaryKey: '_id'
  }
}

export async function getRealm() {
  return await Realm.open({
    schema: [CounterSchema]
  })
}