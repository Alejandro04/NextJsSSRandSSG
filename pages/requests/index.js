export default function Request() {

  const onSubmit = async () => {
    const response = await fetch('/api/hello', {
      method: 'POST',
      body: JSON.stringify({ name: 'test' }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      <button onClick={onSubmit}>Send http request and see the browser console</button>
    </div>
  )
}
