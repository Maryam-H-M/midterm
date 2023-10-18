import React, { useState } from "react";
import "./addProduct.css";

export default function AddProduct() {
    const [formData, setFormData] = useState({
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: ""
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Name: ${formData.name},
       Description: ${formData.description},
       Category: ${formData.category},
       Quantity: ${formData.quantity},
       Price: ${formData.price}`
    );
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className= "addProduct__text" htmlFor="name">
        Name:
      </label>
      <input
        type="text"
        id="name"
        className= "addProduct__text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label className= "addProduct__text" htmlFor="description">
        Description:
      </label>
      <input
        type="text"
        id="description"
        className= "addProduct__text"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label className= "addProduct__text" htmlFor="category">
        Category:
      </label>
      <input
        type="text"
        id="category"
        className= "addProduct__text"
        name="category"
        value={formData.name}
        onChange={handleChange}
      />

      <label className= "addProduct__text" htmlFor="quantity">
        Quantity:
      </label>
      <input
        type="text"
        id="quantity"
        className= "addProduct__text"
        name="quantity"
        value={formData.name}
        onChange={handleChange}
      />

      <label  className= "addProduct__text" htmlFor="price">
        Price:
      </label>
      <input
        type="text"
        id="price"
        className= "addProduct__text"
        name="price"
        value={formData.name}
        onChange={handleChange}
      />

      <button  className= "addProduct__button" type="submit">
        Submit
      </button>

      <button  className= "addProduct__button" type="cancel">
        Cancel
      </button>

    </form>
  );
}
