const replaceStringPlaceholder = (str: string, data: Record<string, any> | null) => {
  if (!data) {
    return str
  }

  return str.replace(/{([^{}]*)}/g, (a, b) => {
    const r = data[b]
    return typeof r === 'string' || typeof r === 'number' ? String(r) : a
  })
}

export default replaceStringPlaceholder
