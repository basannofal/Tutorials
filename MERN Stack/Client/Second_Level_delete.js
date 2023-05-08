
  const Deletecustomer = async () => {
    alertvisible()
    try {
      const mainid = route.params.id
      const objectid = route.params.obid
      const res = await fetch(`https://aufcart.com/api/customerdelete/${mainid}/${objectid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
      })

      const data = await res.json();
      if (!data) {
        window.alert('error in get data')
      }
      else {
        navigation.navigate("Home", {
          id: id
        })
      }

    } catch (e) {
      window.alert("Something Went Wrong")
    }
  }