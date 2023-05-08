const postdata = async () => {

    const url = 'https://aufcart.com/api/ragister'
    

    const res = await fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sname, name, phone, email, pass
      })
  })

  const data = await res.json();
  if (res.status === 400) {
    window.alert('Email Already Exist')    
  }
  else {
      navigation.navigate("Login")
  }
  

}