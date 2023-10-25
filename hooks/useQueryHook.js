/* eslint-disable */
import { useLazyQuery, useQuery } from "@apollo/client";
import { EMAIL_CONFIRMATION, GET_ADDRESS, GET_ADMIN, GET_ALL_ORDERS, GET_CHART_DATA, GET_CURRENT_USER, GET_ITEMS, GET_NOTIFICATIONS, GET_ONE_ORDER, GET_ONE_PRODUCT, GET_ORDERS, GET_PRODUCTS, GET_ROLES, GET_USER, GET_USERS, GET_USERS_BY_EMAIL } from "../apollo/queries";

// User Graphql QL API

export const getEmailConfirmationHook = ({ variables, skip }) => {
    const { data, loading, error, refetch } = useQuery(EMAIL_CONFIRMATION, { variables, skip: skip });
    return { data, loading, error, refetch }
}
export const getCurrentUserHook = ({ variables, skip }) => {
    const { data, loading, error, refetch } = useQuery(GET_CURRENT_USER, { variables, skip: skip });
    return { data, loading, error, refetch }
}
export const getetNotificationsHook = ({ variables, skip }) => {
    const { data, loading, error, refetch } = useQuery(GET_NOTIFICATIONS, { variables, skip: skip });
    return { data, loading, error, refetch }
}
export const getRoleHook = ({ variables, skip }) => {
    const { data, loading, error, refetch } = useQuery(GET_ROLES, { variables, skip: skip });
    return { data, loading, error, refetch }
}
export const getUserHook = ({ variables, skip }) => {
    const { data, loading, error, refetch } = useQuery(GET_USER, { variables, skip: skip });
    return { data, loading, error, refetch }
}

// Lazy Query works only once called..
export const getUserByEmailHook = ({ variables }) => {
    const [getUserByEmail, { data, loading, error, }] = useLazyQuery(GET_USERS_BY_EMAIL, { variables, });
    return { data, loading, error, getUserByEmail };
}

export const useGetProductDetailsQuery = ({ variables, skip }) => {
    const { data, loading, error } = useQuery(GET_ONE_PRODUCT, { variables: variables, skip: skip });
    return { data, loading, error }
}
export const useGetProductsQuery = ({ variables, skip }) => {
    const { data, loading, error } = useQuery(GET_PRODUCTS, { variables, skip: false });
    return { data, loading, error }
}

export const useGetItemsHook = ({ variables, skip }) => {
    const { data, loading, error, refetch } = useQuery(GET_ITEMS, { variables, skip: skip });
    return { data, loading, error, refetch }
}
export const getAddressHook = ({ variables, skip }) => {
    const { data, loading, error } = useQuery(GET_ADDRESS, { variables, skip: skip });
    return { data, loading, error }
}
export const getUserOrdersHook = ({ variables, skip }) => { // getUsersOrders
    const { data, loading, error } = useQuery(GET_ORDERS, { variables, skip: skip });
    return { data, loading, error }
}
export const getOneOrdersHook = ({ variables, skip }) => {
    const { data, loading, error } = useQuery(GET_ONE_ORDER, { variables, skip: skip });
    return { data, loading, error }
}
export const getAllOrdersHook = ({ }) => {
    const { data, loading, error } = useQuery(GET_ALL_ORDERS, {});
    return { data, loading, error }
}
