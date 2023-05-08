// update customer data in database you can check in server second level update.js file
  const ProfileSave = async () => {

    try {

      const res = await fetch(`https://aufcart.com/api/editProfil/${id}/${obid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cname, ccity, cphone, optcphone, cemail, caddress
        })
      })

      const data2 = await res.json();
      if (!data2) {
        window.alert('error in get data2');
      }
      else {
        setdata(data2);
        Gohome()
      }


    } catch (e) {
      window.alert("Something Went Wrong")
    }
  }
