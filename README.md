# trello_activity

Bir trello boardunun tum cardlarinin tamamlama suresini hesaplar.

Proje [composer](http://getcomposer.org/) kullaniyor
Testler icin [Behat](http://behat.org/) kullaniyor

## Dependancies

### Production
- PHP53, PHP54 or PHP55
```
brew install PHP55  
```

### Test
- Composer
```
brew install josegonzalez/php/composer
```
- Behat
```
curl http://getcomposer.org/installer | php 
```
```
php composer.phar install --prefer-source
```

## Run

Tests
```
bin/behat
```

## Details

### Bir cardin tamamlanma suresi

- get card
- get actions of card
- find action where card moved from ToDo to Doing

```
action = {
	type: 'updateCard',
	data: {
		listAfter": {
	    	name: "Doing",
	        id: "4d5ea62fd76aa1136000001f"
	    },
	    listBefore: {
			"name": "ToDo",
			"id": "4e70ffc2fa8d7c21b92361df"
		}
	},
	date: "2013-12-20T22:44:57.407Z"
}
```

- find action where card moved from Doing to Done

```
action = {
	type: 'updateCard',
	data: {
		listAfter": {
	    	name: "Done",
	        id: "4d5ea62fd76aa1136000001f"
	    },
	    listBefore: {
			"name": "Doing",
			"id": "4e70ffc2fa8d7c21b92361df"
		}
	},
	date: "2013-12-20T22:44:57.407Z"
}
```

- get difference of time