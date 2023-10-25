import { gql } from '@apollo/client'

const ADMIN_SIGNIN_MUTATION = gql`
mutation adminLogin($email: String!, $password: String!) {
  adminLogin(reqBody:{email: $email, password: $password}) {
      token
      message
      status
      response{username  email _id }}
  }
`;
const SIGNIN_MUTATION = gql`
mutation singin($email: String!, $password: String!) {
    singin(reqBody:{email: $email, password: $password}) {
      token
      message
      status
      response{verifiedAccount gender _id userType userID firstname lastname email phonenumber }}
  }
`;
const ADD_PRODUCT_MUTATION = gql`
mutation addProducte(
  $name: String!
  $color: String
  $category: String!
  $deliveryBy: DateTime!
  $size: [SizesInput!]
  $image: String!
  $collectionType: Float!
  $code: String!
  $description: String!
  $price: Float
  $discount: Float
  $shippingAvailablty: String!
) {
    addProducte(reqBody:{
      name: $name,
      price:$price,
      description: $description,
      color:$color,
      image: $image,
      discount: $discount,
      category: $category,
      collectionType: $collectionType,
      code: $code,
      size:$size,
      deliveryBy:$deliveryBy,
      shippingAvailablty:$shippingAvailablty
      }) {
      message
      status
     # response{verifiedAccount gender _id userType userID firstname lastname email phonenumber }
      }
  }
`;
const DELETE_USER = gql`
mutation deleteUser($userId:String!)
{ deleteUser(userId:$userId) {  message }}
`
const UPDATE_PRODUCT = gql`
mutation updateProduct(
  $productId: String!
  $name: String!
  $color: String
  $category: String!
  $deliveryBy: DateTime!
  $size: [SizesInput!]
  $image: String!
  $collectionType: Float!
  $code: String!
  $description: String!
  $price: Float
  $discount: Float
  $shippingAvailablty: String!
) {
  updateProduct(
      productId: $productId,
      reqBody:{
      name: $name,
      price:$price,
      description: $description,
      color:$color,
      image: $image,
      discount: $discount,
      category: $category,
      collectionType: $collectionType,
      code: $code,
      size:$size,
      deliveryBy:$deliveryBy,
      shippingAvailablty:$shippingAvailablty
      }) {
      message
      status
      }
  }
`;
const DELETE_PRODUCT = gql`
mutation deleteProduct($productId:String!)
{ deleteProduct(productId:$productId) {  message }}
`
const SIGNUP_MUTATION = gql`
    mutation singup(
        $email:String!
        $gender:Float!
        $password:String!
        $firstname: String!
        $lastname: String!
        $phonenumber: Float!
        $customerType: Boolean!
    )
    
    {
        singup(
            reqBody:{
                email:$email
                gender:$gender
                password:$password
                firstname:$firstname
                lastname:$lastname
                phonenumber:$phonenumber
                customerType:$customerType
            }
        )
        {
        message
    status
    statusCode
        response{
          _id
          firstname
        }
    }
    }
`
const CREATE_USER = gql`
    mutation updateUser(
        $email:String!
        $gender:Float!
        $password:String!
        $firstname: String!
        $lastname: String!
        $phonenumber: Float!
        $customerType: Boolean!
    )
    
    {
        updateUser(
            reqBody:{
                email:$email
                gender:$gender
                password:$password
                firstname:$firstname
                lastname:$lastname
                phonenumber:$phonenumber
                customerType:$customerType
            }
        )
        {
        message status statusCode
        response{ _id firstname }
    }
    }
`
const UPDATE_USER = gql`
    mutation updateUser(
        $userId:String!
        $email:String!
        $gender:Float!
        $password:String
        $firstname: String!
        $lastname: String!
        $phonenumber: Float!
    )
    {
        updateUser(
          userId:$userId
            reqBody:{
                email:$email
                gender:$gender
                password:$password
                firstname:$firstname
                lastname:$lastname
                phonenumber:$phonenumber
            }
        )
        {
        message status statusCode
    }
    }
`
const SEND_OTP = gql`
mutation sendOtp($email:String!)
{ sendOtp(email:$email) { message response}}
`
const VERIFY_OTP = gql`
mutation verifyOTP($email:String!,$otp:String!)
{ verifyOTP(reqBody:{ email:$email, otp:$otp }) { message }}
`
const RESET_PASSWORD = gql`
mutation resetPassword($email:String!,$newPassword:String!,$confirmPassword:String!)
{ resetPassword(email:$email, passwordBody:{ newPassword: $newPassword confirmPassword: $confirmPassword }){message}}
`
const CHANGE_PASSWORD = gql`
mutation changesPassword( $email:String! $newPassword:String! $currentPassword:String! $confirmPassword:String! )
{ changesPassword( email:$email, passwordBody:{ newPassword: $newPassword currentPassword: $currentPassword confirmPassword: $confirmPassword } )
  {message}
}
`
const RESEND_CONFIRMATION = gql`
mutation resendConfirmation($userId:String!){ 
  resendConfirmation(userId:$userId) { message status response { _id firstname gender } } }
`
const UPDATE_EMAIL = gql`
mutation updateEmail($userId:String!  $email:String!)
{ updateEmail(userId:$userId  email:$email) { message status }}
`
const UPDATE_PROFILE = gql`
mutation updateProfile(
        $id:String!
        $email:String
        $firstname: String
        $lastname: String
        $phonenumber: Float!
        $gender: Float!
)
{
    updateProfile(
        id:$id
        reqBody:{
        email: $email,
        firstname:$firstname,
        lastname:$lastname,
        phonenumber: $phonenumber,
        gender:$gender,
    }) {
      message
      }
}
`
const ADD_NOTIFICATION = gql`
mutation addNotification(
      $userId:String!
      $status: Float!
      $firstname: String!
)
{
    addNotification(
    reqBody:{
      userId: $userId
      status:  $status
      firstname:  $firstname
    })
    {
        message
    }
}
`
const DELETE_MULTI_NOTIFICATIONS = gql`
mutation deleteMultiNotifications($IDsArray:[NotificationUserIDsInput!])
{
    deleteMultiNotifications(
    reqBody:{
        IDsArray:$IDsArray
    }) 
    {  message }
}
`
const DELETE_NOTIFICATION = gql`
mutation deleteNotification($notificationID:String!)
{ deleteNotification(notificationID:$notificationID) {  message }}
`
const DELETE_NOTIFICATIONS = gql`
mutation deleteNotifications($userId:String!)
{ deleteNotifications(userId:$userId) {  message }}
`
const UPDATE_NOTIFICATION = gql`
mutation updateNotification($userId:String!)
{ updateNotification(userId:$userId) {message}}
`
const ADD_ADDRESS = gql`
mutation addAddress(  
      $userId:String!
      $zipCode: Float!
      $city: Float!
      $addressLine: String! 
      $addressName: String! 
      $addressNumber: Float! 
      ){
    addAddress( 
    userId: $userId
    reqBody:{
      zipCode: $zipCode
      city:  $city
      addressLine:  $addressLine
      addressName:  $addressName
      addressNumber:  $addressNumber
    }
    )  {message}
    }
`
const UPDATE_ADDRESS = gql`
mutation updateAddress(  
      $userId:String!
      $addressId: String!
      $zipCode: Float!
      $city: Float!
      $addressLine: String! 
      $addressName: String! 
      $addressNumber: Float! 
      ){
    updateAddress( 
      userId: $userId
      addressId: $addressId
    reqBody:{
      # country:  $country
      zipCode: $zipCode
      city:  $city
      addressLine:  $addressLine
      addressName:  $addressName
      addressNumber:  $addressNumber
    }
    )  {message} 
    }
`
const DELETE_ADDRESS = gql`
mutation delteteAddress(  
      $userId:String!
      $addressId:String!
      ){
    delteteAddress( 
      userId: $userId
      addressId: $addressId
    )  {message} 
    }
`
const ADD_TO_BAG = gql`
mutation addItemToCart(  
      $size:String!
      $productId:String!
      $userId: String!
      ){
      addItemToCart( 
      productId: $productId
      userId: $userId
      size: $size
    )
}
`
const MOVE_TO_CART = gql`
mutation moveToCart(
      $productId:String!  
      $userId:String!
      $itemId:String!
      $size:String!
      ){
        moveToCart( 
        productId: $productId
        userId: $userId
        itemId: $itemId
        size: $size
    )  
}
`
const REMOVE_ITEM = gql`
mutation removeItem(  
      $userId:String!
      $itemId:String!
      $query:String!
      ){
        removeItem( 
        userId: $userId
        itemId: $itemId
        query: $query
    )  
}
`
const MOVE_TO_WISHLIST = gql`
mutation moveToWishList(  
      $userId:String!
      $productId:String!
      $itemId:String!
      ){
        moveToWishList( 
        userId: $userId
        itemId: $itemId
        productId: $productId
    )  
}
`
const APPLY_COUPON_CODE = gql`
mutation applyCouponCode(  
      $userId:String!
      $cartId:String!
      $couponCode:String!
      ){
        applyCouponCode( 
        userId: $userId
        cartId: $cartId
        couponCode: $couponCode
    )  {
      message
      }
}
`
const REMOVE_COUPON = gql`
mutation removeCoupon(  
      $userId:String!
      $cartId:String!
      ){
        removeCoupon( 
        userId: $userId
        cartId: $cartId
    )  {
      message
      }
}
`
const ADD_TO_WISHLIST = gql`
mutation addItemToWishlist(  
      $userId:String!
      $productId:String!
      ){
        addItemToWishlist( 
        userId: $userId
        productId: $productId
    )  
}
`
const ADD_REVIEW = gql`
mutation addReview(
      $productId:String!  
      $userId:String!
      $comment:String!
      $rating:Float! 
      ){
        addReview( 
        productId: $productId
        userId: $userId
        reviewBody:{
        comment: $comment
        rating:  $rating
      }
    )  
}
`
const CHECKOUT = gql`
mutation checkout(
      $userId:String!
      $paymentMethod:Float!
      ){
        checkout( 
        userId: $userId
        paymentMethod: $paymentMethod
    )  
    {message}
}
`
const UPDATE_ORDER_STATUS = gql`
mutation updateOrderStatus(
      $userId:String!
      $orderId:String! 
      $status:Float! 
      ){
        updateOrderStatus( 
        userId: $userId
        orderId: $orderId
        status: $status
    ){
      message
      status
    }  
}
`
const CANCLE_ORDER = gql`
mutation cancleOrder(
      $userId:String!
      $orderId:String! 
      ){
        cancleOrder( 
        userId: $userId
        orderId: $orderId
    )  
}
`
const DELETE_ACCOUNT = gql`
mutation($userId:String!){ deleteAccount(userId:$userId){ message }}
`
export {
  //
  ADMIN_SIGNIN_MUTATION, SIGNIN_MUTATION, SIGNUP_MUTATION, RESEND_CONFIRMATION, UPDATE_EMAIL, UPDATE_PROFILE, DELETE_ACCOUNT, DELETE_USER, UPDATE_USER,

  ADD_PRODUCT_MUTATION, UPDATE_PRODUCT, DELETE_PRODUCT,

  CHANGE_PASSWORD, RESET_PASSWORD, SEND_OTP, VERIFY_OTP,

  ADD_ADDRESS, UPDATE_ADDRESS, DELETE_ADDRESS,

  ADD_NOTIFICATION, DELETE_NOTIFICATION, DELETE_NOTIFICATIONS, UPDATE_NOTIFICATION, DELETE_MULTI_NOTIFICATIONS,

  ADD_TO_BAG, ADD_TO_WISHLIST, MOVE_TO_CART, MOVE_TO_WISHLIST, REMOVE_ITEM, ADD_REVIEW, APPLY_COUPON_CODE, REMOVE_COUPON,

  CHECKOUT, CANCLE_ORDER, UPDATE_ORDER_STATUS,
  //  
}