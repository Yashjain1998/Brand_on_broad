import React, { useState } from "react";
import Logomark from "../Assets/Logomark.png";
import { form_data } from "../data/form_data";

function inputType(el, handleFormChange, handlepropertychange, form) {
  switch (el.type) {
    case "select":
      return (
        <div className="border text-start mb-5 p-2" style={{ width: "50%", margin: "auto" }}>
          <p className="text-break fs-4">{el.text}</p>
          <select
            className="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
            name={el.name}
          >
            <option disabled>{el.placeholder}</option>
            {el.option.map((value) => {
              return <option value={value}>{value}</option>;
            })}
          </select>
          {/* <button className="btn btn-primary px-3" type="button">
            Ok
          </button> */}
        </div>
      );

    case "checkbox":
      return (
        <div className="border text-start mb-5 p-2" style={{ width: "50%", margin: "auto",}}>
          <p className="text-break fs-4">{el.text}</p>
          <ul className="list-group border-0 gap-3">
            {el.option.map((value, index) => {
              return (
                <li className="list-group-item border rounded" onClick={()=>handlepropertychange(el.name, value)}>
                  <span className={form.campaign === value? "border rounded px-2 py-1 me-2 border-primary" : "border rounded px-2 py-1 me-2"}>{index}</span>
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
      );
    
      case "Boolean":
        return (
            <div className="border text-start mb-5 p-2" style={{ width: "50%", margin: "auto" }}>
            <p className="text-break fs-4">{el.text}</p>
            <div className="d-grid gap-2 col-2">
              <button className="btn btn-primary" type="button" onClick={()=>handlepropertychange(el.name, true)}>
                Yes
              </button>
              <button className="btn btn-primary" type="button" onClick={()=>handlepropertychange(el.name, false)}>
                No
              </button>
            </div>
          </div>
        );
    default:
      return (
        <div className="border text-start mb-5 p-2" style={{ width: "50%", margin: "auto" }}>
          <p className="text-break fs-4">{el.text}</p>
          <input
            className="form-control mb-3"
            type="text"
            placeholder={el.placeholder}
            name={el.name}
            aria-label="default input example"
            onChange={(e) => handleFormChange(e)}
          />
          {/* <button className="btn btn-primary px-3" type="button">
            Ok
          </button> */}
        </div>
      );
  }
}

export default function OnBorad_form() {
  const [form, setForm] = useState({})

  const handleFormChange = (e) => {
    setForm((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  const handlepropertychange=(key, value)=>{
    setForm((prev) => ({...prev, [key]: value}))
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4001", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          'Content-Type' : "application/json"
        }
      })

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }  
  }

  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        height: "99.98vh",
        position: "relative",
      }}
    >
      <div
        style={{
          margin: "auto",
          width: "200px",
          textAlign: "center",
          paddingBock: "1.4rem",
          marginBottom: "5%",
        }}
      >
        <img
          src={Logomark}
          alt="TruAd Logo"
          style={{
            width: "50%",
            objectFit: "fill",
          }}
        />
      </div>
      <div
        style={{
          height: "70%",
          overflowY: "auto",
        }}
      >
        {form_data.map((el) => inputType(el, handleFormChange, handlepropertychange, form))}
      </div>
      {/* input */}
      {/* <div className="border text-start" style={{ width: "50%", margin: "auto" }}>
        <p className="text-break fs-4">loghakjfksjsadobjg</p>
        <input className="form-control mb-3" type="text" placeholder="Default input" aria-label="default input example"/>
        <button className="btn btn-primary px-3" type="button">
          Ok
        </button>
      </div> */}

      {/* select */}
      {/* <div className="text-start" style={{ width: "50%", margin: "auto" }}>
        <p>loghakjfksjsadobjg</p>
        <select
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button className="btn btn-primary px-3" type="button">
          Ok
        </button>
      </div> */}

      {/* checkbox */}
      {/* <div className="text-start" style={{ width: "50%", margin: "auto" }}>
        <p>gfyggkjehrqkwjgehkjnhdh</p>
        <ul className="list-group border-0 gap-3">
          <li className="list-group-item border rounded">
            <span className="border rounded px-2 py-1 me-2">A</span>
            First checkbox
          </li>
          <li className="list-group-item border rounded">
          <span className="border rounded px-2 py-1 me-2">A</span>
            Second checkbox
          </li>
          <li className="list-group-item border rounded">
          <span className="border rounded px-2 py-1 me-2">A</span>
            Third checkbox
          </li>
          <li className="list-group-item border rounded">
          <span className="border rounded px-2 py-1 me-2">A</span>
            Fourth checkbox
          </li>
          <li className="list-group-item border rounded">
          <span className="border rounded px-2 py-1 me-2">A</span>
            Fifth checkbox
          </li>
        </ul>
      </div> */}
      {/* true and false */}
      {/* <div className="border text-start" style={{ width: "50%", margin: "auto" }}>
        <p>gfyggkjehrqkwjgehkjnhdh</p>
        <div className="d-grid gap-2 col-2">
          <button className="btn btn-primary" type="button">
            Yes
          </button>
          <button className="btn btn-primary" type="button">
            No
          </button>
        </div>
      </div> */}
      <div
        className="d-grid gap-2 d-md-flex justify-content-md-end"
        style={{
          position: "absolute",
          bottom: "40px",
          right: "30px",
        }}
      >
        <button className="btn btn-primary" type="button">
          \
        </button>
        <button className="btn btn-primary" type="button">
          /
        </button>
        <button className="btn btn-primary" type="button" onClick={handleSubmit}>
          Truad form
        </button>
      </div>
    </div>
  );
}
