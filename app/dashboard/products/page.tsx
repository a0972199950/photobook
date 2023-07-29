import * as Next from 'next'

const ShopPage: Next.NextPage = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(null)
      } else {
        reject()
      }
    }, 5000)
  })

  console.log('ShopPage')

  return (
    <>
      <div
        style={{
          border: '1px black solid',
          backgroundColor: 'white'
        }}
      >
        <h1>Shop page</h1>
      </div>
    </>
  )
}

export default ShopPage
