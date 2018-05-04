import Realm from 'realm';

class Uscis extends Realm.Object { }
Uscis.schema = {
  name: 'uscis',
  properties: {
    id: 'int',
    english: 'StringObj[]',
    zomi: 'StringObj[]',
    burma: 'StringObj[]'
  }
};

class StringObj extends Realm.Object { }
StringObj.schema = {
    name: 'StringObj',
  	properties: {
	    ques: 'string',
	    ans: 'string'
  	}
};

export default new Realm({schema: [Uscis, StringObj]});
