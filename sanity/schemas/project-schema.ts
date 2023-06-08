const tarjetaSchema = {
  name: "tarjeta",
  title: "Tarjeta",
  type: "document",

  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
      inputComponent: "email",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "terms",
      title: "Terms",
      type: "boolean",
    },
  ],
};

export default tarjetaSchema;
