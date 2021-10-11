# node_assignment_3

## Installation
```sh
cd node_assignment_3
npm i OR yarn install
npm start OR yarn start
```

#### Building for source

```sh
127.0.0.1:3000
```

#### Route Details
```sh
curl -X POST \
  http://localhost:3000/task \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 4be47826-6184-dc7c-4808-cc03f1a34f9c' \
  -d '{
	"accountBalanceHistory": [{
			"monthNumber": 0,
			"account": {
				"balance": {
					"amount": 0
				}
			}
		},
		{
			"monthNumber": 1,
			"account": {
				"balance": {
					"amount": 100
				}
			}
		},
		{
			"monthNumber": 2,
			"account": {
				"balance": {
					"amount": 200
				}
			}
		}
	]
}'
```

#### Sample Request Body
```sh
{
	"accountBalanceHistory": [{
			"monthNumber": 0,
			"account": {
				"balance": {
					"amount": 0
				}
			}
		},
		{
			"monthNumber": 1,
			"account": {
				"balance": {
					"amount": 100
				}
			}
		},
		{
			"monthNumber": 2,
			"account": {
				"balance": {
					"amount": 200
				}
			}
		}
	]
}
```
