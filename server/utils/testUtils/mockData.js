import range from 'lodash/range';
import faker from 'faker';
import { createPassword } from '../passwordUtils';
const createdBefore = parseInt(Math.random() * 1000);

export const addressesTable = range(1, 10).map((_, index) => ({
  id: (index + 1).toString(),
  address1: faker.address.streetName(),
  address2: faker.address.streetAddress(),
  city: faker.address.city(),
  country: faker.address.country(),
  latitude: faker.address.latitude(),
  longitude: faker.address.longitude()
}));

export const usersTable = range(1, 10).map((_, index) => ({
  id: (index + 1).toString(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: createPassword(faker.internet.password()),
  created_at: faker.date.recent(createdBefore)
}));

export const productsTable = range(1, 10).map((_, index) => ({
  id: (index + 1).toString(),
  name: faker.commerce.productName(),
  category: 'Sports',
  amount: faker.commerce.price()
}));

export const purchasedProductsTable = range(1, 10).map((_, index) => ({
  id: (index + 1).toString(),
  productId: (index + 1).toString(),
  price: 500,
  discount: faker.datatype.number(20),
  deliveryDate: faker.date.recent(createdBefore),
  storeId: (index + 2).toString()
}));

export const storesTable = range(1, 10).map((_, index) => ({
  id: (index + 1).toString(),
  name: faker.company.companyName(),
  addressId: index + 1
}));

export const storeProductsTable = range(1, 10).map((_, index) => ({
  id: (index + 1).toString(),
  productId: index + 1,
  storeId: index + 1
}));

export const suppliersTable = range(1, 10).map((_, index) => ({
  id: (index + 1).toString(),
  name: faker.company.companyName(),
  addressId: index + 1
}));

export const supplierProductsTable = range(1, 10).map((_, index) => ({
  id: (index + 1).toString(),
  productId: index + 1,
  supplierId: index + 1
}));
