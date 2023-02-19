const modules: Record<string, any> = import.meta.glob('@p-dev/icons/*.svg', { as: 'raw', eager: true })

const NAME_RE = /\/(?:\w+\/)(\w+)\.svg$/

export default Object.entries(modules).reduce((map, [path, mod]) => {
  const result = NAME_RE.exec(path)
  if (!result) return map
  map[result[1]] = mod
  return map
}, {} as Record<string, string>)
