export function getExperience(startDate: string) {
  const start = new Date(startDate)
  const now = new Date()

  const months =
    (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth())

  return `${Math.floor(months / 12)}年+`
}
