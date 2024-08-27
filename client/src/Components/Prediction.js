import React from "react";
import { Bar } from "react-chartjs-2";
import "./Prediction.css";


export default class Prediction extends React.Component {
  getChartData = () => {
    return {
      labels: [
        "Extraversión",
        "Neuroticismo",
        "Amabilidad",
        "Responsabilidad",
        "Apertura",
      ],
      datasets: [
        {
          label: "Concordancia de Rasgos",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: this.props.location?.state?.averages || [0, 0, 0, 0, 0], // Valores por defecto
        },
      ],
    };
  };

  render() {
    const { trait } = this.props.location?.state || {}; // Validar trait con valor por defecto

    return (
      <section>
        <div className="buckle-up">
          Aquí hay una breve información sobre tu personalidad
        </div>
        <div className="rating-scale">
          <h4 className="dominant">Cluster</h4>
          <div className="rating">
            <span>{trait || "Información no disponible"}</span>
          </div>
        </div>
        <div id="predict">
          <Bar
            className="bar-chart"
            data={this.getChartData()}
            options={{
              title: {
                display: true,
                text: "Rasgos Promedio de Personalidad",
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
          <Bar
            className="bar-chart-horizontal"
            data={this.getChartData()}
            options={{
              title: {
                display: true,
                text: "Rasgos Promedio de Personalidad",
              },
              indexAxis: "y", // Gráfico en orientación horizontal
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
        <h2 className="cluster-heading" style={{ textAlign: "center" }}>
          Todos los Clusters
        </h2>
        <Table />
      </section>
    );
  }
}





