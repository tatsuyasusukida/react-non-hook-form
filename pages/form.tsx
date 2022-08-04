import { useState } from "react"
import { makeValidationProfile, validateProfile } from "../lib/validate"

export default function Form () {
  const [form, setForm] = useState({first: '', last: ''})
  const [validation, setValidation] = useState(makeValidationProfile)

  const onSubmit = (event: any) => {
    event.preventDefault()

    const req = {body: {form}}
    const validation = validateProfile(req)

    setValidation(validation)
    console.info(JSON.stringify(validation, null, 2))
  }

  const onChange = (key: string) => (event: any) => {
    const value = {...form, [key]: event.target.value}
    setForm(value)
    console.info(JSON.stringify(value, null, 2))
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="first">First name:</label>
        <input type="text" id="first" name="first" value={form.first} onChange={onChange('first')} />
        <p>
          {validation.first.isNotEmpty === false
            && 'First name is empty'}
        </p>
      </div>
      <div>
        <label htmlFor="last">Last name:</label>
        <input type="text" id="last" name="last" value={form.last} onChange={onChange('last')} />
        <p>
          {validation.last.isNotEmpty === false
            && 'Last name is empty'}
        </p>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
