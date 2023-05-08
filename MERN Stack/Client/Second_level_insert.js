// Check backend code in server second level insert



const postdata = async () => {

    // 63064232cf92b07e37090e0a
    toggleModalVisibility()
    try {
      const data = { cname, cphone, ccity, caddress, cemail, checked }

      const res = await fetch(`https://aufcart.com/api/Newcustomer/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          cname, cphone, optcphone, ccity, caddress, cemail, checked
        })
      })

      const data2 = await res.json();
      
      if (!data2) {
      }
      else {
        setdata(data2);
        navigation.navigate("Home")
      }


    } catch (e) {
      window.alert("SomeThing Went Wrong")
    }

  }