import React from "react";
import Logomark from "../Assets/Logomark.png";
import { form_data } from "../data/form_data";

function inputType(el) {
  switch (el.type) {
    case "select":
      return (
        <div class="border text-start mb-5 p-2" style={{ width: "50%", margin: "auto" }}>
          <p className="text-break fs-4">{el.text}</p>
          <select
            class="form-select form-select-lg mb-3"
            aria-label=".form-select-lg example"
          >
            {el.option.map((value) => {
              return <option value={value}>{value}</option>;
            })}
          </select>
          <button class="btn btn-primary px-3" type="button">
            Ok
          </button>
        </div>
      );

    case "checkbox":
      return (
        <div class="border text-start mb-5 p-2" style={{ width: "50%", margin: "auto",}}>
          <p className="text-break fs-4">{el.text}</p>
          <ul class="list-group border-0 gap-3">
            {el.option.map((value, index) => {
              return (
                <li class="list-group-item border rounded">
                  <span className="border rounded px-2 py-1 me-2">{index}</span>
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
      );

    default:
      return (
        <div class="border text-start mb-5 p-2" style={{ width: "50%", margin: "auto" }}>
          <p class="text-break fs-4">{el.text}</p>
          <input
            class="form-control mb-3"
            type="text"
            placeholder="Default input"
            aria-label="default input example"
          />
          <button class="btn btn-primary px-3" type="button">
            Ok
          </button>
        </div>
      );
  }
}

export default function OnBorad_form() {
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
        {form_data.map((el) => inputType(el))}
      </div>
      {/* input */}
      {/* <div class="border text-start" style={{ width: "50%", margin: "auto" }}>
        <p class="text-break fs-4">loghakjfksjsadobjg</p>
        <input class="form-control mb-3" type="text" placeholder="Default input" aria-label="default input example"/>
        <button class="btn btn-primary px-3" type="button">
          Ok
        </button>
      </div> */}

      {/* select */}
      {/* <div class="text-start" style={{ width: "50%", margin: "auto" }}>
        <p>loghakjfksjsadobjg</p>
        <select
          class="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <button class="btn btn-primary px-3" type="button">
          Ok
        </button>
      </div> */}

      {/* checkbox */}
      {/* <div class="text-start" style={{ width: "50%", margin: "auto" }}>
        <p>gfyggkjehrqkwjgehkjnhdh</p>
        <ul class="list-group border-0 gap-3">
          <li class="list-group-item border rounded">
            <span className="border rounded px-2 py-1 me-2">A</span>
            First checkbox
          </li>
          <li class="list-group-item border rounded">
          <span className="border rounded px-2 py-1 me-2">A</span>
            Second checkbox
          </li>
          <li class="list-group-item border rounded">
          <span className="border rounded px-2 py-1 me-2">A</span>
            Third checkbox
          </li>
          <li class="list-group-item border rounded">
          <span className="border rounded px-2 py-1 me-2">A</span>
            Fourth checkbox
          </li>
          <li class="list-group-item border rounded">
          <span className="border rounded px-2 py-1 me-2">A</span>
            Fifth checkbox
          </li>
        </ul>
      </div> */}
      {/* true and false */}
      {/* <div class="border text-start" style={{ width: "50%", margin: "auto" }}>
        <p>gfyggkjehrqkwjgehkjnhdh</p>
        <div class="d-grid gap-2 col-2">
          <button class="btn btn-primary" type="button">
            Yes
          </button>
          <button class="btn btn-primary" type="button">
            No
          </button>
        </div>
      </div> */}
      <div
        class="d-grid gap-2 d-md-flex justify-content-md-end"
        style={{
          position: "absolute",
          bottom: "40px",
          right: "30px",
        }}
      >
        <button class="btn btn-primary" type="button">
          \
        </button>
        <button class="btn btn-primary" type="button">
          /
        </button>
        <button class="btn btn-primary" type="button">
          Truad form
        </button>
      </div>
    </div>
  );
}
