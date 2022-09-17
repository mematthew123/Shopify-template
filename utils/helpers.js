export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  export const isMultiple = (value) => (value === 0 || value > 1 ? "s" : "")