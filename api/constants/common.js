const COMMON = {
    API_PREFIX: "/api/v1"
}

const PRICE_FILTER = {
    MAX: 10000,
    MIN: 0,
}

const ROLES = {
    SUPER_ADMIN: "super-admin",
    REXE_ADMIN: "rexe-admin",
    HOTEL_ADMIN: "hotel-admin",
    CUSTOMER: "customer"
}

const TOKEN_TYPE = {
    REGISTRATION_TOKEN: "registration",
    RESET_PASSWORD_TOKEN: "reset-password",
}

module.exports = {
    COMMON,
    PRICE_FILTER,
    ROLES,
    TOKEN_TYPE
}