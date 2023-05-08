
// Example First Level Update in Server

  const ProfileSave = async () => {

    try {

      const res = await fetch(`https://aufcart.com/api/editProfil/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          sname, name, phone, email
        })
      })

      const data2 = await res.json();
      if (!data2) {
        window.alert('error in get data2');
      }
      else {
        setdata(data2);
        confirmbox()
      }


    } catch (e) {
      window.alert("Something Went Wrong")
    }
  }
