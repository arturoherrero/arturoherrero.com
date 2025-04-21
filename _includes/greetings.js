<p>
<script>
  let hour = new Date().getHours()

  if (hour <= 4)
    document.write("Don't stay up too late.")
  else if (hour <= 12)
    document.write("Have a great day.")
  else if (hour <= 17)
    document.write("Have a good afternoon.")
  else if (hour <= 22)
    document.write("Have a good evening.")
  else if (hour <= 24)
    document.write("Good night.")
</script>

<noscript>
  Have a great day!
</noscript>
</p>
