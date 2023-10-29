import React from "react";

export default function Schedule() {

  return (
<div className="overflow-x-auto mb-8">
<h1 className="text-white text-left text-3xl py-4">Måndag</h1>
  <table className="table table-xl table-pin-rows table-pin-cols mb-8">
    <thead>
      <tr className="text-left text-white text-bold bg-violet-900">
        <td className="text-lg sm:text-xl">Johan</td>
        <td className="text-lg sm:text-xl">Nils</td>
      </tr>
    </thead> 
    <tbody>
      <tr className="text-left px-4">
        <td className="text-lg sm:text-xl">PK1a: 17.00 - 18.15</td>
        <td className="text-lg sm:text-xl">PK2a: 17.15 - 18.30</td>
      </tr>
      <tr className="text-left">
        <td className="text-lg sm:text-xl">PK5a: 18.15 - 19.30</td>
        <td className="text-lg sm:text-xl">PK3a: 18.30 - 19.45</td>
      </tr>
      <tr className="text-left">
        <td className="text-lg sm:text-xl">PKA4+5: 19.30 - 20.45</td>
      </tr>
    </tbody> 
  </table>

  <h1 className="text-white text-left text-3xl py-4">Tisdag</h1>
  <table className="table table-xl table-pin-rows table-pin-cols mb-8">
    <thead>
      <tr className="text-left text-white bg-violet-900">
        <td className="text-lg sm:text-xl">Hannes</td>
        <td className="text-lg sm:text-xl">Niclas / Joel</td>
      </tr>
    </thead> 
    <tbody>
      <tr className="text-left">
        <td className="text-lg sm:text-xl">PK1b: 17.00 - 18.15</td>
        <td className="text-lg sm:text-xl">PK2b: 17.15 - 18.30</td>
      </tr>
      <tr className="text-left">
        <td className="text-lg sm:text-xl">PK3b: 18.15 - 19.30</td>
        <td className="text-lg sm:text-xl">PKA2+3: 18.30 - 19.45</td>
      </tr>
      <tr className="text-left">
        <td className="text-lg sm:text-xl">PK4a: 19.30 - 20.45</td>
      </tr>
    </tbody> 
  </table>

  <h1 className="text-white text-left text-3xl py-4">Onsdag</h1>
  <table className="table table-xl table-pin-rows table-pin-cols mb-8">
    <thead>
      <tr className="text-left text-white bg-violet-900">
        <td className="text-lg sm:text-xl">Joel</td>
      </tr>
    </thead> 
    <tbody>
      <tr className="text-left">
        <td className="text-lg sm:text-xl">PKA4+5: 17.00 - 18.15</td>
      </tr>
      <tr className="text-left">
        <td className="text-lg sm:text-xl">OG: 18.30 - 20.30</td>
      </tr>
    </tbody> 
  </table>

  <h1 className="text-white text-left text-3xl py-4">Torsdag</h1>
  <table className="table table-xl table-pin-rows table-pin-cols mb-8">
    <thead>
      <tr className="text-left text-white bg-violet-900">
        <td className="text-lg sm:text-xl">Seth</td>
        <td className="text-lg sm:text-xl">Niclas / Joel</td>
      </tr>
    </thead> 
    <tbody>
      <tr className="text-left">
        <td className="text-lg sm:text-xl">PK1a: 17.00 - 18.15</td>
        <td className="text-lg sm:text-xl">PK2a: 17.15 - 18.30</td>
      </tr>
      <tr className="text-left">
        <td className="text-lg sm:text-xl">PK3a: 18.15 - 19.30</td>
        <td className="text-lg sm:text-xl">PKV: 18.30 - 19.45</td>
      </tr>
    </tbody> 
  </table>

  <h1 className="text-white text-left text-3xl py-4">Fredag</h1>
  <table className="table table-xl table-pin-rows table-pin-cols mb-8">
    <thead>
      <tr className="text-left text-white bg-violet-900">
        <td className="text-lg sm:text-xl">Emilio</td>
        <td className="text-lg sm:text-xl">Joel</td>
      </tr>
    </thead> 
    <tbody>
      <tr className="text-left">
        <td className="text-lg sm:text-xl">PK1b: 17.00 - 18.15</td>
        <td className="text-lg sm:text-xl">PK2b: 17.15 - 18.30</td>
      </tr>
      <tr className="text-left">
        <td className="text-lg sm:text-xl">PK3b: 18.15 - 18.30</td>
        <td className="text-lg sm:text-xl">PKA2+3: 18.30 - 19.45</td>
      </tr>
    </tbody> 
  </table>

  <h1 className="text-white text-left text-3xl py-4">Lördag</h1>
  <table className="table table-xl table-pin-rows table-pin-cols mb-8">
    <thead>
      <tr className="text-left text-white bg-violet-900">
        <td className="text-lg sm:text-xl">Hannes / Joel / Niclas / Johan </td>
      </tr>
    </thead> 
    <tbody>
      <tr className="text-left">
        <td className="text-lg sm:text-xl">KPK - 11.00 - 11.45</td>
      </tr>
      <tr className="text-left">
        <td className="text-lg sm:text-xl">OG - 12.00 - 15.00</td>
      </tr>
    </tbody> 
  </table>
</div>
  );
}
