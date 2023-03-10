import { variables } from "./variables.js";


const transporter = nodemailer.createTransport({
    host: variables.emailConfig.host,
    port: 587,
    secure: false,
    auth: {
      user: variables.emailConfig.user,
      pass: variables.emailConfig.pass
    }
  })
  
  export const sendEmail = async (to, subject, text, html) => {
    transporter.sendMail({
      from: '"Coder App 💻" <app@coder.com>',
      to:
        to === 'admin' // generates string to include all admins
          ? variables.admins.reduce((acc, cur) => (acc ? acc + ',' + cur : cur), '')
          : to,
      subject,
      text,
      html
    })
  }
  
  export const generateAdminEmail = (userData, orderData) => {
    return `Recibiste una orden:\nId de la orden: ${orderData.id}\nUsuario: ${
      userData.email
    }\nFecha: ${new Date(
      orderData.createdAt
    ).toLocaleString()}\nProductos:\n${orderData.prods.reduce(
      (acc, cur, i) =>
        `${acc ? acc + '\n' : acc}-------------------------\n#${i + 1}\nId: ${
          cur.prod.id
        }\nNombre: ${cur.prod.name}\nCantidad: ${cur.cant}\nPrecio por unidad: $${
          cur.prod.price
        }\nPrecio total: $${cur.cost}`,
      ``
    )}`
  }
  
  export const generateUserEmail = (orderData) => {
    return `Recibimos tu orden!\nId de la orden: ${
      orderData.id
    }\nFecha: ${new Date(
      orderData.createdAt
    ).toLocaleString()}\nProductos:\n${orderData.prods.reduce(
      (acc, cur, i) =>
        `${acc ? acc + '\n' : acc}-------------------------\n#${i + 1}\nId: ${
          cur.prod.id
        }\nNombre: ${cur.prod.name}\nCantidad: ${cur.cant}\nPrecio por unidad: $${
          cur.prod.price
        }\nPrecio total: $${cur.cost}`,
      ``
    )}`
  }