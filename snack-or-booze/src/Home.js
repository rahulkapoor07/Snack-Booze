import React from "react";
import { Card, CardBody, CardTitle, Table } from "reactstrap";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <div>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            </div>
            <Table>
      <thead style = {{color : "white"}}>
        <tr>
          <th>Type</th>
          <th>Snacks</th>
          <th>Drinks</th>
        </tr>
      </thead>
      <tbody style = {{color : "white"}}>
        <tr>
          <th scope="row">Numbers</th>
          <td>{(()=> snacks.length)()}</td>
          <td>{(()=> drinks.length)()}</td>
        </tr>
      </tbody>
    </Table>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
