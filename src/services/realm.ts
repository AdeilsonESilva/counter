import Realm from 'realm'

class CounterSchema {
  static schema = {
    name: 'Counters',
    properties: {
      id: 'string',
      title: 'string',
      amount: 'string'
    },
    primaryKey: 'id'
  }
}

export async function getRealm() {
  return await Realm.open({
    schema: [CounterSchema]
  })
}
