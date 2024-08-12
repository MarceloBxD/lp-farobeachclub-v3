export const weekday = (date: string | Date) =>
  new Date(date)
    .toLocaleDateString("pt-BR", {
      weekday: "long",
      timeZone: "UTC",
    })
    .replace(/^\w/, (c) => c.toUpperCase())

export const fullDate = (date: string| Date) =>
  new Date(date)
    .toLocaleDateString("pt-BR", {
      timeZone: "UTC",
    })
    .replace(/^\w/, (c) => c.toUpperCase())
