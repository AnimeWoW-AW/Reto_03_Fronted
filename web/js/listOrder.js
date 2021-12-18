

function pintarRespuesta(respuesta) {
  // debugger
  $("#ListOrders").empty();

  let myTable = `
<table class='table table-sm table-responsive' style="height: auto; width: auto">
    <thead>
        <th style='width: auto; background-color: #f58003; color: white; ' scope='col'
            align='center'>
            <center>Identificacion</center>
        </th>

        <th style='width: auto; background-color: #f58003; color: white;' scope='col'
            align='center'>
            <center>Nombre</center>
        </th>

        <th style='width: 30%; background-color: #f58003; color: white; line-height: 100%'
            scope='col' align='center'>
            <center>Email</center>
        </th>

        <th style='width: 30%; background-color: #f58003; color: white; line-height: 100%'
            scope='col' align='center'>
            <center>Fecha</center>
        </th>

        <th style='width: auto; background-color: #f58003; color: white; line-height: 100%'
        scope='col' align='center'>
            <center>No. Orden</center>
        </th>

        <th style='width: auto; background-color: #f58003; color: white; line-height: 100%'
        scope='col' align='center'>
            <center>Estado</center>
        </th>

      
        <th style='width: auto; background-color: #f58003; color: white; line-height: 100%'
        scope='col' align='center'>
            <center>Vista</center>
        </th>
    </thead>
`;

  if (respuesta.length < 1) {
    myTable += "<td scope='row'>" + "No hay Ordenes" + "</td>";
    myTable += "</tr>";
  }
  else {
    // debugger
    for (i = 0; i < respuesta.length; i++) {

      myTable += "<td align='center'>" + respuesta[i].salesMan.identification + "</td>";
      myTable += "<td align='center'>" + respuesta[i].salesMan.name + "</td>";
      myTable += "<td align='center'>" + respuesta[i].salesMan.email + "</td>";
      myTable += "<td align='center'>" + respuesta[i].registerDay + "</td>";
      myTable += "<td align='center'>" + respuesta[i].id + "</td>";
      myTable += "<td align='center'>" + respuesta[i].status + "</td>";


      myTable += "<td align='center'><button class='btn btn-outline-success nc-icon nc-alert-circle-i' onclick='consultOrder(" + respuesta[i].id + ")'> </td>";



      myTable += "</tr></tbody>";

      myTable += "</tr>";

    }
  }
  myTable += "</table>";
  $("#ListOrders").append(myTable);
}


function pintarDetalle(respuesta) {
  // debugger
  $("#ListOrders").empty();

  // debugger
  let myTable = `
    <center><h4>DETALLE DEL PEDIDO</h4></center> <br>`;

  myTable += `
<table class='table table-sm table-responsive' style="height: auto; width: auto">
    <thead>
        <th style='width: 10%; background-color: #f58003; color: white; ' scope='col'
            align='center'>
            <center>Fecha</center>
        </th>

        <th style='width: 10%; background-color: #f58003; color: white;' scope='col'
            align='center'>
            <center>No. Orden</center>
        </th>

        <th style='width: 10%; background-color: #f58003; color: white; line-height: 100%'
            scope='col' align='center'>
            <center>Estado</center>
        </th>

        <th style='width: auto; background-color: #f58003; color: white; line-height: 100%'
            scope='col' align='center'>
            <center>Cambio Estado</center>
        </th>

        <th style='width: auto; background-color: #f58003; color: white; line-height: 100%'
        scope='col' align='center'>
            <center>Guardar</center>
        </th>
       
    </thead>
`;

  myTable += "<td align='center'>" + respuesta.registerDay + "</td>";
  myTable += "<td align='center'>" + respuesta.id + "</td>";
  myTable += "<td align='center'>" + respuesta.status + "</td>";
  myTable += `
      <td align='center'>
        <select class="form-control" name="status" id="status"  >
          <option value="Aproved">
            Aproved
          </option>
          <option value="Rejected">
            Rejected
          </option>
        </select>      
      </td>`;

  myTable += "<td align='center'><button class='btn btn-outline-info nc-icon nc-bag-16' onclick='updateOrder(" + respuesta.id + ")'> </button></td>";

  myTable += "</tr></tbody>";
  myTable += "</tr>";
  myTable += "</table>";
  $("#ListOrders").append(myTable);

  pintarDetalleOrden(respuesta)
}


function pintarDetalleOrden(respuesta) {
  // debugger
  let myTable = `<br><br>
  <h4>Productos asociados a la orden de pedido No.`

  myTable += respuesta.id +
    `</h4>`;



  myTable += `
<table class='table table-sm table-responsive' style="height: auto; width: auto">
    <thead>
        <th style='width: auto; background-color: #f58003; color: white; ' scope='col'
            align='center'>
            <center>Referencia</center>
        </th>

        <th style='width: auto; background-color: #f58003; color: white; ' scope='col'
            align='center'>
            <center>Fotografia</center>
        </th>

        <th style='width: auto; background-color: #f58003; color: white;' scope='col'
            align='center'>
            <center>Marca</center>
        </th>

        <th style='width: auto; background-color: #f58003; color: white; line-height: 100%'
            scope='col' align='center'>
            <center>Categoria</center>
        </th>

        <th style='width: auto; background-color: #f58003; color: white; line-height: 100%'
            scope='col' align='center'>
            <center>Presentacion</center>
        </th>

        <th style='width: auto; background-color: #f58003; color: white; line-height: 100%'
            scope='col' align='center'>
            <center> Descripcion</center>
        </th>

        <th style='width: auto; background-color: #f58003; color: white; line-height: 100%'
            scope='col' align='center'>
            <center> Disponibilidad</center>
        </th>

        <th style='width: auto; background-color: #f58003; color: white; line-height: 100%'
        scope='col' align='center'>
            <center>Precio</center>
        </th>

        <th style='width: auto; background-color: #f58003; color: white; line-height: 100%'
        scope='col' align='center'>
            <center>Cantidad</center>
        </th>
      
        <th style='width: auto; background-color: #f58003; color: white; line-height: 100%'
        scope='col' align='center'>
            <center>Stock</center>
        </th>
    </thead>
`;

  if (respuesta.products.length < 1) {
    myTable += "<td scope='row'>" + "No hay Ordenes" + "</td>";
    myTable += "</tr>";
  }
  else {
    // debugger

    for (i = 0; i < Object.values(respuesta.products).length; i++) {
      debugger
      myTable += "<td align='center'>" + Object.values(respuesta.products)[i].reference + "</td>";
      myTable += "<td align='center'>" + Object.values(respuesta.products)[i].photography + "</td>";
      myTable += "<td align='center'>" + Object.values(respuesta.products)[i].brand + "</td>";
      myTable += "<td align='center'>" + Object.values(respuesta.products)[i].category + "</td>";
      myTable += "<td align='center'>" + Object.values(respuesta.products)[i].presentation + "</td>";
      myTable += "<td align='center'>" + Object.values(respuesta.products)[i].description + "</td>";
      myTable += "<td align='center'>" + Object.values(respuesta.products)[i].availability + "</td>";
      myTable += "<td align='center'>" + Object.values(respuesta.products)[i].price + "</td>";
      myTable += "<td align='center'>" + Object.values(respuesta.products)[i].quantity + "</td>";
      myTable += "<td align='center'>" + Object.values(respuesta.products)[i].quantity + "</td>";
      myTable += "</tr></tbody>";

      myTable += "</tr>";

    }
  }
  myTable += "</table>";
  $("#ListOrders").append(myTable);
}


async function autoInicioOrdenes() {
  try {
    const url = 'http://localhost:8080/api/order/zona/' + sessionStorage.getItem('zona')

    const response = await fetch(url);
    const responseJson = await response.json();
    pintarRespuesta(responseJson);
    // debugger

  } catch (error) {
    console.log("error:", error)
  }
}


async function consultOrder(id) {
  $("#ListOrders").empty();
  debugger

  try {

    // debugger
    const url = 'http://localhost:8080/api/order/' + id
    // console.log(url)
    const response = await fetch(url);
    const json = await response.json();

    pintarDetalle(json)
  } catch (error) {
    console.log("error:", error)
  }

}



async function updateOrder(id) {

  try {
    const urlUpdate = 'http://localhost:8080/api/order/update'

    const fetchOptions = {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        status: $("#status").val()
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    const responseUpdate = await fetch(urlUpdate, fetchOptions);
    const responseConvertedUpdate = await responseUpdate.json();
    window.location.href = "/ListOrder.html";

    alert("Actualizacion Correcta");

  } catch {
    window.location.reload()
    alert("No guardado correctamente, Intente de nuevo ");
  }


}


