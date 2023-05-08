// you can change parameter as you want to get data

const getdata = async () => {

    try {
      const res = await fetch(`https://aufcart.com/api/getuser/${id}/${obid}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })

      const data = await res.json();
      if (!data) {
        window.alert('error in get data')
      }
      else {
        console.log(data)
      }

    } catch (e) {
      window.alert("Something Went Wrong")
    }
  }