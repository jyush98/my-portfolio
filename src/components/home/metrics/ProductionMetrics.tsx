import React from "react";
import "./ProductionMetrics.css";
import { FaCode, FaServer, FaDollarSign, FaChartLine, FaGlobe } from "react-icons/fa";

const metrics = [
  {
    icon: FaCode,
    value: "58,000+",
    label: "Lines of Production Code",
    description: "Across 123 custom React components"
  },
  {
    icon: FaServer,
    value: "92",
    label: "RESTful API Endpoints",
    description: "Scalable backend architecture"
  },
  {
    icon: FaDollarSign,
    value: "$500-10K",
    label: "Transaction Capability",
    description: "High-value luxury jewelry sales"
  },
  {
    icon: FaChartLine,
    value: "100/100",
    label: "SEO Score",
    description: "Perfect search optimization"
  },
  {
    icon: FaGlobe,
    value: "Live",
    label: "Production System",
    description: "jasonjewels.com",
    link: "https://jasonjewels.com"
  }
];

const ProductionMetrics: React.FC = () => {
  return (
    <div className="metrics-section">
      <div className="metrics-grid">
        {metrics.map((metric, index) => (
          <div key={index} className="metric-card">
            <metric.icon className="metric-icon" />
            <div className="metric-content">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-description">
                {metric.link ? (
                  <a href={metric.link} target="_blank" rel="noopener noreferrer" className="metric-link">
                    {metric.description}
                  </a>
                ) : (
                  metric.description
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductionMetrics;