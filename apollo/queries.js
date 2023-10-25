import { gql } from '@apollo/client'

const EMAIL_CONFIRMATION = gql`
query($tokenBody:String!){
  EmailConfirmation(tokenBody:$tokenBody) {
    message
    status
    response{verifiedAccount gender _id userType userID firstname lastname email phonenumber }
  }
}
`
const GET_ROLES = gql`
query {roles {roleName}}
`
// users 
let GET_USERS = gql`
query {
  getUsers { message response {      
     verifiedAccount
      gender
      _id
      userType
      phonenumber
      userID
      firstname
      lastname
      email
      joinedAt}
  }
}
`
let GET_USER = gql`
query($id: String!) {
  getUser (id:$id){ message response {  verifiedAccount
      gender
      _id
      userType
      phonenumber
      userID
      firstname
      lastname
      email
      joinedAt}}
}
`
let GET_USERS_BY_EMAIL = gql`
query($email:String!){
  getUserByEmail(email:$email){message response{email lastname firstname}}
}`
const GET_PRODUCTS = gql`
query($category:String!){
  getProducts(category:$category) {
    message
    response {
      category
      _id
      name
      image
      code
      collectionType
      discount
      description
      codePolicy
      freeReturn
      price
      discountedPrice
      deliveryBy
      shippingAvailablty
      reviews {
        username
        reviewDate
        comment
        rating
      }
      size {
        size
        qty
      }
    }
  }
}
`
const GET_CHART_DATA = gql`
query{
  getChartData {
    message
    cartData {
      _id
      user
      totalCount
      totalPrice
    }
    wishlistData {
      _id
      user
      totalCount
      totalPrice
    }
    prodcutsData {
      category
      reviews{
        username reviewDate comment rating
      }
    }
    usersData{
      verifiedAccount
      gender
      _id
      userType
      phonenumber
      userID
      firstname
      lastname
      email
      joinedAt
    }
  ordersData{
    orderStatus
  }
  }
}
`
const GET_ADMIN = gql`
query($adminId:String!){
  getAdmin(adminId:$adminId) {
    message
    response{email username walletBalance}
  }
}
`
const GET_ONE_PRODUCT = gql`
query($productId:String!){
  getOneProduct (productId:$productId) {
    message
    response {
      _id
      category
      name
      image
      code
      collectionType
      discount
      description
      codePolicy
      freeReturn
      price
      discountedPrice
      color
      deliveryBy
      shippingAvailablty
      numReview
      reviews {
        username
        reviewDate
        comment
        rating
      }
      size {
        size
        qty
      }
    }
  }
}
`
// Cart Item and Wish List Item based on the query key 
const GET_ITEMS = gql` 
query($userId: String! $queryKey: String!){
    getItems(userId: $userId queryKey:$queryKey) {
    message
    response{
      _id
      user
      totalCount
      totalPrice
      couponUsed
      discountedTotalPrice
      savingsAmount
      items{
         _id 
         color
        subtotal
        discountedPrice
        price
        description
        productId
        size
        quantity
        name
        image
      }
    }
    }
} 
`
const GET_CURRENT_USER = gql`
query($userId:String!){
  getCurrentUser(userId:$userId) {
    message
    status
    response {
      verifiedAccount
      gender
      _id
      userType
      phonenumber
      userID
      firstname
      lastname
      email
      wallet
      role {
        roleName
      }
      address {
        addressName
      }
      cart {
        totalCount
        totalPrice
      }
      wishlist {
        totalCount
        items{
         _id
        subtotal
        price
        description
        productId
        size
        quantity
        name
        image
      }
      }
      order {
        _id  orderStatus
      }
    }
  }
}
`
const GET_NOTIFICATIONS = gql`
query($userId:String!){
  getNotifications(userId:$userId) {
    message
    response {
      _id
      avatar
      userId
      title
      isUnRead
      notificationID
      name
      description
      status
      createdAt
    }
  }
}
`
const GET_ORDERS = gql`
query($userId:String!){
  getUserOrders(userId:$userId) {
    message
    response{
      _id
      paymentMethod
      totalPrice
      orderDate
      updatedAt
      shipTo
      orderID
      orderStatus
    }
  }
}
`
const GET_ONE_ORDER = gql`
query($orderId:String!){
  getOneOrder(orderId:$orderId) {
    message
    response{
      _id
      totalPrice
      orderDate
      updatedAt
      shipTo
      orderID
      orderStatus
    }
  }
}
`
const GET_ALL_ORDERS = gql`
query{
  getAllOrders {
    message
    response{
      _id
      user
      totalPrice
      orderDate
      updatedAt
      shipTo
      orderID
      orderStatus
    }
  }
}
`
const GET_ADDRESS = gql`
query($userId:String!){
  getAddress(userId:$userId) {
    message
    response{
      defaultAddress
      addressNumber
      addressLine
      addressName
      city
      zipCode
      _id
    }
  }
}
`

export {
  GET_ROLES, GET_USER, GET_USERS, GET_USERS_BY_EMAIL, EMAIL_CONFIRMATION, GET_CURRENT_USER,


  GET_NOTIFICATIONS,

  GET_PRODUCTS, GET_ONE_PRODUCT,

  GET_CHART_DATA, GET_ADMIN,

  GET_ITEMS, GET_ADDRESS,

  GET_ORDERS, GET_ALL_ORDERS, GET_ONE_ORDER
}