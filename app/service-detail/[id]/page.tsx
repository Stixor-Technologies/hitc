import React from "react";

interface ServiceDetailParams {
  params: {
    id: string;
  };
}

const ServiceDetail = ({ params: { id } }: ServiceDetailParams) => {
  return <div>ServicesPage:NextPage</div>;
};

export default ServiceDetail;
