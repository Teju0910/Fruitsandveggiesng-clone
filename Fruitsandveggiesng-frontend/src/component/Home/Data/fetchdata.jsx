import axios from "axios";
import { Alert, WishAlert } from "../../Products/Minicomponents";

export const getdata = async (setdata) => {
  await axios({
    url: "http://localhost:8080/fruits",
    method: "get",
    params: {
      q: "Fruits",
    },
  })
    .then((res) => {
      setdata(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const getsingleproduct = async (id, setdata) => {
  console.log(id, "id");
  await axios({
    url: `http://localhost:8080/fruits/${id}`,
    method: "get",
  })
    .then((res) => {
      setdata(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const addtocart = async (pro) => {
  await axios({
    url: "http://localhost:8080/cartdata",
    method: "post",
    data: pro,
  })
    .then((res) => {
      alert("Added To Cart");
    })
    .catch((err) => {
      alert("Already Added in Cart");
    });
};

export const deletecart = async (id) => {
  await axios
    .delete(`http://localhost:8080/cartdata/${id}`)
    .then(() => alert("Removed from Cart"));
};

export const getcartdata = async (setcart, setcartcount) => {
  await axios({
    url: "http://localhost:8080/cartdata",
    method: "get",
  })
    .then((res) => {
      setcartcount(res.data.length);
      setcart(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const getwishlistdata = async (setfavourite, setfavcount) => {
  await axios({
    url: "http://localhost:8080/wishlist",
    method: "get",
  })
    .then((res) => {
      setfavourite(res.data);
      setfavcount(res.data.length);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const modifiywishlist = async (id, pro) => {
  console.log(pro, "midifi");

  await axios
    .post(`http://localhost:8080/fruits/${id}`, pro)
    .then((res) => {
      //   console.log(res);
      // alert("Removed from Favourite");
    })
    .catch((err) => {
      // alert("Error", err);
    });
};

export const deletewishlist = async (id) => {
  await axios
    .delete(`http://localhost:8080/wishlist/${id}`)
    .then(() => alert("Removed from Favourite"));
};

export const addtowishlist = async (pro) => {
  console.log(pro, "jo");
  await axios({
    url: "http://localhost:8080/wishlist",
    method: "post",
    data: pro,
  })
    .then((res) => {
      //   console.log(res);
      alert("Added in Favourite");
      // <WishAlert />;
    })
    .catch((err) => {
      alert("Already Added in Favourite");
    });
};
