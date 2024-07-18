import superagent from 'superagent'

const start = Date.now()
let count = 20
let pending = count
const interval = 10
const query = process.argv[2] ? process.argv[2] : 'product=nodejs'

function sendRequest () {
  superagent.get(`http://localhost:8000/total-quantity?${query}`)
    .then(result => {
      console.log(result.status, result.body)
      if (!--pending) {
        console.log(`All completed in: ${Date.now() - start}ms`)
      }
    })

  if (--count) {
    setTimeout(sendRequest, interval)
  }
}

sendRequest()