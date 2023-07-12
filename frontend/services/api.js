import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/',
});

export default {
  // Auth
  loginUser: (email, password) =>
    instance({
      method: 'POST',
      url: '/auth/login',
      data: {
        email: email,
        password: password,
      },
    }),

  registerUser: (username, email, password) =>
    instance({
      method: 'POST',
      url: '/auth/register',
      data: {
        username: username,
        email: email,
        password: password,
      },
    }),

  // USERS
  getAllUsers: (token) =>
    instance({
      method: 'GET',
      url: '/users',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  getUserById: (token, userId) =>
    instance({
      method: 'GET',
      url: `/users/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  createNewUser: (body) =>
    instance({
      method: 'POST',
      url: '/users',
      data: {
        username: body.username,
        gender: body.gender,
        role: body.role,
        email: body.email,
        handphone: body.handphone,
        birthdate: body.birthdate,
      },
    }),

  updateUser: (token, body, userId) =>
    instance({
      method: 'PATCH',
      url: `/users/${userId}`,
      data: {
        username: body.username,
        gender: body.gender,
        role: body.role,
        email: body.email,
        handphone: body.handphone,
        birthdate: body.birthdate,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  deleteUser: (token, userId) =>
    instance({
      method: 'DELETE',
      url: `/users/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  // PRODUCTS

  getAllProducts: (token) =>
    instance({
      method: 'GET',
      url: '/products',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  getProductById: (token, productId) =>
    instance({
      method: 'GET',
      url: `/products/${productId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  createNewProduct: (token, product) =>
    instance({
      method: 'POST',
      url: '/products',
      data: product,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  updateProduct: (token, productId, product) =>
    instance({
      method: 'PATCH',
      url: `/products/${productId}`,
      data: product,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  deleteProduct: (token, productId) =>
    instance({
      method: 'DELETE',
      url: `/products/${productId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  // ADDRESSES
  getAllAddresses: (token) =>
    instance({
      method: 'GET',
      url: '/addresses',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  createNewAddress: (token, addressData) =>
    instance({
      method: 'POST',
      url: '/addresses',
      data: addressData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  updateAddress: (token, addressId, addressData) =>
    instance({
      method: 'PATCH',
      url: `/addresses/${addressId}`,
      data: addressData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  deleteAddress: (token, addressId) =>
    instance({
      method: 'DELETE',
      url: `/addresses/${addressId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  // BANK ACCOUNTS
  getAllBankAccounts: (token) =>
    instance({
      method: 'GET',
      url: '/bank-accounts',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  createNewBankAccount: (token, bankAccountData) =>
    instance({
      method: 'POST',
      url: '/bank-accounts',
      data: bankAccountData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  updateBankAccount: (token, bankAccountId, bankAccountData) =>
    instance({
      method: 'PATCH',
      url: `/bank-accounts/${bankAccountId}`,
      data: bankAccountData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  deleteBankAccount: (token, bankAccountId) =>
    instance({
      method: 'DELETE',
      url: `/bank-accounts/${bankAccountId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  // TRANSACTIONS
  getAllTransactions: (token) =>
    instance({
      method: 'GET',
      url: '/transactions',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  createNewTransaction: (token, transactionData) =>
    instance({
      method: 'POST',
      url: '/transactions',
      data: transactionData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  updateTransaction: (token, transactionId, transactionData) =>
    instance({
      method: 'PATCH',
      url: `/transactions/${transactionId}`,
      data: transactionData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  getTransactionById: (token, transactionId) =>
    instance({
      method: 'GET',
      url: `/transactions/${transactionId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  deleteTransaction: (token, transactionId) =>
    instance({
      method: 'DELETE',
      url: `/transactions/${transactionId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  // TRANSACTION ITEMS
  getAllTransactionItems: (token) =>
    instance({
      method: 'GET',
      url: '/transaction-items',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  getTransactionItemById: (token, transactionItemId) =>
    instance({
      method: 'GET',
      url: `/transaction-items/${transactionItemId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  createNewTransactionItem: (token, transactionItemData) =>
    instance({
      method: 'POST',
      url: '/transaction-items',
      data: transactionItemData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  updateTransactionItem: (token, transactionItemId, transactionItemData) =>
    instance({
      method: 'PATCH',
      url: `/transaction-items/${transactionItemId}`,
      data: transactionItemData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),

  deleteTransactionItem: (token, transactionItemId) =>
    instance({
      method: 'DELETE',
      url: `/transaction-items/${transactionItemId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};
