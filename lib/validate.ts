export function makeValidationProfile () {
  return {
    ok: null,
    first: {ok: null, isNotEmpty: null},
    last: {ok: null, isNotEmpty: null},
  }
}

export function validateProfile (req) {
  const validation = makeValidationProfile()
  const {form} = req.body

  validation.first.isNotEmpty = !/^\s*$/.test(form.first)
  validation.first.ok = validation.first.isNotEmpty === true

  validation.last.isNotEmpty = !/^\s*$/.test(form.last)
  validation.last.ok = validation.last.isNotEmpty === true

  validation.ok = validation.first.ok && validation.last.ok
  return validation
}
