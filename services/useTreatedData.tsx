export const treatHomeBanner = (c: any[]) => {
  const treatedHomeBanner = c.map((homeBanner) => {
    let { title, image } = homeBanner.fields

    return {
      alt: title,
      src: `https://${image.fields.file.url.slice(2)}`,
    }
  })

  treatedHomeBanner.sort((a, b) => {
    return a.alt.localeCompare(b.alt)
  })

  return { images: treatedHomeBanner }
}

export const treatCustomers = (c: any[]) => {
  const treatedCustomers = c.map((customer) => {
    let { title, logo } = customer.fields

    return {
      title,
      banner: `https://${logo.fields.file.url.slice(2)}`,
    }
  })

  return treatedCustomers
}

export const treatContent = (c: any[]) => {
  const treatedEvents = c.map((event) => {
    let {
      title,
      date = null,
      description = "",
      banner,
      link,
      fixed = false,
      tag = "",
      type = "",
      category = "",
      instagram = "",
      pixieSet = "",
      disclosure = false,
    } = event.fields
    
    return {
      title,
      tag,
      date,
      // description: documentToReactComponents(description, markdownOptions),
      description,
      banner: `https://${banner.fields.file.url.slice(2)}`,
      link,
      fixed,
      type,
      category,
      instagram,
      pixieSet,
      disclosure,
    }
  })

  const orderedByDate = treatedEvents.sort((a, b) => {
    if(a.date === undefined || b.date === undefined) return 0
    
    
    const dateA = new Date(a.date) 
    const dateB = new Date(b.date)
    
    return dateA.getTime() - dateB.getTime()
  })

  const orderedByFixed = orderedByDate.sort((a, b) => {
    return a.fixed ? -1 : 1
  })

  return orderedByFixed
}

export const treatEventsImages =  (c: any[]) => {
  const treatedEventsImages = c.map((item) => {
    return {
      alt: item.fields.image.fields.title,
      src: `https://${item.fields.image.fields.file.url.slice(2)}`,
    }
  })

  return treatedEventsImages
}
