const dateFormat = {minute:'numeric', hour:'numeric', day:'numeric', month:'long'}
document.querySelectorAll('.date').
  forEach(d => {
    const date = new Date(d.dataset.date).
      toLocaleString('en-US', dateFormat)
    d.textContent = date
  })